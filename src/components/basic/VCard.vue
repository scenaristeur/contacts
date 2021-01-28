<template>

  <b-container>



    <div class="add-item">
      <b-form-select v-model="selected" :options="options"></b-form-select>
      <br>
      <form v-if="selected != null" action="#" method="post" v-on:submit.prevent="submitForm" class="mb-3">
        <b-form-input ref="field_input" v-model="vcard[selected['@id']]" v-on:submit.prevent="submitForm" :placeholder="'Add a '+selected.label"></b-form-input>
      </form>

      {{ selected}}
      <!-- <form action="#" method="post" v-on:submit.prevent="submitForm" class="mb-3">
      <div v-for="f in vcard['@context'].defines" :key="f['@id']">
      <div v-if="f.deprecated != true || f.deprecated==null">
      <b-form-input v-model="vcard[f['@id']]" v-on:submit.prevent="submitForm" :placeholder="f['@id']">
    </b-form-input>
  </div>
</div>
</form> -->
</div>

<hr>
<br>
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
</b-container>
</template>

<script>
// from https://www.npmjs.com/package/vue-vcard

import Vcard from '@/models/Vcard.js'

export default {
  name: 'VCard',
  data() {
    return {
      options: [],
      selected: null
    };
  },
  created(){
    this.vcard = new Vcard()
    console.log("vcard", this.vcard)
    this.options = this.vcard.jsonld['@context'].defines.filter(function(f) {
      return f['@type'] != 'owl:Class' && f.deprecated != true;
    }).map(f => ( {value: f, text: f.label+' '+f['@type']} ))

    // var result = arr.map(person => ({ value: person.id, text: person.name }));
    this.options.unshift({value: null, text:'Add a field'})
    console.log("options", this.options)
  },
  methods: {
    submitForm() {
      console.log(this.vcard)
      // if (this.itemLabel) {
      //     this.$store.commit('ldp_store/setServer', {
      //       url: this.itemLabel,
      //     });
      //   this.itemLabel = '';
      // }
      this.$refs.field_input.value = ""
    },
  },

}
</script>


<style>
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



<!-- Prop Name 	Type 	Description
firstName 	String 	(Required) First Name
lastName 	String 	(Required) Last Name
showQR 	Boolean 	Enable/Disable the QR Code display
size 	Integer 	Size of the Generate QR Code
birthday 	String 	Date of birth
gender 	String 	Gender
workPhone 	String 	Work Phone number
homePhone 	String 	Home phone number
workEmail 	String 	Work email
homeEmail 	String 	Home email
orgName 	String 	Organization name
orgTitle 	String 	Organization title
homeStreet 	String 	Home street
homeCity 	String 	Home city
homeRegion 	String 	Home region
homePost 	String 	Home postal Code
homeCountry 	String 	Home country
orgStreet 	String 	Organization street
orgCity 	String 	Organization city
orgRegion 	String 	Organization region
orgPost 	String 	Organization postal Code
orgCountry 	String 	Organization country -->
