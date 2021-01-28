
export default class Thing {
  constructor() {
    this.jsonld = {
      '@context': {
        as: "https://www.w3.org/ns/activitystreams",
        schema: "http://schema.org/"
      },
      '@id': null,
      '@type': "Thing",
      'schema:name': "__NEW__THING__"
    }
  }
}
