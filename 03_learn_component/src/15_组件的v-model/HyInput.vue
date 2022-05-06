<template>
  <div>
    <!-- <button @click="btnClick">hyinput按钮</button>
    <h2>HyInput的message: {{modelValue}}</h2> -->
    <input v-model="value">

  </div>
</template>

<script>


export default {
  props: {
    modelValue: String
  },
  emits: ["update:modelValue"],
  computed: {
    value:  {
      set(value) {
        this.$emit("update:modelValue", value)
      },
      get() {
        return this.modelValue
      }
    }
  },
  methods: {
    btnClick () {
      this.$emit("update:modelValue", "12312312");
    }
  }
}
</script>

<style scoped>
</style>