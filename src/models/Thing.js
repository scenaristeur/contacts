
export default class Thing {
  constructor() {
    this['@context'] = {
      as: "https://www.w3.org/ns/activitystreams",
      schema: "http://schema.org/"
    },
    this['@id'] = null
    this['@type'] = "Thing"
    this['schema:name'] = "__NEW__THING__"
  }
}
