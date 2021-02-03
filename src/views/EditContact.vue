<template>
  <b-container>
    <b-row>
      <b-col>
        <b-avatar variant="info" :src="vcard['vcard:hasPhoto']" class="mr-3" size="3rem" button @click="$refs.fileInput.$el.childNodes[0].click()"></b-avatar>
        <!-- <b-icon icon="camera-fill" class="h1 rounded-circle bg-info p-1" variant="dark" type="button" @click="$refs.fileInput.$el.childNodes[0].click()"></b-icon> -->

        <b-form-file
        ref="fileInput" style="display:none;"
        accept="image/*"
        v-model="file"
        ></b-form-file>


      </b-col>
      <b-col sm="9">

        <h6>Main fields </h6>
        <b-form-input v-model="vcard['vcard:given-name']"  placeholder="vcard:given-name" @input="updateName"></b-form-input>
        <b-form-input v-model="vcard['vcard:family-name']"  placeholder="vcard:family-name" @input="updateName"></b-form-input>
        <b-form-input v-model="vcard['vcard:hasName']"  placeholder="vcard:hasName"></b-form-input>
        <b-form-input v-model="vcard['vcard:hasEmail']"  placeholder="vcard:hasEmail"></b-form-input>
        <b-form-input v-model="vcard['vcard:hasURL']"  placeholder="vcard:hasURL"></b-form-input>
        <b-form-input v-model="vcard['vcard:hasTelephone']"  placeholder="vcard:hasTelephone"></b-form-input>
      </b-col>


    </b-row>
    <h6>All fields</h6>



    <b-container fluid>
      <div v-for="([key,field], i) in Object.entries(vcard)" :key='i'>
        <b-row class="my-1" v-if="key != '@context' && key != '@id' && key != '@type'">
          <b-col sm="2">
            <label :for="vcard[key]"> {{ key }}:</label>
          </b-col>
          <b-col sm="8">
            <b-form-input :id="vcard[key]" v-model="vcard[key]"  :placeholder="key"></b-form-input>
          </b-col>
          <b-col sm="2">
            <!-- <b-button variant="outline-success" size="sm"><b-icon icon="plus"></b-icon></b-button> -->
            <b-button variant="danger" size="sm" @click="del(key)"><b-icon icon="trash"></b-icon></b-button>
          </b-col>
        </b-row>
      </div>
    </b-container>




    <!-- <div v-for="([key,field], i) in Object.entries(vcard)" :key='i'>

    <b-input-group class="mt-3" v-if="key != 'jsonld' && key != 'basic_fields' && key != '@id' && key != '@type'">
    <label :for="vcard[key]"> <code>{{ key }}</code>:</label>
    <b-form-input :id="vcard[key]" v-model="vcard[key]"  :placeholder="key"></b-form-input>
    <b-input-group-append>
    <b-button variant="outline-success"><b-icon icon="plus"></b-icon></b-button>
    <b-button variant="danger"><b-icon icon="trash"></b-icon></b-button>
  </b-input-group-append>
</b-input-group>
</div> -->

<hr>
<b-row>
  <b-form-select class="col" v-model="selected" :options="fields"></b-form-select>
  <b-form-select class="col" v-model="selected" :options="socials"></b-form-select>
</b-row>
<br>
<b-input-group v-if="selected != null" class="mt-3">
  <b-input-group-prepend class="m-2">
    {{ selected.label }}
  </b-input-group-prepend>
  <b-form-input ref="field_input" v-model="vcard[selected['@id']]"  :placeholder="'Add a '+selected.label"></b-form-input>

</b-input-group>

{{ selected}}

<hr>



{{ social_selected }}
<!-- <b-list-group>
<b-list-group-item v-for="(f,i) in fields" :key="i" variant="warning">{{f}}</b-list-group-item>

</b-list-group> -->



<br><br><br><br>
<!-- {{ vcard }} -->

<div id="toolbar" style="position: fixed; bottom: 0px; left: 0px; width: 100%; color: #fff; background: #000;">
  <b-row>
    <b-button class="col p-3" style="text-align:center" @click="cancel">
      <b-icon icon="close"></b-icon> Cancel
    </b-button>
    <b-button class="col p-3" style="text-align:center" @click="save">
      <b-icon icon="ok"></b-icon> Save
    </b-button>
  </b-row >
