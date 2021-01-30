<template>
  <b-container>
    <h1>Import</h1>

    Import a list of contacts. multi-contacts exemple contacts.vcf

    <b-form-file
    v-model="file"
    placeholder="Choose a file or drop it here..."
    drop-placeholder="Drop file here..."
    ></b-form-file>

    {{ contacts.length }} imports <br>
    <!-- [ ] Import All  [ ] Select (radio)  <b-button @click="importer">Import</b-button><br> -->




    <b-list-group>
      <b-list-group-item v-for="(contact, i) in contacts" :key="i">
        <b-form-checkbox
        :id="'checkbox-'+i"
        name="checkbox-1"
        value="accepted"
        v-model="contact.checked"
        unchecked-value="not_accepted"
        checked
        >
        <h6>
          <b-button v-b-toggle="'collapse-2'+i" class="m-1" variant="info" size="sm">+</b-button>
          {{ contact.get('n') || contact.get('fn') }}
        </h6>

      </b-form-checkbox>



      <!-- Element to collapse -->
      <b-collapse :id="'collapse-2'+i">
        <b-card ><small>{{ contact.data }}</small></b-card>
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
console.log(vCard)


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

    }
  }
}
</script>

<style>

</style>
