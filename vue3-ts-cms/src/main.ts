import { createApp } from 'vue'
import { globalRegister } from './global/index'
import App from './App.vue'
import router from './router'
import store from './store'
import hyRequest from './service'

// import './service/axios_demo'

const app = createApp(App)

// registerApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')

console.log(process.env.VUE_APP_BASE_URL)

// hyRequest.request({
//   url: '/home/multidata',
//   method: 'GET',
//   interceptors: {
//     requestIntereptor: (config) => {
//       console.log('单独请求的config')
//       return config
//     },
//     responseIntereptor: (res) => {
//       console.log('单独响应的config')
//       return res
//     }
//   }
// })
interface DataType {
  data: any
  returnCode: string
  success: boolean
}

hyRequest
  .request<DataType>({
    url: '/home/multidata',
    method: 'GET'
  })
  .then((res) => {
    console.log(res.data)
    console.log(res.returnCode)
    console.log(res.success)
  })
