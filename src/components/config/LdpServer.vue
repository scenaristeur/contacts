<template>
  <div class="add-item">
    <form action="#" method="post" v-on:submit.prevent="submitForm" class="mb-3">
      <b-form-input v-model="itemLabel" v-on:submit.prevent="submitForm" placeholder="Choose a Ldp server"></b-form-input>
    </form>
  </div>
</template>

<script>

import { mapState } from 'vuex';

export default {
  name: 'LdpServer',
  data() {
    return {
      itemLabel: '',
    };
  },
  methods: {
    submitForm() {
      if (this.itemLabel) {
        this.$store.commit('ldp_store/setServer', {
          url: this.itemLabel,
        });
        this.itemLabel = '';
      }
    },
  },
  watch:{
    storage(){
      this.itemLabel = this.storage
    }
  },
  computed: mapState({
    storage: s =>  s.solid.storage,
  }),
}
</script>

<style>
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
