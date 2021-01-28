<template>
  <div class="home">
    <LdpServer />
    <AxiosPost />


<VCard />

    <p v-for="(container, c) in Object.keys(app)" :key="c">
      <b>{{ container }}</b><br>
      <!-- {{ app[container]}} -->
      <Tableau :donnees="app[container]" data-app />

    </p>

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    'LdpServer': () => import('@/components/config/LdpServer'),
    'AxiosPost': () => import('@/components/axios/AxiosPost'),
    'Tableau': () => import('@/components/basic/Tableau'),
    'VCard': () => import('@/components/basic/VCard'),
    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
  computed: mapState({
  //  ldp_server: s =>  s.ldp_store.ldp_server,
    app: s => s.ldp_store.app
  }),
}
</script>
