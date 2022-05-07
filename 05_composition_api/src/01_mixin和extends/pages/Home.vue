<template>
  <div>
    Home Pages
    {{title}}
    <button @click="bar">bar</button>
  </div>
</template>

<script>
  import BasePage from "./BasePage.vue"

  export default {
    extends: BasePage,
    data() {
      return {
        content: "Hello Home"
      }
    }
  }
</script>

<style scoped>

</style>