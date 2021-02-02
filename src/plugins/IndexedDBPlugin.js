//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
//https://stackoverflow.com/questions/52978013/how-to-use-vue-plugin-in-store
//https://medium.com/swlh/how-to-create-a-vue-plugin-36d5987d4768
const defaultOptions = {
  cutoff: 50,
  DB_NAME: 'workspace',
  DB_VERSION: 1,
  stores : [
    { name:'contacts', schema:{ autoIncrement: true, keyPath:'id' }},
    { name:'webid', schema:{ autoIncrement: true, keyPath:'uri' }}
  ]
};


export default {
  // called by Vue.use(FirstPlugin)
  install(Vue, customOptions) {
    Vue.DB;
    Vue.VERSION = 'v0.0.1';
    let options = {...defaultOptions, ...customOptions};

    console.warn("IndexedDBPlugin\nOPTIONS",options)
    Vue.DB_NAME = options.DB_NAME;
    Vue.DB_VERSION = options.DB_VERSION;


    console.warn(Vue)
    // create a mixin
    // Vue.mixin({
    //   created() {
    //     console.log(Vue);
    //   }
    // });


    // define an instance method
    Vue.prototype.$log = function () {
      return console.info(arguments); //https://stackoverflow.com/questions/4116608/pass-unknown-number-of-arguments-into-javascript-function
    }

    // define an instance method
    Vue.prototype.$italicHTML = function (text) {
      return '<i>' + text + '</i>';
    }

    // define a global filter
    Vue.filter('preview', (value) => {
      if (!value) {
        return '';
      }
      return value.substring(0, options.cutoff) + '...';
    })

    // idb
    Vue.prototype.$getDb = async function () {
      return new Promise((resolve, reject) => {
        console.info('TESTING EXIST DB', Vue.DB);
        if(Vue.DB) { return resolve(Vue.DB); }
        console.info('OPENING DB', Vue.DB);
        let request = window.indexedDB.open(Vue.DB_NAME, Vue.DB_VERSION);

        request.onerror = e => {
          console.log('Error opening db', e);
          reject('Error');
        };

        request.onsuccess = e => {
          Vue.DB = e.target.result;
          resolve(Vue.DB);
        };

        request.onupgradeneeded = e => {
          console.info('onupgradeneeded');
          let db = e.target.result;
          //  db.createObjectStore('contacts', { autoIncrement: true, keyPath:'id' });
          //  db.createObjectStore('webid', { autoIncrement: true, keyPath:'uri' });
          //https://developers.google.com/web/ilt/pwa/working-with-indexeddb#defining_indexes
          //        var peopleOS = upgradeDb.createObjectStore('people', {keyPath: 'email'});
          // peopleOS.createIndex('gender', 'gender', {unique: false});
          // peopleOS.createIndex('ssn', 'ssn', {unique: true});

          options.stores.forEach((s) => {
            console.log(s, 'todo, check modif')
            if (!db.objectStoreNames.contains(s.name)) {
            let objectStore = db.createObjectStore(s.name, s.schema)
            s.indexes != undefined && s.indexes.forEach(( i) => {
               objectStore.createIndex(i.name, i.key, i.options)
            });

            }


          });
          console.log('DB upgraded',Vue.DB)
        };
      });
    },
    Vue.prototype.$deleteItem = async function (key,item) {

      let db = await this.$getDb();

      return new Promise(resolve => {

        let trans = db.transaction([key],'readwrite');
        trans.oncomplete = () => {
          resolve();
        };

        let store = trans.objectStore(key);
        store.delete(item.id);
      });
    },
    Vue.prototype.$getItems = async function (key) {

      let db = await this.$getDb();

      return new Promise(resolve => {

        let trans = db.transaction([key],'readonly');
        trans.oncomplete = () => {
          resolve(items);
        };

        let store = trans.objectStore(key);
        let items = [];

        store.openCursor().onsuccess = e => {
          let cursor = e.target.result;
          if (cursor) {
            items.push(cursor.value)
            cursor.continue();
          }
        };

      });
    },

    Vue.prototype.$saveItem = async function (key, item) {

      let db = await this.$getDb();

      return new Promise(resolve => {

        let trans = db.transaction([key],'readwrite');
        trans.oncomplete = () => {
          resolve();
        };

        let store = trans.objectStore(key);
        store.put(item);

      });

    }



  }
}
