//import shop from '../../api/shop'
//import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
//import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )
import { openDB, deleteDB } from 'idb/with-async-ittr.js';
import idb from '@/api/idb';


// initial state
const state = () => ({
  contacts: [],
  db: [],
  cats: []
})

// getters
const getters = {}

// actions
const actions = {
  async deleteCat(context, cat) {
      console.log('store is being asked to delete '+cat.id);
      await idb.deleteCat(cat);
    },
    async getCats(context) {
      context.state.cats = [];
      let cats = await idb.getCats();
      cats.forEach(c => {
        context.state.cats.push(c);
      });
      console.log('all', cats)

    },
    async saveCat(context, cat) {
      await idb.saveCat(cat);
      console.log('saved', cat)
    },



  async init(context){
    // let db = openDB('LdpWorkspace', 1, {
    //   upgrade(db) {
    //     // Create a store of objects
    //     const store = db.createObjectStore('contacts', {
    //       // The 'id' property of the object will be the key.
    //       keyPath: '@id',
    //       // If it isn't explicitly set, create a value by auto incrementing.
    //       //  autoIncrement: true,
    //     });
    //     // Create an index on the 'date' property of the objects.
    //     store.createIndex('date', 'date');
    //
    //   },
    // });


   await deleteDB('Contacts')

    const db = await openDB('Contacts', 12, {
      upgrade(db) {
        // Create a store of objects
        const store = db.createObjectStore('contacts', {
          // The 'id' property of the object will be the key.
          keyPath: 'id',
          // If it isn't explicitly set, create a value by auto incrementing.
         autoIncrement: true,
        });
        // Create an index on the 'date' property of the objects.
        store.createIndex('date', 'date');
      },
      blocked(e) {
        console.log(e)
      },
      blocking(e) {
        console.log(e)
      },
      terminated(e) {
        console.log(e)
      },
    });
    //
    console.log("DB",db)
    // Add an contact:
    await db.add('contacts', {
    //  id: uuidv4(),
      title: 'contact 1',
      date: new Date(),
      body: 'premier',
    });
    //
    //      // Add multiple contacts in one transaction:
    //
    //        const tx = db.transaction('contacts', 'readwrite');
    //        await Promise.all([
    //          tx.store.put({
    //            '@id': "bloup",
    //            title: 'contact 2',
    //            date: new Date('2019-01-01'),
    //            body: '…',
    //          }),
    //          tx.store.put({
    //            '@id': "swing",
    //            title: 'contact 3',
    //            date: new Date('2019-01-02'),
    //            body: '…',
    //          }),
    //          tx.done,
    //        ]);
    //
    //
    // Get all the contacts in date order:
    console.log(await db.getAllFromIndex('contacts', 'date'));
    //
    //      // Add 'And, happy new year!' to all contacts on 2019-01-01:
    //
    //        const tx2 = db.transaction('contacts', 'readwrite');
    //        const index = tx2.store.index('date');
    //
    //        for await (const cursor of index.iterate(new Date('2019-01-01'))) {
    //          const contact = { ...cursor.value };
    //          contact.body += ' And, happy new year!';
    //          cursor.update(contact);
    //        }
    //
    //        await tx2.done;



    context.commit('setDb', db)
  },
  async findAll(context){
    //context.commit('setContacts', contacts_temp)
    //console.log('findAll')


    //console.log("OPENDB",this)


    if (context.rootState.solid.storage != null){
      let path = context.rootState.solid.storage+'contacts/'
      await fc.readFolder(path).then(async function(folder){
        console.log('folder', folder)
        //console.log(folder.files.length, folder)
        //   let contacts = await folder.files.map(async function (f) {
        //     let contact = {'@id': f.url, content: JSON.parse(await fc.readFile(f.url))}
        // //  let content = await fc.readFile(f.url)
        //     return contact
        //   })


        let contacts = await Promise.all(
          folder.files.map(async f => {
            //        console.log("COMPARE", f.url, f.modified)
            let contact = await fc.readFile(f.url)
            return JSON.parse(contact)
          })
        )
        contacts.sort(function (a, b) { return a['vcard:hasName'] > b['vcard:hasName']; });
        //  console.log(contacts)
        context.commit('setContacts', contacts)

      })
    }

  },
  async delete (context, contact){
    //  let path = context.rootState.solid.storage+'contacts/'
    //console.log('delete',path, contact)

    await fc.deleteFile(contact['@id'])
    // .then((content) => {
    // //  console.log(content)
    // //  context.dispatch('findAll')
    // })
    .catch(err => console.error(`Error: ${err}`))
  },
  async add (context, contact){
    let path = context.rootState.solid.storage+'contacts/'
    //  console.log('add',path, contact)

    contact['@id'] == null ? contact['@id'] = path+uuidv4()+'.jsonld' :''

    await fc.createFile(contact['@id'], JSON.stringify(contact), 'application/json' )
    .then((/*content*/) => {
      //  console.log(content)
      context.dispatch('findAll')
    })
    .catch(err => console.error(`Error: ${err}`))

    // axios.get(
    //   url,
    //   {header: {'Accept': 'application/ld+json'}}
    // ).then((response) => {
    //   console.log(response);
    //   console.log(response.data['ldp:contains'])
    //   let data = {container: container, items: response.data['ldp:contains']}
    //   context.commit('setItems', data)
    //   //  this.$store.dispatch('ldp_store/update', this.post.data.type.path)
    //   //  console.log(response.headers.get('Location'))
    // }, (error) => {
    //   console.log(error);
    // });

    // console.log(context.rootState.solid.storage)
    //
    // fetch(url,
    //   {
    //     headers: {
    //       'Accept': 'application/json',
    //       //    'Content-Type': 'application/json'
    //     },
    //
    //   })
    //   .then(response => response.json())
    //   .then(d => {
    //     console.log(d)
    //     let data = {container: container, items: d['ldp:contains']}
    //     context.commit('setItems', data)
    //
    //   })
    //   .catch(function(response){ console.log(response) })


  },
  // async init(context){
  //   Object.keys(context.state.app).forEach((k) => {
  //     console.log(k)
  //     context.dispatch('update',k)
  //   });
  //
  // }
  // async setWebId (context, webId) {
  //   //  console.log(webId)
  //   context.commit('setWebId', webId)
  //   //  context.dispatch('inbox/setWebId', webId, { root: true })
  //   if ( webId != null ){
  //     context.commit('setWebId', webId)
  //   //  console.log (ldflex)
  //    let storage =  await ldflex[webId].storage
  //     context.commit('setStorage', `${storage}`)
  //   }else{
  //     context.commit('setWebId', null)
  //     //   let storage =  await ldflex.data[webId].storage
  //     context.commit('setStorage', null)
  //   }
  // }
}

// mutations
const mutations = {
  setDb(state, db){
    console.log("SETDB", db)
    state.db = db
  },
  setContacts(state, contacts){
    //    console.log(contacts)
    state.contacts = contacts
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
