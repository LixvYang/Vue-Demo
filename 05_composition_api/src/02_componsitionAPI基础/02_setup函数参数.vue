<template>
  <div>
    <h2>Home page</h2>
    <h2>{{message}}</h2>
    <h1>{{msg}}</h1>
    <slot></slot>
  </div>
</template>

<script>
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
    setup(props, context) {
      console.log(props.message)
      // console.log(context)
      // 非props的属性
      console.log(context.attrs.id)
      // 取插槽
      console.log(context.slots.default)
      console.log(context.emit)

      /**
       *  可以替代data
       */
      return {
        msg: "set up 函数"
      }
    }
  }
</script>

<style scoped>

</style>