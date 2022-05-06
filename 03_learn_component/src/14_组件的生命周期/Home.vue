<template>
  <div>
    <h2 ref="title">{{message}}</h2>
    <button @click="changeMessage">改变Message</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        message: "你好啊",
      }
    },
    methods: {
      changeMessage() {
        this.message = "你好啊，我是改变后的值"
      }
    },
    beforeCreate() {
      console.log("beforeCreate")
    },
    created() {
      console.log("created")
    },
    beforeMount() {
      console.log("beforeMount")
    },
    mounted() {
      console.log("mounted")
    },
    beforeUnmount() {
      console.log("beforeUnmount")
    },
    unmounted() {
      console.log("unmounted")
    },
    beforeUpdate() {
      console.log(this.$refs.title.innerHTML)
      console.log("beforeUpdate")
    },
    updated() {
      console.log(this.$refs.title.innerHTML)
      console.log("updated")
    }
  }
</script>

<style scoped>

</style>