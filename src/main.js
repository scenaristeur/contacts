import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'  // Install BootstrapVue

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//https://bootswatch.com/
import "bootswatch/dist/superhero/bootstrap.min.css";

import vuetify from './plugins/vuetify';

import VueVcard from 'vue-vcard';
Vue.component('vueVcard', VueVcard);

Vue.config.productionTip = false


import PouchDB from 'pouchdb-browser'
import PouchFind from 'pouchdb-find'
import PouchLiveFind from 'pouchdb-live-find'
import PouchAdaptaterHttp from 'pouchdb-adapter-http'
import PouchdbSyncToAnything from 'pouchdb-sync-to-anything'


PouchDB.plugin(PouchFind)
PouchDB.plugin(PouchLiveFind)
PouchDB.plugin(PouchAdaptaterHttp)


PouchDB.plugin(PouchdbSyncToAnything)

// var myDb = new PouchDB('exampleDB')
//
// myDb.syncToAnything(function (docs) {
//   // Sync function receives a document batch
//   // Should return a promise
//
//   // Example:
//   return $.ajax({
//     url: 'http://example.com/my-rest-endpoint',
//     data: JSON.stringify(docs),
//     method: 'POST'
//   })
// }, {
//   sync_id: 'talkingToMyRestAPI',
//   batch_size: 10
// })

import debugPouch from "pouchdb-debug";
debugPouch(PouchDB);

// PouchDB.plugin(require('pouchdb-authentication'));

import PouchVue from 'pouch-vue';



Vue.use(PouchVue, {
  pouch: PouchDB,    // optional if `PouchDB` is available on the global object
  defaultDB: 'remoteDbName',  // this is used as a default connect/disconnect database
//  syncToAnything: syncToAnything,
  //  optionDB: {}, // this is used to include a custom fetch() method (see TypeScript example)
  fetch: function (url, opts) {
    console.log("8888888888888888888888888888888888888888888888888888888888888888888888FETCH",url, opts)
    opts.credentials = 'include';
    return PouchDB.fetch(url, opts);
  },
  post: function (url, opts) {
    console.log("8888888888888888888888888888888888888888888888888888888888888888888888POST",url, opts)
    opts.credentials = 'include';
    return PouchDB.post(url, opts);
  },
//  debug: '*' // optional - See `https://pouchdb.com/api.html#debug_mode` for valid settings (will be a separate Plugin in PouchDB 7.0)
});



new Vue({
  router,
  store,
  render: h => h(App),
  vuetify,

  created() {
    //  store.dispatch('ldp_store/init');
    //  store.dispatch('field/init');
    //  store.commit('workspace/initializeStore');
  }
}).$mount('#app')
