export const demoMixin = {
  data() {
    return {
      message: "Hello, demoMixin",
    }
  },
  methods: {
    foo() {
      console.log("demo mixin, foo")
    }
  },
  created() {
    console.log("执行了demoMixin 的生命周期")
  }
}