//import shop from '../../api/shop'
//import ldflex from '@solid/query-ldflex/lib/exports/rdflib'

// initial state
const state = () => ({
  ldp_server: {name: 'Semapps Local Server', url: 'http://localhost:3000'},
})

// getters
const getters = {}

// actions
const actions = {
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
  setServer(state, s){
    console.log(s)
    state.ldp_server = s
  },

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
