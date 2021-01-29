<template>
  <b-container>

    <b-card

    tag="article"

    class="mb-2"
    >
    <b-img-lazy :src="contact['picture']" alt="Image" thumbnail fluid rounded="circle"   style="max-width: 10rem;"></b-img-lazy>
    <b-card-title>{{ contact['vcard:hasName']}}</b-card-title>

    <b-card-sub-title>
      <b-row>
        <!-- tel: / sms: / mms: / camera / mail
        https://developers.google.com/web/fundamentals/native-hardware/click-to-call
        feed:, maps:, youtube:
        skype : callto:
        https://stackoverflow.com/questions/26088523/click-to-call-html-->
        <b-button :href="'mailto:'+contact['vcard:hasEmail']" class="col p-3" style="text-align:center">
          <b-icon icon="envelope-fill" :variant="contact['vcard:hasEmail'] != undefined ? 'success' : 'danger'"></b-icon>
           {{ contact['vcard:hasEmail']}}
        </b-button>
        <b-button :href="contact['vcard:hasURL']" target="_blank" class="col p-3 button" style="text-align:center">
          <b-icon icon="link"  :variant="contact['vcard:hasURL'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:hasURL']}}
        </b-button>
        <b-button :href="'tel:'+contact['vcard:hasTelephone']" class="col p-3" style="text-align:center">
          <b-icon icon="telephone-fill"  :variant="contact['vcard:hasTelephone'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:hasTelephone']}}
        </b-button>
        <b-button :href="'sms:'+contact['vcard:hasTelephone']" class="col p-3" style="text-align:center">
          <b-icon icon="chat-left-fill"  :variant="contact['vcard:hasTelephone'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:hasTelephone']}}
        </b-button>



      </b-row>
    </b-card-sub-title>



    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Go somewhere</b-button>
  </b-card>

  {{contact}}

  <div id="toolbar" style="position: fixed; bottom: 0px; left: 0px; width: 100%; color: #fff; background: #000;">
    <b-row>
      <b-button  class="col p-3" style="text-align:center">
        <b-icon icon="share"></b-icon> QR Code
      </b-button>
      <b-button  class="col p-3" style="text-align:center" @click="modify">
        <b-icon icon="pencil-fill"></b-icon> Modify
      </b-button>
      <b-button  class="col p-3" style="text-align:center">
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
