<template>
  <b-container>
    <h3>Solid Rest Test</h3>
    result : {{ result}}

    <b-button @click="create">Create</b-button>
    <b-button @click="read">Read</b-button>

    <hr>
    <div class="todos">
      <input v-model="message" placeholder="New Todo">
      <button @click="post({message: message},{},'todos');message=''">Save Todo</button>
      <div v-for="todo in todos" :key='todo.id'>
        <input v-model="todo.message" @change="$pouch.put(todo,{},'todos')">
        <button @click="$pouch.remove(todo,{},'todos')">Remove</button>
      </div>
    </div>
  </b-container>
</template>

<script>
/*global SolidRest, SolidBrowserFS*/
/*eslint no-undef: "error"*/
//import $ from 'jquery'


const rest = new SolidRest([new SolidBrowserFS()])
console.log(rest)
const base = "app://bfs/IndexedDB"
const file = base + "/test-file.ttl"
const text = "<> a <#test>."
runRest( file, text )

async function runRest(file,text){
  console.log('init')
  let response = await rest.fetch( file,{method:"PUT",body:text} )
  response = await rest.fetch( file )
  if(response.status==200 && await response.text()==text) show("OK!")
  else show("FAIL!")
}

function show(msg){
  // let display = document.getElementById("results")
  // display.innerHTML = display.innerHTML + `<p>${msg}</p>`
  console.log( `<p>${msg}</p>`  )
}

import { v4 as uuidv4 } from 'uuid';
//import $ from 'jquery'
import auth from 'solid-auth-client';
import FC from 'solid-file-client'
const fc = new FC( auth )

import { mapState } from 'vuex';


export default {
  name: 'SolidRestTest',

  data() {
    return {
      base : "app://bfs/IndexedDB",
      file : this.base + "/test-file.ttl",
      text : "<> a <#test>.",
      result: "must change",
      contacts_path : "",
      message:""
    };
  },
  pouch: {
    // The simplest usage. queries all documents from the "todos" pouch database and assigns them to the "todos" vue property.
    todos: {/*empty selector*/}
  },
  async created(){
    await this.PUT(file, this.text)
    let res =  await this.GET(file)
    let text = await res.text()
    console.log(text)
    this.result = text
    //  this.contacts_path_idb = this.base+'/contacts/'
    //let app = this

    this.contacts_path = this.storage+'contacts/'

    this.$pouch.syncToAnything = async (docs) => {
      // Sync function receives a document batch
      // Should return a promise
      console.log("docs",docs)
      // Example:
      // return $.ajax({
      //   url: 'https://spoggy-test9.solidcommunity.net/couchdb/',
      //   data: JSON.stringify(docs),
      //   method: 'POST'
      // })
      let contact = {}
      contact['@id'] = uuidv4()+'.json'
      contact['schema:dateCreated'] = new Date().toISOString()
       contact.message = docs.message
      console.log(contact)
      console.log(contact, this.contacts_path+contact['@id'])
      let res = await fc.createFile(this.contacts_path+contact['@id'], JSON.stringify(contact), "application/json")
      console.log(res)
      return   res //await this.PUT(this.contacts_path+contact['@id'], JSON.stringify(contact), "application/json")
    }, {
      sync_id: 'talkingToMyRestAPI',
      batch_size: 10
    }


    console.log(this.$pouch)



    //https://docs.couchdb.org/en/stable/replication/protocol.html
    //  PouchDB.plugin(PouchdbSyncToAnything)

    //  var myDb = new PouchDB('exampleDB')


    //let path = 'https://spoggy-test9.solidcommunity.net/couchdb/'
    // let head = await this.HEAD(path)
    // console.log("CouchDB_HEAD",head)
    // create database
    //this.$pouch.put(path)
    // Send all documents to the remote database, and stream changes in real-time. Note if you use filters you need to set them correctly for pouchdb and couchdb. You can set them for each direction separatly: options.push/options.pull. PouchDB might not need the same filter to push documents as couchdb to send the filtered requested documents.
    // this.$pouch.sync('todos', 'http://localhost:5984/todos', options);
    //  this.$pouch.sync('todos', path, {headers:{"Accept": 'application/json', 'Content-Type': 'application/json'}} );


    // console.log(this.$pouch)
    // //let docs = this.todos
    //     this.$pouch.syncToAnything(function (docs) {
    //       // Sync function receives a document batch
    //       // Should return a promise
    //
    //       // Example:
    //       return $.ajax({
    //         url: 'https://spoggy-test9.solidcommunity.net/couchdb/',
    //         data: JSON.stringify(docs),
    //         method: 'POST'
    //       })
    //     }, {
    //       sync_id: 'talkingToMyRestAPI',
    //       batch_size: 10
    //     })


  },
  methods: {
    async post(message, empty, base){
      //{message: message},{},'todos'
      //  let pouch = this.$pouch
      this.$pouch.post(message, empty, base)

      let result = this.$pouch.syncToAnything(message)
      console.log("RESULT",result)
      // .then(function(){
      //   return pouch.changes({
      //     since: 0,
      //     include_docs: true
      //   }).then(function (changes) {
      //     console.log(changes)
      //   }).catch(function (err) {
      //     // handle errors
      //     console.log(err)
      //   });
      // })
    },
    async create(){
      let contact = {}
      contact['@id'] = uuidv4()+'.jsonld'
      contact['schema:dateCreated'] = new Date().toISOString()
      console.log(contact, this.contacts_path+contact['@id'])
      let res = await this.PUT(this.contacts_path+contact['@id'], JSON.stringify(contact), "application/json")
      console.log(res)
    },
    async read(){
      let res = await this.GET(this.contacts_path)
      console.log(res)
      // console.log(this.contacts_path)
      // await fc.readFolder(this.contacts_path).then(async function(folder){
      //   console.log('folder',folder)
      // })
    },

    async test1(){
      let data = `<> a <#test>. \n
      <> dct:dateCreated "${new Date()}" .`

      await this.PUT(file, data)
      let res =  await this.GET(file)
      let text = await res.text()
      console.log(text)
      this.result = text
    },
    // /* =========================================================== */
    // /* REST METHODS                                                */
    // /* =========================================================== */
    async GET(url){
      return await rest.fetch( url, {method:"GET", headers:{"Accept": 'application/json'}} )
    },
    async HEAD(url){
      return await rest.fetch( url, {method:"HEAD"} )
    },
    //     HEAD /source HTTP/1.1
    // Host: localhost:5984
    // User-Agent: CouchDB
    async PUT(url,text,content_type = "text/turtle"){
      console.log("text",text)
      return await rest.fetch( url, {method:"PUT",body:text,headers:{"content-type":content_type}} )
    },
    async DELETE(url){
      return await rest.fetch( url, {method:"DELETE"} )
    },
    async POST(parent,item,content,link){
      return await rest.fetch( parent,{
        method:"POST",
        headers:{slug:item,link:link,"content-type":"text/turtle"},
        body:content
      })
    },
    async postFile(parent,file,content){
      let link = '<http://www.w3.org/ns/ldp#Resource>; rel="type"'
      return this.POST(parent,file,content,link)
    },
    async postFolder(parent,folder){
      let link ='<http://www.w3.org/ns/ldp#BasicContainer>; rel="type"'
      return this.POST(parent,folder,'',link)
    }
  },
  computed: mapState({
    contacts: s =>  s.contacts.contacts,
    storage: s => s.solid.storage
  }),
}
</script>

<style>

</style>
