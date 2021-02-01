import { openDB } from 'idb/with-async-ittr.js';

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
    const db = await openDB('Articles', 1, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore('articles', {
          // The 'id' property of the object will be the key.
          keyPath: '@id',
          // If it isn't explicitly set, create a value by auto incrementing.
          //  autoIncrement: true,
        });
        // Create an index on the 'date' property of the objects.
        store.createIndex('date', 'date');
      },
    });

    // Add an article:
    await db.add('articles', {
      '@id': 'boo1',
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
