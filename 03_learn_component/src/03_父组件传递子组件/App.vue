<template>
  <div>
    <show-message id="abc" class="why" title="哈哈哈" content="我是哈哈哈哈"></show-message>
    <show-message title="呵呵呵" content="我是呵呵呵呵"></show-message>
    <show-message :title="title" :content="content"></show-message>
    <show-message :title="message.title" :content="message.content"></show-message>
    <show-message v-bind="message"></show-message>
  </div>
</template>

<script>
  import ShowMessage from "./ShowMessage.vue"

  export default {
    components: {
      ShowMessage
    },
    data() {
      return {
        title: "嘻嘻嘻",
        content: "我是嘻嘻嘻",
        message: {
          title: "嘿嘿嘿",
          content: "我是嘿嘿嘿"
        }
      }
    }
  }
</script>

<style scoped>

</style>