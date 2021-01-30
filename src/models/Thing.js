
export default class Thing {
  constructor() {
    this.jsonld = {
      '@context': {
        owl: "http://www.w3.org/2002/07/owl#",
        as: "https://www.w3.org/ns/activitystreams",
        schema: "http://schema.org/"
      },
      '@id': null,
      '@type': "owl:Thing",
      'schema:name': "__NEW__THING__"
    }
  }
}
