import Vue from 'vue'
import Vuex from 'vuex'
import ldp_store from './modules/ldp_store'
import solid from './modules/solid'
import contacts from './modules/contacts'
import IdbPlugin from '@/plugins/IdbPlugin'


Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [IdbPlugin],
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { ldp_store, solid, contacts
  }
})
