import { sum } from './js/math'
import './js/element'
import { createApp } from 'vue/dist/vue.esm-bundler'
const { priceFormat } = require('./js/format')

import App from './vue/App.vue'

if (module.hot) {
  module.hot.accept("./js/element.js", () => {
    console.log("模块发生更新")
  })
}

console.log(sum(20, 30))
console.log(priceFormat())

const app = createApp(App)
app.mount('#app')

console.log('123')
console.log('Hello World')
