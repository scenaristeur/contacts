//https://learnvue.co/2020/01/how-to-make-your-first-vuejs-plugin/
//https://stackoverflow.com/questions/52978013/how-to-use-vue-plugin-in-store
const defaultOptions = {
  cutoff: 50
};


export default {
  // called by Vue.use(FirstPlugin)
  install(Vue, options) {
    Vue.DB_NAME = 'workspace';
    Vue.DB_VERSION = 1;
    Vue.DB;
    Vue.VERSION = 'v0.0.1';
    let userOptions = {...defaultOptions, ...options};


    // create a mixin
    Vue.mixin({
      created() {
        console.log(Vue);
      }
    });


    // define an instance method
    Vue.prototype.$log = function (text) {
      return console.log("LOG",text);
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
      return value.substring(0, userOptions.cutoff) + '...';
    })

    // idb
    Vue.prototype.$getDb = async function (key) {
      return new Promise((resolve, reject) => {
        console.log('TESTING EXIST DB', Vue.DB);
        if(Vue.DB) { return resolve(Vue.DB); }
        console.log('OPENING DB', Vue.DB);
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
          console.log('onupgradeneeded');
          let db = e.target.result;
          db.createObjectStore(key, { autoIncrement: true, keyPath:'@d' });
        };
      });
    },
    Vue.prototype.$deleteItem = async function (key,item) {

      let db = await this.$getDb(key);

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

      let db = await this.$getDb(key);

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

      let db = await this.$getDb(key);

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
