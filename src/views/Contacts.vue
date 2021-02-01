<template>
  <b-container>

    <!-- <b-button @click="editContact">New Contact</b-button> -->

    <!-- [[ search filter ]]
    https://codepen.io/AndrewThian/pen/QdeOVa<br>
    https://stackoverflow.com/questions/41712791/search-a-list-while-typing-in-textbox-vuejs-2<br>
    https://stackoverflow.com/questions/52558770/vuejs-search-filter<br> -->
    <div class="mb3 add-item">
      <b-form-input v-model="search" placeholder="Search" variant="" class="mb3"></b-form-input>
    </div>

    <b-list-group>
      <span v-for="c in contacts" :key="c['@id']" >
        <b-list-group-item v-if="c['vcard:hasName']!= undefined && c['vcard:hasName'].toLowerCase().includes(search.toLowerCase()) " variant="secondary" class="text-dark" button @click="open(c)" >
          <b-avatar variant="info" :src="c['vcard:hasPhoto']" class="mr-3"></b-avatar>
          {{c['vcard:hasName']}}
        </b-list-group-item>
      </span>

    </b-list-group>


    <!-- <button type="button" class="btn btn-info btn-fab btn-raised dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="material-icons">save</i></button>
    <ul class="dropdown-menu dropdown-menu-right" style="min-width:0; background-color:transparent;">
    <li><a href="#" class="btn btn-danger btn-fab btn-raised"><i class="material-icons">clear</i></a></li>
  </ul> -->


  <b-iconstack font-scale="4"  @click="editContact" class="floating-action-button" type="button">
    <b-icon stacked icon="circle-fill" variant="primary"></b-icon>
    <b-icon stacked icon="plus" scale="0.5" variant="white"></b-icon>
    <b-icon stacked icon="circle" variant="secondary"></b-icon>
  </b-iconstack>


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
      vcard: {},
      search: ""
    };
  },
  async created(){
    // let contacts = JSON.stringify(localStorage.getItem('contacts'))
    // if (contacts.length > 0 ){
    // //  this.contacts = JSON.stringify(contacts)
    //   console.log('from storage', contacts)
    // }

    this.$store.dispatch('contacts/init')
    this.$store.dispatch('contacts/findAll')
  },
  methods: {
    editContact() {
      this.vcard = new Vcard()
      //  console.log("vcard", this.vcard)
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
      //  console.log(c)
      this.$router.push({ name: 'Contact', params: { contact: c } })
    }
  },
  watch:{
    storage(){
      this.$store.dispatch('contacts/findAll')
    },
    contacts(){

      // TO DO store in localstorage or local pod
      //  localStorage.setItem('contacts', JSON.stringify(this.contacts))
    }
    // $route(){
    //   this.$store.dispatch('contacts/findAll')
    // }
  },
  computed: mapState({
    contacts: s =>  s.contacts.contacts,
    storage: s => s.solid.storage
  }),

}
</script>

<style>
.floating-action-button {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index:3;
}
.add-item input {
  outline: none;
  border: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  transition: all 0.25s;
  background: inherit;
  color: white;
}
.add-item input:focus {
  border-bottom-color: rgba(255, 255, 255, 1);
}
</style>
