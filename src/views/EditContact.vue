<template>
  <b-container>
    <div class="add-item">

      <b-form-input v-model="vcard['vcard:given-name']"  placeholder="vcard:given-name" @input="updateName"></b-form-input>
      <b-form-input v-model="vcard['vcard:family-name']"  placeholder="vcard:family-name" @input="updateName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasName']"  placeholder="vcard:hasName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasEmail']"  placeholder="vcard:hasEmail"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasURL']"  placeholder="vcard:hasURL"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasTelephone']"  placeholder="vcard:hasTelephone"></b-form-input>

    </div>
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
export default {
  name: 'EditContact',
  props: ['vcard'],
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


  },
  computed:{

  }
}
</script>

<style>

</style>
