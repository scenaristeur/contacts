//import shop from '../../api/shop'
//import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
import axios from 'axios';
// initial state
const state = () => ({
  ldp_server: {name: 'Semapps Local Server', url: 'http://localhost:3000'},
  app: {
    persons :[],
    workspaces: [],
    bases: [],
    tables: [],
    records: [],
    fields: [],
    documents: [],
    tasks: []
  }
})

// getters
const getters = {}

// actions
const actions = {
  async update (context, container){
    let url = context.state.ldp_server.url+'/'+container+'/'
    console.log('update',url)

    axios.get(
      url,
      {header: {'Accept': 'application/ld+json'}}
    ).then((response) => {
      console.log(response);
      console.log(response.data['ldp:contains'])
      let data = {container: container, items: response.data['ldp:contains']}
      context.commit('setItems', data)
      //  this.$store.dispatch('ldp_store/update', this.post.data.type.path)
      //  console.log(response.headers.get('Location'))
    }, (error) => {
      console.log(error);
    });

    // fetch(url,
    // {
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //
    // })
    // .then(function(response){
    //   console.log(response)
    //   let data = {container: container, items: response.data['ldp:contains']}
    //   context.commit('setItems', data)
    //
    // })
    // .catch(function(res){ console.log(res) })
  },
  async init(context){
    Object.keys(context.state.app).forEach((k) => {
      console.log(k)
      context.dispatch('update',k)
    });

  }
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
  setItems(state, data){
    console.log(data)
    state.app[data.container] = data.items
  }

}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
