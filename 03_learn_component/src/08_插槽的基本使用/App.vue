<template>
  <div>
    <my-slotcpn>
      <button>我是按钮</button>
    </my-slotcpn>

    <my-slotcpn>
      <my-button></my-button>
    </my-slotcpn>
  </div>
</template>

<script>
  import MySlotcpn from "./MySlotcpn.vue"
  import MyButton from "./MyButton.vue"

  export default {
    components: {
      MySlotcpn,
      MyButton
    }
  }
</script>

<style scoped>

</style>