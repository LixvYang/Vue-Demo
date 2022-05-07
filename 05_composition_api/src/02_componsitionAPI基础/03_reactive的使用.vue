<template>
  <div>
    <h2>当前计数：{{counter}}</h2>
    <button @click="increment">+1</button>
  </div>
</template>

<script>
  import { ref } from "vue";

export default {
  // 第一个参数 props, 
  props: {
    message: {
      type: String,
      require: true,
      default: ""
    }
  },
  /**
   * 
   * @param {*} props 
   * @param {*} context 
   */
  setup () {

    /**
     * setup界面不会发生更新   
     * counter 最普通的变量不会产生刷新
     */
    // let counter = 100;

    // const state = reactive({
    //   counter: 100
    // })
    let counter = ref(100);

    // 局部函数
    const increment = () => {
      counter.value++;
      // console.log("increment")
      console.log(counter)
    }

    /**
     *  可以替代data
     */
    return {
      msg: "set up 函数",
      counter,
      increment
    }
  }
}
</script>

<style scoped>
</style>