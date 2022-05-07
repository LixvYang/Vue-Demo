import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'

// 配置我们的映射关系
const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: Home },
  { path: '/about', component: About },
]

// 创建路由对象router

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
