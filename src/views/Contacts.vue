<template>
  <b-container>


    <b-button @click="editContact">New Contact</b-button>

    <b-list-group>
      <b-list-group-item>Default list group item</b-list-group-item>

      <b-list-group-item v-for="c in contacts" :key="c['@id']" variant="light" class="text-dark mb-1" button @click="open(c)">
        <b-img-lazy :src="c['picture']" alt="Image" fluid rounded="circle"   style="max-width: 1.5rem;"></b-img-lazy>
        {{c['vcard:hasName']}}
      </b-list-group-item>

    </b-list-group>

    <!-- <b-modal id="newContact" title="New Contact" @ok="createVcard">
      <EditContact :vcard="vcard"/>
    </b-modal> -->

  </b-container>
</template>

<script>
import Vcard from '@/models/Vcard.js'
import { mapState } from 'vuex';

export default {
  name: 'Contacts',
  components: {
    // 'LdpServer': () => import('@/components/config/LdpServer'),
    // 'AxiosPost': () => import('@/components/axios/AxiosPost'),
    // 'Tableau': () => import('@/components/basic/Tableau'),
    // 'VCard': () => import('@/components/basic/VCard'),
    //'EditContact': () => import('@/views/EditContact'),

    //  'MenuBar': () => import('@/components/layout/MenuBar'),
    // 'Table': () => import('@/components/table/Table'),
  },
  data() {
    return {
      vcard: {}
    };
  },
  methods: {
    editContact() {
      this.vcard = new Vcard()
      console.log("vcard", this.vcard)
      this.$router.push({ name: 'EditContact', params: { vcard: this.vcard } })

      // this.options = this.vcard.jsonld['@context'].defines.filter(function(f) {
      //   return f['@type'] != 'owl:Class' && f.deprecated != true;
      // }).map(f => ( {value: f, text: f.label+' '+f['@type']} ))
      //
      // // var result = arr.map(person => ({ value: person.id, text: person.name }));
      // this.options.unshift({value: null, text:'Add a field'})
      // console.log("options", this.options)
    },
    // createVcard(){
    //   console.log(this.vcard)
    //   this.$store.dispatch('contacts/add',this.vcard)
    // },
    open(c){
      console.log(c)
      this.$router.push({ name: 'Contact', params: { contact: c } })
    }
  },
  watch:{
    storage(){
      this.$store.dispatch('contacts/findAll')
    }
  },
  computed: mapState({
    contacts: s =>  s.contacts.contacts,
    storage: s => s.solid.storage

  }),

}
</script>

<style>

</style>
