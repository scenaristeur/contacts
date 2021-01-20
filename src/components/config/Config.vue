<template>
  <div id="config">
    ldp_server : {{ ldp_server}}

  </div>
</template>


<script>
import { mapState } from 'vuex';

export default {
  name: 'Config',

  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server
  }),
}
</script>
