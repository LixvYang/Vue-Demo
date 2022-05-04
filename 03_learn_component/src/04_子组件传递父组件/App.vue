<template>
  <div>
    <h2>当前计数:{{count}}</h2>
    <counter-opeation @add="addOne" @sub="subOne" @addN="addNNum"></counter-opeation>
  </div>
</template>

<script>
import CounterOpeation from "./CounterOpeation.vue"

export default {
  components: {
    CounterOpeation
  },
  data () {
    return {
      count: 0
    }
  },
  methods: {
    addOne () {
      this.count++
    },
    subOne () {
      this.count--
    },
    addNNum (num, name, age) {
      console.log(name, age)
      this.count += num;
    }
  }
}
</script>

<style scoped>
</style>