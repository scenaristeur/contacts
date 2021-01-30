<template>
  <b-container>
    <div class="add-item">

      <b-img-lazy v-if="vcard['vcard:hasPhoto'] != undefined" :src="vcard['vcard:hasPhoto']" alt="Image" thumbnail fluid rounded="circle"   style="max-width: 10rem;"></b-img-lazy>
      <b-img-lazy v-else src="https://image.flaticon.com/icons/svg/149/149992.svg" alt="Image" thumbnail fluid rounded="circle"   style="max-width: 10rem;"></b-img-lazy>

      <b-form-file
      ref="fileInput" style="display:none;"
      accept="image/*"
      v-model="file"
      ></b-form-file>
      <b-icon icon="camera-fill" class="h1 rounded-circle bg-info p-1" variant="dark" type="button" @click="$refs.fileInput.$el.childNodes[0].click()"></b-icon>

      <b-form-input v-model="vcard['vcard:given-name']"  placeholder="vcard:given-name" @input="updateName"></b-form-input>
      <b-form-input v-model="vcard['vcard:family-name']"  placeholder="vcard:family-name" @input="updateName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasName']"  placeholder="vcard:hasName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasEmail']"  placeholder="vcard:hasEmail"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasURL']"  placeholder="vcard:hasURL"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasTelephone']"  placeholder="vcard:hasTelephone"></b-form-input>

    </div>
    <br><br><br><br>
    <!-- {{ vcard }} -->

    <div id="toolbar" style="position: fixed; bottom: 0px; left: 0px; width: 100%; color: #fff; background: #000;">
      <b-row>
        <b-button variant="outline-light" class="col p-3" style="text-align:center" @click="cancel">
          <b-icon icon="close"></b-icon> Cancel
        </b-button>
        <b-button variant="outline-light" class="col p-3" style="text-align:center" @click="save">
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


export default {
  name: 'EditContact',
  props: ['vcard'],
  data() {
    return {
      file: null
    };
  },
  created(){
    //  this.from = this.$route.from
    console.log('route', this.$route)
    //  console.log('router', this.$router)
  },
  methods: {
    cancel() {
      //  console.log(this.$router.go(-1))
      this.$router.go(-1) //, {params: { contact: this.vcard }})
      //this.$router.back({params: { contact: this.vcard }})
    },
    save(){
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
