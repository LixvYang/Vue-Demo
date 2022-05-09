import { createApp } from 'vue'
import { globalRegister } from './global/index'
import App from './App.vue'
import router from './router'
import store from './store'

import './service/axios_demo'

const app = createApp(App)

// registerApp(app)
app.use(globalRegister)
app.use(router)
app.use(store)
// app.use(ElementPlus)
app.mount('#app')
