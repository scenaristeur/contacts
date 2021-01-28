import Thing from './Thing.js'
import VCardContext from '@/models/Vcard.jsonld.js'


//https://raw.githubusercontent.com/lanthaler/vCardOntology/master/Vcard.jsonld

export default class Vcard extends Thing {
  constructor(options = {}) {
    super()
    // assign context
    Object.assign(this['@context'], VCardContext)
    // assign options
    Object.assign(this, options)
    //   this['@context'] = {
    //     as: "https://www.w3.org/ns/activitystreams",
    //     schema: "http://schema.org/"
    //   },
    //   this['@id'] = null
    //   this['@type'] = "Vcard"
    //   this['schema:name'] = "__NEW__VCARD__"
  }
}
