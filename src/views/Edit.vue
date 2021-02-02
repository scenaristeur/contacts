<template>
  <div>

    <v-form>
      <v-container>
        <v-row>
          <v-col>
            <v-text-field v-model="item.name" label="Name" required />
          </v-col>
          <v-col>
            <v-text-field v-model="item.age" label="Age" required type="numeric" min="0" max="30" />
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <v-btn color="green" @click="save">Save Item</v-btn>
          </v-col>
        </v-row>
      </v-container>
    </v-form>

  </div>
</template>

<script>
export default {
  data() {
    return {
      item:null
    }
  },
  created() {
    if(this.$route.params.item) {
      this.item = this.$route.params.item;
    } else {
      this.item = { name:'', age: 0 };
    }
  },
  methods: {
    async save() {
      await this.$store.dispatch('contacts/saveItem', this.item);
      console.log('back');
      this.$router.push('/solidRestTest');
    }
  }
};
</script>
