<template>
  <div>
    <h2 v-bind="$attrs">{{title}}</h2>
    <h2 :class="$attrs.class">{{content}}</h2>  
  </div>
</template>

<script>
  export default {
    inheritAttrs: false,
    // props: ['title', 'content']
    props: {
      title: String,
      content: {
        type: String,
        required: true,
        default: "123"
      },
      info: {
        type: Object,
        default() {
          return {name: "why"};
        }
      }
    }
  }
</script>

<style scoped>

</style>