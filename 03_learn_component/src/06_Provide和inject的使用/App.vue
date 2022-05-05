<template>
  <div>
    <home></home>
    <button @click="addName">+Name</button>
  </div>
</template>

<script>
  import Home from './Home.vue'
  import { computed } from 'vue'

  export default {
    components: {
      Home
    },
    provide() {
      return {
        name: "why", 
        age: 18,
        length: computed(() => this.names.length)
      }
    },
    data() {
      return {
        names: ["abc", "cba", "nba"]
      }
    },
    methods: {
      addName() {
        this.names.push("new")
        console.log(this.names)
      }
    }
  }
</script>

<style scoped>

</style>