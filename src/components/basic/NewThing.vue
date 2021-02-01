<template>
  <b-container fluid>


    <b-input-group class="mt-3">
      <b-form-input v-model="name" :placeholder="'new '+type.name"></b-form-input>
      <b-input-group-append>
        <b-button @click="create" variant="primary">+</b-button>
      </b-input-group-append>
    </b-input-group>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';
import Thing from '@/models/Thing'
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'NewThing',
  props: ['type'],
  data() {
    return {
      name: ''
    }
  },
  methods: {
    create() {
      let thing = new Thing()
      //  let thing = {}
      console.log('type',this.type)
      thing['@id'] = this.ldp_server.url+'/'+this.type.path+'/'+uuidv4() //this.ldp_server.url+'/'+this.type.path+'/'+thing.['@id']
      thing['@type'] = this.type.type
      thing['schema:name'] = this.name

      console.log(thing)
      fetch(this.ldp_server.url+'/'+this.type.path+'/' ,
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(thing)
      })
      .then(function(res){
        console.log("error",res)

      })
      .catch(function(res){ console.log(res) })
      this.$emit('itemCreated', thing)
    }
  },
  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server,
    models: s =>  s.ldp_store.models

  }),
}
</script>

<style>

</style>
