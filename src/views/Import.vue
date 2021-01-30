<template>
  <b-container>
    <h1>Import</h1>

    Import a list of contacts. multi-contacts exemple contacts.vcf

    <b-form-file
    v-model="file"
    placeholder="Choose a file or drop it here..."
    drop-placeholder="Drop file here..."
    ></b-form-file>

    {{ contacts.length }} imports <b-button class="m3" @click="importer">Import</b-button>

    <!-- [ ] Import All  [ ] Select (radio)  <br> -->

    <b-list-group>
      <b-list-group-item v-for="(contact, i) in contacts" :key="i">
        <b-form-checkbox
        :id="'checkbox-'+i"
        name="checkbox-1"
        v-model="contact.checked"
        >
        <h6>
          <b-button v-b-toggle="'collapse-2'+i" class="m-1" variant="info" size="sm">+</b-button>
          {{ contact.get('n') || contact.get('fn') }}
        </h6>

      </b-form-checkbox>



      <!-- Element to collapse -->
      <b-collapse :id="'collapse-2'+i">
        <b-card >{{ contact.checked }}<small>{{ contact.data }}</small></b-card>
      </b-collapse>

      <!-- <b-button v-b-toggle="'collapse-'+i" class="m-1">show</b-button>
      <b-collapse id="'collapse-'+i">
      <b-card><small>{{ contact.data }}</small></b-card>
    </b-collapse> -->



  </b-list-group-item>
</b-list-group>

</b-container>
</template>

<script>
import vCard from 'vcf' // https://www.npmjs.com/package/vcf
//console.log(vCard)
import utf8 from 'utf8'
import  quotedPrintable from 'quoted-printable';
console.log(quotedPrintable)
import Vcard from '@/models/Vcard.js'


export default {
  name: 'Import',
  data() {
    return {
      file: null,
      contacts : []
    };
  },
  watch:{
    file(file){
      console.log(file)
      if (file) {
        let app = this
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = function (evt) {
          //  console.log(evt.target.result)
          // one card  var card = new vCard().parse( evt.target.result )
          app.contacts = vCard.parse( evt.target.result )
          // app.contacts = app.contacts.map(function(el) {
          //   var o = Object.assign({}, el);
          //   o.checked = true;
          //   return o;
          // })
          console.log(app.contacts)
          //   document.getElementById("fileContents").innerHTML = evt.target.result;
        }
        reader.onerror = function (evt) {
          console.log("ERROR",evt.target.result)
          // document.getElementById("fileContents").innerHTML = "error reading file";
        }
      }
    }
  },
  methods: {
    importer() {
      console.log(this.contacts)
      this.contacts.forEach((c) => {
        if (c.checked && c.checked == true){
          let contact = this.convert(c)
          console.log(contact)
          this.vcard = new Vcard(contact)
          console.log("vcard", this.vcard)

          this.$store.dispatch('contacts/add',this.vcard)
          this.$router.push({ name: 'Contacts', params: { vcard: this.vcard } })

        }
      });

    },
    convert(c){
      console.log(c.data)
      let data = {}
      //   let predicates = {n: 'vcard:Name',
      //   fn: 'vcard:FamilyName',
      //   tel: 'vcard:hasTelephone',
      //   email: 'vcard:hasEmail',
      //   bday: 'vcard:bday',
      //   adr: 'vcard:adr',
      //   org,
      //   title,
      //   url: 'vcard:hasURL',
      //   photo: 'vcard:hasPhoto',
      //   note
      // }

      const predicate = (key) => ({
        n: 'vcard:hasName',
        fn: 'vcard:FamilyName',
        tel: 'vcard:hasTelephone',
        email: 'vcard:hasEmail',
        bday: 'vcard:bday',
        adr: 'vcard:hasAddress',
        org: 'vcard:org',
        title: 'vcard:title' ,
        url: 'vcard:hasURL',
        photo: 'vcard:hasPhoto',
        note: 'vcar:note'
      })[key]

      for (const [key, value] of Object.entries(c.data)) {
        if (!key.startsWith('=')){ // strange key , this is an encoded value
          console.log(key, value);
          if(Array.isArray(value)){
            value.forEach((v) => {
              let val = this.translate(key,v)
              console.log(val)
              let pred = predicate(key)
              data[pred] = val
            });

          }else{
            let val = this.translate(key,value)
            console.log(val)
            let pred = predicate(key)
            data[pred] = val
          }
        }
      }
      return data
    },
    translate(key,v){
      console.log(key,v)
      if(v.encoding == 'QUOTED-PRINTABLE'){
        //  console.log(v._data)
        return  utf8.decode(quotedPrintable.decode(v._data));
      }else{
        return v._data
      }
    },

  }
}
</script>

<style>

</style>
