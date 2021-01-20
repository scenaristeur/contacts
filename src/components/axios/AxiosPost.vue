<template>
  <div>



    <b-form-group
          id="fieldset-1"
          description="In which container ?"
          label="Path"
          label-for="path"
        >
          <b-input id="path" v-model="post.path" placeholder="path, ex: persons "/>
        </b-form-group>

        <b-form-group
      id="fieldset-1"
      description="Select the type of the Resource."
      label="Type"
      label-for="type"
    >
    <b-input id="type" v-model="post.data.type" placeholder="type, ex: Person "/>
    </b-form-group>

    <b-form-group
      id="fieldset-1"
      description="Enter the name of the Resource."
      label="Name"
      label-for="name"
    >
    <b-input id="name" v-model="post.data.name" placeholder="name, ex: 'Bobby Cool'" />
    </b-form-group>









    <b-button @click="post_action">Post</b-button>
  </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'AxiosPost',
  data() {
    return {
      post: {
        path: 'persons',
        data: {
          "@context": "https://www.w3.org/ns/activitystreams",
          "type": "Person",
          "name": "Guillaume Cousin"
        },
      }
    };
  },
  methods: {
    post_action() {
      axios.post(this.ldp_server.url+'/'+this.post.path+'/', this.post.data, {/* Config*/}
      );
    },
  },
  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server
  }),

}
</script>

<style>

</style>
