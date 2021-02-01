// solid-base
//import { openDB } from 'idb/with-async-ittr.js';

export default store => {
  // appelé quand le store est initialisé
  store.subscribe((mutation, state) => {
    console.log("PLUGIN Mutation",mutation, state)
    // appelé après chaque mutation.
    // Les mutations arrivent au format `{ type, payload }`.
  })

  store.subscribeAction(async function (action)  {
    console.log("PLUGIN ACtion",action.type, action.payload)
    if (action.type === "findAll") {
      // Alert Slack here
      console.log("PLUGIN ACtion",action.type, action.payload)
    }


    // if (action.type == 'init'){
    //   console.log("INIT", action.payload)
    //
    // }

  });

}

//
// // This exports the plugin object.
// export default {
//   // The install method will be called with the Vue constructor as
//   // the first argument, along with possible options
//
//   install (Vue, /*options*/) {
//     console.log('33333333333333333333333333333333333333333333IdbPlugin')
//     Vue.bases = []
//     Vue.base = null
//     // create a mixin
//     Vue.mixin({
//       created() {
//         console.log(Vue,/* options*/);
//       }
//     });
//
//     Vue.openDB = async function (params) {
//       return await openDB('LDP-WORKSPACE', 1, {
//         upgrade(db) {
//           // Create a store of objects
//           const store = db.createObjectStore(params.store, {
//             // The 'id' property of the object will be the key.
//             keyPath: '@id',
//             // If it isn't explicitly set, create a value by auto incrementing.
//             //  autoIncrement: true,
//           });
//           // Create an index on the 'date' property of the objects.
//           params.indexes.forEach((item) => {
//             store.createIndex(item, item);
//           });
//
//         },
//       });
//     }
//
//   }
// }


// export default IdbPlugin.install = function (Vue, options= {}) {
//   console.log(options)
//   // 1. add global method or property
//   Vue.myGlobalMethod = function () {
//     // some logic ...
//   }
//
//   // // 2. add a global asset
//   // Vue.directive('my-directive', {
//   //   bind (el, binding, vnode, oldVnode) {
//   //     // some logic ...
//   //   }
//   //   ...
//   // })
//
//   // // 3. inject some component options
//   // Vue.mixin({
//   //   created: function () {
//   //     // some logic ...
//   //   }
//   //   ...
//   // })
//
//   // // 4. add an instance method
//   // Vue.prototype.$myMethod = function (methodOptions) {
//   //   // some logic ...
//   // }
// }

// export default store => {
//   store.subscribe((mutation, state) => {
//     // Save the entire state to Local Storage
//     console.log(mutation)
//     if (mutation.type.startsWith("kanban") && state.kanban != undefined){
//       //  console.log('subscribe',mutation, state.kanban)
//       localStorage.setItem('ess-kanban', JSON.stringify(state.kanban));
//      }
//     else if (mutation.type.startsWith('table')){
//        console.log('put to localStorage', state.table)
//       localStorage.setItem('ess-table', JSON.stringify(state.table));
//     }
//     // else if (mutation.type.startsWith('field')){
//     //    console.log('put to localStorage', state.field)
//     //   localStorage.setItem('ess-fields', JSON.stringify(state.field));
//     // }
//   });
// };
