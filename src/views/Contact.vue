<template>
  <b-container>

    <b-card

    tag="article"

    class="mb-2"
    >
    <b-img-lazy :src="contact['picture']" alt="Image" thumbnail fluid rounded="circle"   style="max-width: 10rem;"></b-img-lazy>
    <b-card-title>{{ contact['vcard:hasName']}}</b-card-title>
    bip
    <b-card-sub-title> {{ contact['vcard:hasName']}} {{ contact['vcard:hasEmail']}} {{ contact['solid:hasWebid']}} {{ contact['vcard:phone']}}</b-card-sub-title>
    bop
    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

  {{contact}}

  <div id="toolbar" style="position: fixed; bottom: 0px; left: 0px; width: 100%; color: #fff; background: #000;">
    <b-row>
      <b-button variant="outline-light" class="col p-3" style="text-align:center">
        <b-icon icon="share"></b-icon> QR Code
      </b-button>
      <b-button variant="outline-light" class="col p-3" style="text-align:center" @click="modify">
        <b-icon icon="pencil-fill"></b-icon> Modify
      </b-button>
      <b-button variant="outline-light" class="col p-3" style="text-align:center">
        <b-icon icon="share-fill"></b-icon> Share
      </b-button>
    </b-row >
  </div>

</b-container>
</template>

<script>
export default {
  name: 'Conatct',
  props: ['contact'],
  methods: {
    modify() {
      this.$router.push({ name: 'EditContact', params: { vcard: this.contact } })

    }
  }
}
</script>

<style>

</style>
