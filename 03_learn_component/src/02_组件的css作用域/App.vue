<template>
  <div>
    <h2 class="title">App</h2>
    <hello-world></hello-world>
  </div>
</template>

<script>
  import HelloWorld from './HelloWorld.vue'

  export default {
    components: {
      HelloWorld
    } 
  }
</script>

<style scoped>
  h2 {
    color: red;
  }
  .title {
    color: blue;
  }
</style>