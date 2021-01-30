<template>
  <b-container>
    <h3>Solid Rest Test</h3>

  </b-container>
</template>

<script>
/*global SolidRest, SolidBrowserFS*/
/*eslint no-undef: "error"*/
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

export default {
  name: 'SolidRestTest',

  data() {
    return {
      base : "app://bfs/IndexedDB",
      file : this.base + "/test-file.ttl",
      text : "<> a <#test>.",
    };
  },
  async created(){
    await this.PUT(file, this.text)
    let res =  await this.GET(file)
    let text = await res.text()
    console.log(text)
  },
  methods: {
    // /* =========================================================== */
    // /* REST METHODS                                                */
    // /* =========================================================== */
    async GET(url){
      return await rest.fetch( url, {method:"GET"} )
    },
    async HEAD(url){
      return await rest.fetch( url, {method:"HEAD"} )
    },
    async PUT(url,text){
      return await rest.fetch( url, {method:"PUT",body:text,headers:{"content-type":"text/turtle"}} )
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
  }
}
</script>

<style>

</style>
