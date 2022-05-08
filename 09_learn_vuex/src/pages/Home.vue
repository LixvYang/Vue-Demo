<template>
  <div>
    <h2>Home:{{$store.state.counter}}</h2>
    <hr>
    <h2>{{height}}</h2>
    <h2>{{age}}</h2>
    <h2>{{name}}</h2>
    <hr>
  </div>
</template>

<script>
import { useState } from "../hooks/setState";

export default {
  setup () {
    const storeState = useState(["counter", "height", "age", "name"]);
    return {
      ...storeState
    }
  }
}
</script>

<style scoped>
</style>