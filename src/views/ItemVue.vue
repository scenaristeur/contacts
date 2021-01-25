<template>
  <div>
    ItemVue
    {{ item }}
  </div>
</template>

<script>
export default {
  name: 'ItemVue',
  data() {
    return {
      item: {}
    }
  },
  created(){

    this.init(this.$route.query)
  },
  methods: {
    init(query) {
      this.item = query.item
    //  console.log(this.item)
    }
  },
  watch: {
    $route(to) {
    //  console.log(to,from)
      this.init(to.query)
      // react to route changes...
    }
  }

}
</script>

<style>

</style>
