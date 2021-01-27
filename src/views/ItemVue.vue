<template>
  <div>
    ItemVue
    {{ item }}


    <b-card-group deck>
      <b-card

      img-src="https://picsum.photos/600/300/?image=25"
      img-alt="Image"
      img-top
      tag="article"
      style="max-width: 20rem;"
      class="mb-2"
      >
      <b-card-title><EditableSpan v-model="item['schema:name']"/></b-card-title>
      <b-card-sub-title>
        @type: {{ item['@type'] }}, @id: {{ item['@id']}}<br>
        created: {{item['schema:dateCreated']}}
      </b-card-sub-title>

      <b-card-text>
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </b-card-text>

      <b-button href="#" variant="primary">Update</b-button>
    </b-card>




    <b-card
    tag="article"
    style="max-width: 20rem;"
    class="mb-2"
    >
    <b-card-title>Properties <b-button v-b-modal.addPropModal variant="primary">+</b-button></b-card-title>
    <b-card-sub-title>

    </b-card-sub-title>

    <b-card-text>
      Some quick example text to build on the card title and make up the bulk of the card's content.
    </b-card-text>

    <b-button href="#" variant="primary">Update</b-button>
  </b-card>
</b-card-group>


<b-modal id="addPropModal" @ok="addProp">
  <template #modal-title>
    Add a property to {{ item['schema:name']}}
  </template>
  <!-- <p class="my-4">Hello from modal!</p> -->


  <b-form-group
  description="Enter a predicate."
  label="Predicate"
  label-for="predicate"
  >
  <b-input id="predicate" v-model="item_new.meta.predicate" placeholder="predicate" />
</b-form-group>



<b-form-group
description="Set a simple STRING value."
label="Value"
label-for="value"
>
<b-input id="value" v-model="item_new.meta.value" placeholder="value" @click="setValueFormat" />
</b-form-group>

or
<b-form-group
description="Choose the type of a Resource."
label="Type"
label-for="type"
>
<b-form-select v-model="item_new.meta.type" :options="models" :selected="models[0]" @change="typeChanged" ></b-form-select>
<!-- <b-input id="type" v-model="post.data.type" placeholder="type, ex: Person "/> -->
</b-form-group>

{{format}}
<b-alert show v-if="choice != null">
  {{ choice['schema:name'] }}
</b-alert>
<b-alert show v-else>
  {{ item_new.meta.value }}
</b-alert>


<!-- {{ models }} -->
</b-modal>


<b-modal id="modal-choose" hide-footer>
  <template #modal-title>
    Create or choose a {{ item_new.meta.type.name }}
  </template>

  <NewThing :type="item_new.meta.type" v-on:itemCreated="objectSelected"/>
  <!-- <div class="d-block text-center">
  <h3>Hello From This Modal!</h3>
</div> -->
<!-- <Tableau :donnees="donnees" data-app /> -->
<b-list-group>
  <b-list-group-item v-for="d in donnees" :key="d['@id']" @click="objectSelected(d)" button>
    {{d['schema:name'] }}<br>
    <small>{{d['@id']}}</small>

  </b-list-group-item>
</b-list-group>


<b-button class="mt-3" block @click="$bvModal.hide('modal-choose')">Close Me</b-button>
</b-modal>


<!-- <hr>
<Backbone />
<hr> -->
</div>
</template>

<script>
import { mapState } from 'vuex';


export default {
  name: 'ItemVue',
  components: {
    'EditableSpan': () => import('@/components/basic/EditableSpan'),
      'NewThing': () => import('@/components/basic/NewThing'),

  },
  data() {
    return {
      item: {},
      format: 'value',
      selected: {},
      item_new: {
        data: {
          "@context":
          {
            as: "https://www.w3.org/ns/activitystreams",
            schema: "http://schema.org/"
          },
          "schema:name": "Guillaume Cousin",
          '@type': ""
        },
        meta: {}
      },
      donnees:[],
      choice : null
    }
  },
  created(){
    this.init(this.$route.params)
    // or catch url query
    console.log('todo: catch url query.url',this.$route.query.url)
  },
  methods: {
    init(params) {
      console.log(params)
      this.item = params.item
      //  console.log(this.item)
    },
    objectSelected(o){
      console.log('object',o)
      this.choice = o
      this.$bvModal.hide('modal-choose')
    },
    addProp(){
      console.log("add to", this.item['@id'], this.item)
      let predicate = this.item_new.meta.predicate
      console.log(predicate)
      console.log(this.choice['@id'])
      console.log(this.item[predicate])
      this.item[predicate] ==  undefined ? this.item[predicate] = [] : ""
      this.format == 'value' ? this.item[predicate].push(this.item_new.meta.value) : this.item[predicate].push(this.choice['@id'])
      console.log('ITEM',this.item)


      // fetch(this.item['@id'],
      //   {method: 'PATCH',
      //   body: this.item[predicate],
      //   headers: {"Content-type": "application/json; charset=UTF-8"}
      // })
      // .then(response => response.json())
      // .then(json => console.log(json))
      //let store = this.$store
      fetch(this.item['@id'],
      {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",
        body: JSON.stringify(this.item)
      })
      .then(function(res){
        console.log(res)
        //store.dispatch('ldp_store/update', container)
        //  post_data['schema:name'] = ''
      })
      .catch(function(res){ console.log(res) })

      if (this.format != 'value' ){
        // reverse
        console.log(predicate)
        console.log(this.choice['@id'])
        console.log(this.item[predicate])
        this.item[predicate] ==  undefined ? this.item[predicate] = [] : ""
        this.format == 'value' ? this.item[predicate].push(this.item_new.meta.value) : this.item[predicate].push(this.choice['@id'])
        console.log('ITEM',this.item)
        let predicate_reverse = predicate+"_reverse"
        this.choice[predicate_reverse] ==  undefined ? this.choice[predicate_reverse] = [] : ""
        this.choice[predicate_reverse].push(this.item['@id'])

        fetch(this.choice['@id'],
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "PUT",
          body: JSON.stringify(this.choice)
        })
        .then(function(res){
          console.log(res)
          //store.dispatch('ldp_store/update', container)
          //  post_data['schema:name'] = ''
        })
        .catch(function(res){ console.log(res) })
      }


    },
    typeChanged(t){
      console.log("type",t)
      this.format = 'type'
      console.log(this.app[t.path])
      this.donnees = this.app[t.path]
      this.$bvModal.show('modal-choose')
    },
    setValueFormat(){
      this.format = 'value'
      this.choice = null
      this.selected = null
    }
  },
  watch: {
    $route(to) {
      //  console.log(to,from)
      this.init(to.params)
      // react to route changes...
    }
  },
  computed: mapState({
    models: s =>  s.ldp_store.models,
    app: s => s.ldp_store.app

  }),

}
</script>

<style>

</style>