</div>


</b-container>
</template>

<script>
import { mapState } from 'vuex';

import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import VCardContext from '@/models/Vcard.jsonld.js'
//console.log(VCardContext)


export default {
  name: 'EditContact',
  props: ['vcard'],
  data() {
    return {
      file: null,
      fields : VCardContext.defines.filter(function(f) { return f['@type'] != 'owl:Class' && f.deprecated != true; }).map((x) => {return {value: x, text: x.label}}),
      selected: null,
      social_selected: null,
      socials: [{value: null, text: 'Add a Social Profil'},
      { value: { "@id": "socialProfile;type=solid", "label": "Solid Pod"}, text: 'Solid Pod'},
      { value: { "@id": "socialProfile;type=linkedin", "label": "Linkedin"}, text: 'Linkedin'},
      { value: { "@id": "socialProfile;type=facebook", "label": "Facebook"}, text: 'Facebook'},
      { value: { "@id": "socialProfile;type=twitter", "label": "Twitter"}, text: 'Twitter'},
      { value: { "@id": "socialProfile;type=instagram", "label": "Instagram"}, text: 'Instagram'},
      { value: { "@id": "socialProfile;type=hangouts", "label": "Hangouts"}, text: 'Hangouts'},
      { value: { "@id": "socialProfile;type=qq", "label": "QQ"}, text: 'QQ'},
      { value: { "@id": "socialProfile;type=skype", "label": "Skype"}, text: 'Skype'},
      { value: { "@id": "socialProfile;type=yahoo", "label": "Yahoo"}, text: 'Yahoo'},
      { value: { "@id": "socialProfile;type=aim", "label": "AIM"}, text: 'AIM'},
      { value: { "@id": "socialProfile;type=icq", "label": "ICQ"}, text: 'ICQ'},
      { value: { "@id": "socialProfile;type=jabber", "label": "Jabber"}, text: 'Jabber'},
      { value: { "@id": "socialProfile;type=windowsLive'", "label": "Windows Live'"}, text: 'Windows Live'},
      { value: { "@id": "socialProfile;type=other", "label": "Other"}, text: 'Other'}

    ]
    // ```
    // socialProfile;type=linkedin:http://www.linkedin.com/in/barryleiba
    // socialProfile;type=facebook:http://www.facebook.com/barackobama
    // socialProfile;type=solid:https://www.spoggy-test5.solidcommunity.net/profile/card#me
    // ```

  };
},
created(){
  //  this.from = this.$route.from
  //  console.log('route', this.$route)
  this.fields.unshift({value: null, text:'Add a field'})
  //  console.log('router', this.$router)
},
methods: {
  del(key){
    this.vcard[key] = null
    delete this.vcard[key]
  },
  cancel() {
    //  console.log(this.$router.go(-1))
    this.$router.go(-1) //, {params: { contact: this.vcard }})
    //this.$router.back({params: { contact: this.vcard }})
  },
  save(){
    console.log(this.vcard)
    this.$store.dispatch('contacts/add',this.vcard)
    this.$router.push({ name: 'Contact', params: { contact: this.vcard } })
  },
  updateName(){
    console.log('update')
    let gn = this.vcard['vcard:given-name'] || ""
    let fn = this.vcard['vcard:family-name'] || ""
    this.vcard['vcard:hasName'] = gn+" "+fn
  }
},
watch: {
  '$route' (to, from) {
    console.log("from",from)
    console.log("to",to)
    //  this.webId = to.params.webId || "me"
    // réagir au changement de route...
  },
  async  file (file) {
    let path = this.storage+'contacts-pics/'
    let uri = file.webkitRelativePath.length > 0 ? path+file.webkitRelativePath : path+file.name
    console.log(uri, file, file.type)
    await fc.createFile(uri, file, file.type)
    this.vcard['vcard:hasPhoto'] = uri
    // this.$store.dispatch('contacts/add',this.contact)
    // console.log('todo: must update pic')
  },

},

computed: mapState({
  storage: s => s.solid.storage

}),

}
</script>

<style>

</style>
