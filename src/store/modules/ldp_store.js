//import shop from '../../api/shop'
//import ldflex from '@solid/query-ldflex/lib/exports/rdflib'
//import axios from 'axios';
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
    tasks: [],
    tags: [],
    offers: [],
    needs: [],
    things: [],
    skills: [],
    categories: [],
    models: [],
    collections: [],
    views: []
  },
  models:[        {value:{name: 'Workspace', type: 'http://purl.org/vocab/lifecycle/schema#TaskGroup', path:'workspaces'}, text: 'Workspace'},
          {value:{name: 'Base', type: 'https://www.w3.org/ns/activitystreams#Base', path:'bases'}, text: 'Base'},
          {value:{name: 'Table', type: 'https://www.w3.org/ns/activitystreams#Table', path:'tables'}, text: 'Table'},
          {value:{name: 'Field', type: 'https://www.w3.org/ns/activitystreams#Field', path:'fields'}, text: 'Field'},
          {value:{name: 'Record', type: 'https://www.w3.org/ns/activitystreams#Record', path:'records'}, text: 'Record'},
          {value:{name: 'Task', type: 'https://www.w3.org/ns/activitystreams#Task', path:'tasks'}, text: 'Task'},
          {value:{name: 'Person', type: 'https://www.w3.org/ns/activitystreams#Person', path:'persons'}, text: 'Person'},
          {value:{name: 'Document', type: 'https://www.w3.org/ns/activitystreams#Document', path:'documents'}, text: 'Document'},
          {value:{name: 'File', type: 'https://www.w3.org/ns/activitystreams#File', path:'files'}, text: 'File'},
          {value:{name: 'Tag', type: 'https://www.w3.org/ns/activitystreams#Tag', path:'tags'}, text: 'Tag'},
          {value:{name: 'Offer', type: 'https://www.w3.org/ns/activitystreams#Offer', path:'offers'}, text: 'Offer'},
          {value:{name: 'Need', type: 'https://www.w3.org/ns/activitystreams#Need', path:'needs'}, text: 'Need'},
          {value:{name: 'Thing', type: 'https://www.w3.org/ns/activitystreams#Thing', path:'things'}, text: 'Thing'},
          {value:{name: 'Skill', type: 'https://www.w3.org/ns/activitystreams#Skill', path:'skills'}, text: 'Skill'},
          {value:{name: 'Category', type: 'https://www.w3.org/ns/activitystreams#Category', path:'categories'}, text: 'Category'},
          {value:{name: 'Model', type: 'https://www.w3.org/ns/activitystreams#Model', path:'models'}, text: 'Model'},
          {value:{name: 'Collection', type: 'https://www.w3.org/ns/activitystreams#Collection', path:'collections'}, text: 'Collection'},
          {value:{name: 'View', type: 'https://www.w3.org/ns/activitystreams#View', path:'views'}, text: 'View'},]
})

// getters
const getters = {}

// actions
const actions = {
  async update (context, container){
    let url = context.state.ldp_server.url+'/'+container+'/'
    console.log('update',url)

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

    fetch(url,
      {
        headers: {
          'Accept': 'application/json',
      //    'Content-Type': 'application/json'
        },

      })
      .then(response => response.json())
      .then(d => {
        console.log(d)
        let data = {container: container, items: d['ldp:contains']}
        context.commit('setItems', data)

      })
      .catch(function(response){ console.log(response) })


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
