import { createApp } from 'vue'
import App from './02_componsitionAPI基础/App.vue'

const app = createApp(App);

// app.mixin({
//   data() {
//     return {
//     }
//   },
//   created() {
//     console.log("全局mixin 的生命周期")
//   }
// })

app.mount('#app')
