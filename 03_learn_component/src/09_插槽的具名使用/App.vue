<template>
  <div>
    <nav-bar :name="name">
      <template v-slot:left><button>左边的按钮</button></template>
      <template v-slot:center><button><h2>我是标题</h2></button></template>
      <template #right><button><i>右边的i元素</i></button></template>
      <template v-slot:[name]><i>why内容</i></template>
    </nav-bar>
  </div>
</template>

<script>
  import NavBar from './NavBar.vue'

  export default {
    components: {
      NavBar
    },
    data() {
      return {
        name: 'why'
      }
    }
  }
</script>

<style scoped>

</style>