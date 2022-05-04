<template>
  <div id="app">
    <Header></Header>
    <Main></Main>
    <Footer></Footer>
  </div>
</template>

<script>
  import Footer from './Footer.vue';
  import Header from "./Header";
  import Main from "./Main.vue";
  export default {
      components: {
        Header,
        Footer,
        Main
      }
  }
</script>

<style scoped>
</style>