<template>
  <div>
    <!-- <input v-model="message">
    <input :value="mes sage" @input="message - $event.target.value">-->
    <!-- <hy-input2 v-model="message"></hy-input2> -->
    <hy-input2 v-model="message" v-model:title="title"></hy-input2>

    <!-- <hy-input :modelValue="message" @update:model-value="message = $event"></hy-input> -->
    <h2>{{message}}</h2>
    <h2>{{title}}</h2>
  </div>
</template>

<script>
import HyInput2 from "./HyInput2.vue"

export default {
  components: {
    HyInput2
  },
  data () {
    return {
      message: "Hello world",
      title: "哈哈哈",
    }
  }
}
</script>

<style scoped>
</style>