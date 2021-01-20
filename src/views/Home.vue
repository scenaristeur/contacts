<template>
  <div class="home">
    <LdpServer />
    <AxiosPost />

  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Home',
  components: {
    'LdpServer': () => import('@/components/config/LdpServer'),
    'AxiosPost': () => import('@/components/axios/AxiosPost'),
    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server
  }),
}
</script>
