<template>
  <div>
    <button @click="btnClick">按钮点击</button>
  </div>
</template>

<script>
  import emitter from "./utils/eventbus"

  export default {
    methods: {
      btnClick() {
        console.log("about 按钮点击")
        emitter.emit("why", {name:"why", age: 18})
      }
    }
  }
</script>

<style scoped>

</style>