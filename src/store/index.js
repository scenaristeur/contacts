import Vue from 'vue'
import Vuex from 'vuex'
import ldp_store from './modules/ldp_store'
import solid from './modules/solid'
import contacts from './modules/contacts'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: { ldp_store, solid, contacts
  }
})
