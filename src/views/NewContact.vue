<template>
  <b-container>
    <div class="add-item">

      <b-form-input v-model="vcard['vcard:hasName']"  placeholder="vcard:hasName"></b-form-input>
      <b-form-input v-model="vcard['vcard:hasEmail']"  placeholder="vcard:hasEmail"></b-form-input>
      <b-form-input v-model="vcard['solid:hasWebId']"  placeholder="solid:hasWebId"></b-form-input>
    </div>
    <!-- {{ vcard }} -->



  </b-container>
</template>

<script>
export default {
  name: 'NewContact',
  props: ['vcard'],
}
</script>

<style>

</style>
