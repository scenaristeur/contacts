<template>

  <v-container>
    <v-row>
      <v-col cols="4" v-for="(item,idx) in items" :key="idx">
        <Item :item="item" @delete="deleteItem" @edit="editItem" />
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="addItem">Add Item</v-btn>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>

export default {
  components: {
      'Item': () => import('@/components/Item'),
  },
  computed: {
    items() {
      return this.$store.state.contacts.items;
    }
  },
  created() {
    this.$store.dispatch('contacts/getItems');
  },
  methods: {
    addItem() {
      this.$router.push({ name: 'edit' });
    },
    async deleteItem(item) {
      console.log('delete', item.id);
      await this.$store.dispatch('contacts/deleteItem', item);
      this.$store.dispatch('contacts/getItems');
    },
    editItem(item) {
      console.log('edit', item.id);
      this.$router.push({ name: 'edit', params: {item: item} });
    }
  }
};
</script>
