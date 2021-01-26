<template>
  <div id="config">
    ldp_server : {{ ldp_server}}<br>




    <!-- app: {{ app }} -->

  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'Config',
  components: {

    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },

  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server,
  //  app: s => s.ldp_store.app
  }),
}
</script>
