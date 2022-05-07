<template>
  <div>
    <h2>{{message}}</h2>
    <button @click="foo">Foo</button>
  </div>
</template>

<script>
// mixin
  /* 1. data 合并  若冲突 则保留组件内的data
    * 2. methods 对象合并  若冲突 则保留组件内的methods
    * 3. 生命周期 会合并到一个数组
    * 
  */
import { demoMixin } from "./mixins/demoMixin"

  export default {
    mixins: [demoMixin],
    data() {
      return {
        msg: "hello world",
        // message: "Hello App",
      }
    },
    methods: {
      foo() {
        console.log("app foo")
      },
    },
    created() {
      console.log("created App")
    }
  }
</script>

<style scoped>

</style>