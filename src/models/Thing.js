
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

  save(options = {}){
    console.log("save",this,  options)
    this.demo()
  }
  async demo() {

    let options = {store: 'Articles', indexes: ['date']}
    let db = this.$openDB(options)
    console.log("DB",db)
    let options2 = {store: 'SwingPlop', indexes: ['date']}
    let db2 = this.$openDB(options2)
    console.log("DB2", db2)


    // Add an article:
    await db.add('articles', {
      '@id': 'boo1Bip',
      title: 'Article 1',
      date: new Date('2019-01-01'),
      body: 'Article one',
    });

    // Add multiple articles in one transaction:
    {
      const tx = db.transaction('articles', 'readwrite');
      await Promise.all([
        tx.store.add({
          '@id': 'boo2',
          title: 'Article 2',
          date: new Date('2019-01-01'),
          body: 'deuxieme ',
        }),
        tx.store.add({
          '@id': 'boo3',
          title: 'Article 3',
          date: new Date('2019-01-02'),
          body: 'et trois',
        }),
        tx.done,
      ]);
    }

    // Get all the articles in date order:
    console.log(await db.getAllFromIndex('articles', 'date'));

    // Add 'And, happy new year!' to all articles on 2019-01-01:
    {
      const tx = db.transaction('articles', 'readwrite');
      const index = tx.store.index('date');

      for await (const cursor of index.iterate(new Date('2019-01-01'))) {
        const article = { ...cursor.value };
        article.body += ' And, happy new year!';
        cursor.update(article);
      }

      await tx.done;
    }
  }
}
