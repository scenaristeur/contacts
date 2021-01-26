<template>
  <div>
    ItemVue
    {{ item }}
    <hr>
<Backbone />
    <hr>
  </div>
</template>

<script>
export default {
  name: 'ItemVue',
  components: {
    'Backbone': () => import('@/components/basic/Backbone'),

  },
  data() {
    return {
      item: {}
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
    }
  },
  watch: {
    $route(to) {
      //  console.log(to,from)
      this.init(to.params)
      // react to route changes...
    }
  }

}
</script>

<style>

</style>
