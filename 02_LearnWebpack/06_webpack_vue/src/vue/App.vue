 <template id="my-app">
      <h2>我是Vue渲染出来的</h2>
      <h2>{{title}}</h2>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello World',
    }
  },
  methods: {

  }
}
</script>

<style>
  h2 {
    color: red;
  }
</style>