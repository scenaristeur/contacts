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
  description="Select the type of the Resource."
  label="Type"
  label-for="type"
  >
  <b-form-select v-model="post.meta.type" :options="models" :selected="models[0]" ></b-form-select>
  <!-- <b-input id="type" v-model="post.data.type" placeholder="type, ex: Person "/> -->
</b-form-group>

<b-form-group
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
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { v4 as uuidv4 } from 'uuid';

export default {
  name: 'AxiosPost',
  data() {
    return {
      selected: {},
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
    async  post_action() {
      console.log(this.post)
      this.post.data['schema:dateCreated'] = new Date().toISOString()
      this.post.data['@type'] = this.post.meta.type.type
      console.log(JSON.stringify(this.post.data))
      let store = this.$store
      let container = this.post.meta.type.path
      let post_data = this.post.data

      console.log(this.storage)

      if (this.storage == null){
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
      }else{
        try{
          let url = this.ldp_server.url.endsWith('/') ? this.ldp_server.url+this.post.meta.type.path+'/'+uuidv4()+'.jsonld' : this.ldp_server.url+'/'+this.post.meta.type.path+'/'+uuidv4()+'.jsonld'
          console.log(url)
          console.log(this.post.data)
          await fc.createFile(url, JSON.stringify(this.post.data), 'application/json' ).then((content) => {
        console.log(content)
    })
    .catch(err => console.error(`Error: ${err}`))

          alert(url+" sauvegardé")
        }
        catch(e){
          alert(e)
        }
      }



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
    ldp_server: s =>  s.ldp_store.ldp_server,
    models: s =>  s.ldp_store.models,
    storage: s =>  s.solid.storage

  }),

}
</script>

<style>

</style>
