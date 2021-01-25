<template>
  <v-container>
    <v-row><v-btn @click="add">ADD</v-btn><v-btn @click="remove">REMOVE</v-btn></v-row>
    <v-data-table
    :headers="headers"
    :items="donnees"
    :search="search"
    sort-by="calories"
    class="elevation-1"
    >
    <template v-slot:top>
      <v-toolbar
      flat
      >
      <v-toolbar-title>My CRUD</v-toolbar-title>
      <v-divider
      class="mx-4"
      inset
      vertical
      ></v-divider>
      <v-spacer></v-spacer>
      <v-text-field
      v-model="search"
      append-icon="mdi-magnify"
      label="Search"
      single-line
      hide-details
      ></v-text-field>



      <v-dialog
      v-model="dialog"
      max-width="500px"
      >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
        color="primary"
        dark
        class="mb-2"
        v-bind="attrs"
        v-on="on"
        >
        New Item
      </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="headline">{{ formTitle }}</span>
      </v-card-title>

      <v-card-text>
        <v-container>
          <v-row>
            <v-col
            cols="12"
            sm="6"
            md="4"
            >
            <v-text-field
            v-model="editedItem.name"
            label="Dessert name"
            ></v-text-field>
          </v-col>
          <v-col
          cols="12"
          sm="6"
          md="4"
          >
          <v-text-field
          v-model="editedItem.calories"
          label="Calories"
          ></v-text-field>
        </v-col>
        <v-col
        cols="12"
        sm="6"
        md="4"
        >
        <v-text-field
        v-model="editedItem.fat"
        label="Fat (g)"
        ></v-text-field>
      </v-col>
      <v-col
      cols="12"
      sm="6"
      md="4"
      >
      <v-text-field
      v-model="editedItem.carbs"
      label="Carbs (g)"
      ></v-text-field>
    </v-col>
    <v-col
    cols="12"
    sm="6"
    md="4"
    >
    <v-text-field
    v-model="editedItem.protein"
    label="Protein (g)"
    ></v-text-field>
  </v-col>
</v-row>
</v-container>
</v-card-text>

<v-card-actions>
  <v-spacer></v-spacer>
  <v-btn
  color="blue darken-1"
  text
  @click="close"
  >
  Cancel
</v-btn>
<v-btn
color="blue darken-1"
text
@click="save"
>
Save
</v-btn>
</v-card-actions>
</v-card>
</v-dialog>
<v-dialog v-model="dialogDelete" max-width="500px">
  <v-card>
    <v-card-title class="headline">Are you sure you want to delete this item?</v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
      <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
      <v-spacer></v-spacer>
    </v-card-actions>
  </v-card>
</v-dialog>
</v-toolbar>
</template>
<template v-slot:item.actions="{ item }">
  <v-icon
  small
  class="mr-2"
  @click="editItem(item)"
  >
  mdi-pencil
</v-icon>
<v-icon
small
@click="deleteItem(item)"
>
mdi-delete
</v-icon>
</template>
<template v-slot:no-data>
  <v-btn
  color="primary"
  @click="initialize"
  >
  Reset
</v-btn>
</template>
</v-data-table>
</v-container>
</template>

<!-- <template>
<b-container>

Tableau
<b-list-group>
<b-list-group-item href="#some-link" v-for="d in donnees" :key="d.url">{{ d }}</b-list-group-item>

</b-list-group> -->
<!-- <b-table striped hover :items="items" fields:fields ></b-table> -->
<!-- {{ donnees}} -->


<!-- </b-container>
</template> -->

