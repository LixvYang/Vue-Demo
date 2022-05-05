<template>
  <div>
    <!-- 绑定到元素上 -->
    <h2 ref="title">哈哈哈</h2>

    <nav-bar ref="navbar"></nav-bar>

    <button @click="btnClick">获取元素</button>
  </div> 
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    methods: {
      btnClick() {
        console.log(this.$refs.title)
        console.log(this.$refs.navbar)
      }
    },
    components: {
      NavBar
    }
  }
</script>

<style scoped>

</style>