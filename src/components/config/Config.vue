<template>
  <div id="config">
    ldp_server : {{ ldp_server}}<br>


    <p v-for="(container, c) in Object.keys(app)" :key="c">
      <b>{{ container }}</b><br>
      <!-- {{ app[container]}} -->
      <Tableau :donnees="app[container]" data-app />

    </p>

        <!-- app: {{ app }} -->

  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'Config',
  components: {
    'Tableau': () => import('@/components/basic/Tableau'),
    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },

  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server,
    app: s => s.ldp_store.app
  }),
}
</script>
