<template>

  <v-card>
    <v-card-title>
      {{ item.name }}
    </v-card-title>
    <v-card-text>
      <p>
      This is the body of the item. It is {{ item.age }} years old.
      </p>
    </v-card-text>
    <v-card-actions>
      <v-btn color="red" @click="$emit('delete',item)">Delete</v-btn>
      <v-btn @click="$emit('edit',item)">Edit</v-btn>
    </v-card-actions>
  </v-card>

</template>

<script>
export default {
  props: ['item'],
  data: () => ({
  }),
  created() {
    console.log('item created');
  },
  methods: {
  }
};
</script>