<script>
export default {
  name: 'Tableau',
  props: ['donnees'],
  data: () => ({
    search: '',
    dialog: false,
    dialogDelete: false,
    headers: [
      {text: 'Name', value: 'name'},
      {text: '@id', value: '@id'},
      {text: '@type', value: '@type'},
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        sortable: false,
        value: 'name',
      },
      { text: 'Calories', value: 'calories' },
      { text: 'Fat (g)', value: 'fat' },
      { text: 'Carbs (g)', value: 'carbs' },
      { text: 'Protein (g)', value: 'protein' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    //  desserts: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: '',
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    index: 0,
  }),
  mounted(){
    this.index = this.headers.length
  },
  computed: {
    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
      val || this.close()
    },
    dialogDelete (val) {
      val || this.closeDelete()
    },
  },

  created () {
    this.initialize()
  },

  methods: {
    initialize () {
      console.log("init à virer")
      // this.desserts = [
      //   {
      //     name: 'Frozen Yogurt',
      //     calories: 159,
      //     fat: 6.0,
      //     carbs: 24,
      //     protein: 4.0,
      //   },
      //   {
      //     name: 'Ice cream sandwich',
      //     calories: 237,
      //     fat: 9.0,
      //     carbs: 37,
      //     protein: 4.3,
      //   },
      //   {
      //     name: 'Eclair',
      //     calories: 262,
      //     fat: 16.0,
      //     carbs: 23,
      //     protein: 6.0,
      //   },
      //   {
      //     name: 'Cupcake',
      //     calories: 305,
      //     fat: 3.7,
      //     carbs: 67,
      //     protein: 4.3,
      //   },
      //   {
      //     name: 'Gingerbread',
      //     calories: 356,
      //     fat: 16.0,
      //     carbs: 49,
      //     protein: 3.9,
      //   },
      //   {
      //     name: 'Jelly bean',
      //     calories: 375,
      //     fat: 0.0,
      //     carbs: 94,
      //     protein: 0.0,
      //   },
      //   {
      //     name: 'Lollipop',
      //     calories: 392,
      //     fat: 0.2,
      //     carbs: 98,
      //     protein: 0,
      //   },
      //   {
      //     name: 'Honeycomb',
      //     calories: 408,
      //     fat: 3.2,
      //     carbs: 87,
      //     protein: 6.5,
      //   },
      //   {
      //     name: 'Donut',
      //     calories: 452,
      //     fat: 25.0,
      //     carbs: 51,
      //     protein: 4.9,
      //   },
      //   {
      //     name: 'KitKat',
      //     calories: 518,
      //     fat: 26.0,
      //     carbs: 65,
      //     protein: 7,
      //   },
      // ]
    },
    add(){
      //  console.log(this.donnees)
      //  this.donnees.forEach(item => { item.cols.push(0) })
      this.headers.push({text:this.index, value:this.index})
      this.index++
    },
    remove(){
      this.headers.pop()
      //  this.donnees.forEach(item => { item.cols.pop() })
      this.index--
    },
    editItem (item) {
      this.editedIndex = this.donnees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialog = true
    },

    deleteItem (item) {
      this.editedIndex = this.donnees.indexOf(item)
      this.editedItem = Object.assign({}, item)
      this.dialogDelete = true
    },

    deleteItemConfirm () {
      this.donnees.splice(this.editedIndex, 1)
      this.closeDelete()
    },

    close () {
      this.dialog = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    closeDelete () {
      this.dialogDelete = false
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem)
        this.editedIndex = -1
      })
    },

    save () {
      if (this.editedIndex > -1) {
        Object.assign(this.donnees[this.editedIndex], this.editedItem)
      } else {
        this.donnees.push(this.editedItem)
      }
      this.close()
    },
  },
}
// export default {
//   name: 'Tableau',
//   props: ['donnees'],
//   data() {
//     return {
//       items: [],
//       fields: []
//     }
//   },
//   methods: {
//     arrayUnique(array) {
//       var a = array.concat();
//       for(var i=0; i<a.length; ++i) {
//         for(var j=i+1; j<a.length; ++j) {
//           if(a[i] === a[j])
//           a.splice(j--, 1);
//         }
//       }
//
//       return a;
//     }
//   },
//   watch: {
//     donnees(){
//       if (this.donnees != undefined){
//         this.donnees.forEach((d) => {
//
//           this.fields = this.arrayUnique(this.fields.concat(Object.keys(d)));
//         });
//         console.log('Fields',this.fields)
//         this.items = this.donnees
//       }
//
//     }
//   }
//
//
// }
</script>

<style>

</style>
