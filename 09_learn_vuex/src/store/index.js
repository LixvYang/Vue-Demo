import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      counter: 100,
      age: 18,
      height: 1.88,
      name: "lixin"
    }
  },
  mutations: {
    increment(state) {
      state.counter++
    },
    decrement(state) {
      state.counter--
    }
  }
})

export default store