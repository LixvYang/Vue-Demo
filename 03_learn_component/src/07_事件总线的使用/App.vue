<template>
  <div>
    <home></home>
    <about />
  </div>
</template>

<script>
  import About from './About.vue'
import Home from './Home.vue'
  export default {
    components: {
      Home,
      About
    },
  }
</script>

<style scoped>

</style>