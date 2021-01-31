<template>
  <b-container>

    <b-card

    tag="article"

    class="mb-2"
    >
    <!-- <b-button  style="position: absolute; top: 10px; right: 10px; width: 100; color: #fff; background: #000;">
    <b-icon icon="menu-button-wide"></b-icon>

  </b-button> -->

  <b-dropdown id="dropdown-1"
  dropleft
  size="lg"  variant="link" toggle-class="text-decoration-none" no-caret
  class="m-md-2"  style="position: absolute; top: 10px; right: 10px; width: 100; ">
  <template #button-content>
    <b-icon icon="menu-button-wide"></b-icon>
  </template>
  <b-dropdown-item v-b-modal.modalConfirmDelete variant="warning">Delete</b-dropdown-item>
  <!-- <b-dropdown-item>Second Action</b-dropdown-item>
  <b-dropdown-item>Third Action</b-dropdown-item>
  <b-dropdown-divider></b-dropdown-divider>
  <b-dropdown-item active>Active action</b-dropdown-item>
  <b-dropdown-item disabled>Disabled action</b-dropdown-item> -->
</b-dropdown>


<b-avatar variant="info" :src="contact['vcard:hasPhoto']" class="mr-3" size="6rem"></b-avatar>

<b-card-title>{{ contact['vcard:hasName']}} <a :href="contact['@id']" target="_blank"><b-icon icon="link"></b-icon></a> </b-card-title>

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
  GivenName  : {{ contact['vcard:given-name'] }}<br>
  FamilyName : {{ contact['vcard:family-name'] }}<br>
</b-card-text>

<b-card-text v-if="contact['vcard:hasAddress']">
  Address :
  <!-- <b-button :href="'geo://?q='+contact['vcard:hasAddress']" target="_blank" class="col p-3" style="text-align:center">
    protocol geo
    <b-icon icon="geo-alt-fill"  :variant="contact['vcard:hasAddress'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:hasAddress']}}
  </b-button> -->
  <b-button :href="'https://www.google.com/maps/search/'+contact['vcard:hasAddress']" target="_blank" style="text-align:center">
  {{ contact['vcard:hasAddress']}} <b-icon icon="geo-alt-fill"  :variant="contact['vcard:hasAddress'] != undefined ? 'success' : 'danger'"></b-icon>
  </b-button>

  <!-- <b-button :href="'https://nominatim.openstreetmap.org/ui/search.html?q='+contact['vcard:hasAddress']"  target="_blank" class="col p-3" style="text-align:center">
    open streetmap
    <b-icon button  icon="geo-alt-fill"  :variant="contact['vcard:hasAddress'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:hasAddress']}}
  </b-button> -->

</b-card-text>
<b-card-text v-if="contact['vcard:adr']">
  Address :
  <!-- <b-button :href="'maps:'+contact['vcard:adr']" target="_blank" class="col p-3" style="text-align:center">
    protocol maps:
    <b-icon icon="geo-alt-fill"  :variant="contact['vcard:adr'] != undefined ? 'success' : 'danger'"></b-icon> {{ contact['vcard:adr']}}
  </b-button> -->

  <b-button :href="'https://www.google.com/maps/search/'+contact['vcard:adr']" target="_blank" style="text-align:center">
  {{ contact['vcard:adr']}} <b-icon icon="geo-alt-fill"  :variant="contact['vcard:adr'] != undefined ? 'success' : 'danger'"></b-icon>
  </b-button>




</b-card-text>



<!-- <b-button href="#" variant="primary">Go somewhere</b-button> -->
</b-card>


<!-- {{contact}} -->
<br><br><br><br>

<div id="toolbar" style="position: fixed; bottom: 0px; left: 0px; width: 100%; color: #fff; background: #000;">
  <b-row>
    <b-button  class="col p-3" style="text-align:center" v-b-modal.modalQR>
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




<b-modal id="modalQR">
  <template #modal-title>
    {{ contact['vcard:hasName']}}
  </template>
  <vueVcard
  orgPost="00000"
  orgStreet="Some Street"
  orgRegion="Some Region"
  orgCity="Some City"
  orgCountry="LRK"
  orgName="OrganizationName"
  firstName="John"
  lastName="Doe"
  workPhone="5555555555"
  homePhone="5555555555"
  />
</b-modal>

<b-modal id="modalConfirmDelete" @ok="deleteContact">
  <template #modal-title>
    Are you sur you want to delete ?
  </template>
  <h1>{{ contact['vcard:hasName']}}</h1>

  <p variant="danger">!!! This can not be undone !!!</p>

</b-modal>

</b-container>
</template>

<script>

export default {
  name: 'Conatct',
  props: ['contact'],

  methods: {
    modify() {
      this.$router.push({ name: 'EditContact', params: { vcard: this.contact } })

    },
    deleteContact(){
      this.$store.dispatch('contacts/delete',this.contact)
      this.$router.push({ name: 'Contacts' })
    }
  },


}
</script>

<style>

</style>
