<template>
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
</template>

<script>
// from https://www.npmjs.com/package/vue-vcard

import Vcard from '@/models/Vcard.js'

export default {
  name: 'VCard',
  created(){
    let vcard = new Vcard()
    console.log("vcard", vcard)
    console.log("defined", vcard['@context'].defines)
  }

}
</script>

<style>

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
