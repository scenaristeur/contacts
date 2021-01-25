<template>
  <div>


    <!--
    <b-form-group
    id="fieldset-1"
    description="In which container ?"
    label="Path"
    label-for="path"
    >
    <b-input id="path" v-model="post.path" placeholder="path, ex: persons "/>
  </b-form-group> -->

  <b-form-group
  id="fieldset-1"
  description="Select the type of the Resource."
  label="Type"
  label-for="type"
  >
  <b-form-select v-model="post.meta.type" :options="models" :selected="models[0]" ></b-form-select>
  <!-- <b-input id="type" v-model="post.data.type" placeholder="type, ex: Person "/> -->


</b-form-group>

<b-form-group
id="fieldset-1"
description="Enter the name of the Resource."
label="Name"
label-for="name"
>
<b-input id="name" v-model="post.data['schema:name']" placeholder="name, ex: 'Bobby Cool'" />
</b-form-group>


<b-button @click="post_action">Post</b-button>
</div>
</template>

<script>
//import axios from 'axios';
import { mapState } from 'vuex';

export default {
  name: 'AxiosPost',
  data() {
    return {
      models:[
        {value:{name: 'Workspace', type: 'http://purl.org/vocab/lifecycle/schema#TaskGroup', path:'workspaces'}, text: 'Workspace'},
        {value:{name: 'Base', type: 'https://www.w3.org/ns/activitystreams#Base', path:'bases'}, text: 'Base'},
        {value:{name: 'Table', type: 'https://www.w3.org/ns/activitystreams#Table', path:'tables'}, text: 'Table'},
        {value:{name: 'Field', type: 'https://www.w3.org/ns/activitystreams#Field', path:'fields'}, text: 'Field'},
        {value:{name: 'Record', type: 'https://www.w3.org/ns/activitystreams#Record', path:'records'}, text: 'Record'},
        {value:{name: 'Task', type: 'https://www.w3.org/ns/activitystreams#Task', path:'tasks'}, text: 'Task'},
        {value:{name: 'Person', type: 'https://www.w3.org/ns/activitystreams#Person', path:'persons'}, text: 'Person'},
        {value:{name: 'Document', type: 'https://www.w3.org/ns/activitystreams#Document', path:'documents'}, text: 'Document'},
        {value:{name: 'File', type: 'https://www.w3.org/ns/activitystreams#File', path:'files'}, text: 'File'},
        {value:{name: 'Tag', type: 'https://www.w3.org/ns/activitystreams#Tag', path:'tags'}, text: 'Tag'},
        {value:{name: 'Offer', type: 'https://www.w3.org/ns/activitystreams#Offer', path:'offers'}, text: 'Offer'},
        {value:{name: 'Need', type: 'https://www.w3.org/ns/activitystreams#Need', path:'needs'}, text: 'Need'},
        {value:{name: 'Thing', type: 'https://www.w3.org/ns/activitystreams#Thing', path:'things'}, text: 'Thing'},
        {value:{name: 'Skill', type: 'https://www.w3.org/ns/activitystreams#Skill', path:'skills'}, text: 'Skill'},
        {value:{name: 'Category', type: 'https://www.w3.org/ns/activitystreams#Category', path:'categories'}, text: 'Category'},

      ],
      post: {
        data: {
          "@context":
          {
            as: "https://www.w3.org/ns/activitystreams",
            schema: "http://schema.org/"
          },
          "schema:name": "Guillaume Cousin",
          '@type': ""
        },
        meta: {}
      },
      //       {
      //   "@context": "https://json-ld.org/contexts/person.jsonld",
      //   "@id": "http://dbpedia.org/resource/John_Lennon",
      //   "name": "John Lennon",
      //   "born": "1940-10-09",
      //   "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
      // }
    };
  },
  methods: {
    post_action() {
      console.log(this.post)
      this.post.data['schema:dateCreated'] = new Date().toISOString()
      this.post.data['@type'] = this.post.meta.type.type
      console.log(JSON.stringify(this.post.data))
      let store = this.$store
      let container = this.post.meta.type.path
      let post_data = this.post.data

      fetch(this.ldp_server.url+'/'+this.post.meta.type.path+'/',
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "POST",
        body: JSON.stringify(this.post.data)
      })
      .then(function(res){
        console.log(res)
        store.dispatch('ldp_store/update', container)
        post_data['schema:name'] = ''
      })
      .catch(function(res){ console.log(res) })

      // axios.post(
      //   this.ldp_server.url+'/'+this.post.data.type.path+'/',
      //   this.post.data,
      //   {header: {'Content-Type': 'application/ld+json'}}
      // )
      //  let data =  { '@context': "https://www.w3.org/ns/activitystreams", '@type': "Person", 'name': "POL2"}

      //   axios.post(this.ldp_server.url+'/'+this.post.data.type.path+'/',
      //   {
      //     '@context': "https://www.w3.org/ns/activitystreams", '@type': "Person", 'name': "POL2"},
      //   {
      //     header: {
      //       'Content-Type': 'application/ld+json',
      //       'Accept': 'application/ld+json'
      //     }
      //   }
      // )
      // .then((response) => {
      //   console.log(response);
      //   //  this.$store.dispatch('ldp_store/update', this.post.data.type.path)
      //   //  console.log(response.headers.get('Location'))
      // }, (error) => {
      //   console.log(error);
      // });
    },
  },
  computed: mapState({
    ldp_server: s =>  s.ldp_store.ldp_server
  }),

}
</script>

<style>

</style>
