<template>
  <div>
    <h2>Home:{{$store.state.counter}}</h2>
    <h2>Home:{{sCounter}}</h2>
    <h2>Home:{{sName}}</h2>
    <h2>Home:{{sAge}}</h2>
    <h2>Home:{{sHeight}}</h2>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  computed: {
    sCounter() {
      return this.$store.state.counter
    },
    // 其他的计算属性从state中获取
    // ...mapState(["counter", "name", "height", "age"])
    ...mapState({
      sCounter: state => state.counter,
      sName: state =>  state.name,
      sAge: state =>  state.age,
      sHeight: state =>  state.height
    })
  }
}
</script>

<style scoped>
</style>