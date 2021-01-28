import Thing from 'Thing.js'


export default class Person extends Thing {
  constructor() {
    super()
    this['@context'] = 'https://json-ld.org/contexts/person.jsonld',
    this['@id'] = null
    this['@type'] = "Person"
    this['schema:name'] = "__NEW__VCARD__"
  }
}


/* exemple
{
  "@context": "http://json-ld.org/contexts/person.jsonld",
  "@id": "http://dbpedia.org/resource/John_Lennon",
  "name": "John Lennon",
  "born": "1940-10-09",
  "spouse": "http://dbpedia.org/resource/Cynthia_Lennon"
}
*/
