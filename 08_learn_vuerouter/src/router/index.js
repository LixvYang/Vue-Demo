import { createRouter, createWebHistory } from 'vue-router'

// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

// 配置我们的映射关系
// route
const routes = [
  {
    path: '/',
    redirect: '/home',
  },
  // magic component
  {
    path: '/home',
    name: 'home',
    component: () => {
      return import(/* webpackChunkName: "home-chunk" */ '../pages/Home.vue')
    },
    meta: {
      name: 'why',
      age: 18,
      height: 1.88,
    },
    children: [
      {
        path: '',
        redirect: '/home/message',
      },
      {
        // path 不可以加  /
        path: "message",
        component: () => import('../pages/HomeMessage.vue'),
      },
      {
        path: "shops", 
        component: () => import('../pages/HomeShops.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => {
      return import(/* webpackChunkName: "about-chunk" */ '../pages/About.vue')
    },
  },
  {
    path: "/user/:username/id/:id",
    name: "user",
    component: () => {
      return import(/* webpackChunkName: "user-chunk" */ '../pages/User.vue')
    }
  },
  {
    path: "/:pathMatch(.*)",
    component: () => import('../pages/NotFound.vue')
  }
]

// 创建路由对象router

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
