<template>
  <b-container>
    <div class="add-item">

      <b-form-input v-model="vcard['vcard:hasName']"  placeholder="vcard:hasName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasEmail']"  placeholder="vcard:hasEmail"></b-form-input>
      <b-form-input v-model="vcard['solid:hasWebId']"  placeholder="solid:hasWebId"></b-form-input>
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
  methods: {
    cancel() {
      this.$router.back({params: { contact: this.vcard }})
    },
    save(){
      this.$store.dispatch('contacts/add',this.vcard)
        this.$router.push({ name: 'Contact', params: { contact: this.vcard } })
    }
  }
}
</script>

<style>

</style>
