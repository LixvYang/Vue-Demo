
import { sum } from './js/math'
import './js/element'
import { createApp } from 'vue/dist/vue.esm-bundler'
// import { data } from 'autoprefixer'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

console.log(sum(20, 30))
console.log(priceFormat())

// Vue源代码
// const app = createApp({
//   template: "#my-app",
//   data() {
//     return {
//       title: 'Hello World',
//     }
//   },
// })
const app = createApp(App);
app.mount('#app')
