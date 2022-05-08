<template>
  <div id="app">
    <!-- /** 
     * 1. router-link参数 replace跳转就不压栈
     * 2. router-class 默认随机参数 添加class
    */-->

    <!-- 
      router-link 属性
      1. href 跳转链接 
      2. route对象
      3. navigate 导航
      4. isActive 是否活跃状态
      4. isExactActive 是否处于精确的活跃状态   /home/message 为false
    -->
    <router-link to="/home" replace v-slot="props" custom>
      <button>{{props.href}}</button>
      <button @click="props.navigate">哈哈哈</button>
      <span :class="{'active': props.isActive}">{{props.isActive}}</span>
      <span :class="{'active': props.isActive}">{{props.isExactActive}}</span>
      <!-- <p>{{props.route}}</p> -->
      <!-- <strong>{{props.isActive}}</strong> -->
    </router-link>
    <router-link to="/about" replace>关于</router-link>
    <router-link to="/user/kobe/id/123">用户</router-link>
    <router-link to="/category">分类</router-link>
    <!-- <button @click="jumpToHome">首页</button>
    <button @click="jumpToAbout">关于</button>-->

    <button @click="forwardOneStep">前进一步</button>
    <!-- router-view  将匹配到的组件放到对应的位置 -->
    <router-view v-slot="props">
      <!-- {{props.Component}} -->
      <transition name="why">
        <keep-alive>
          <component :is="props.Component"></component>
        </keep-alive>
      </transition>
        
    </router-view>
  </div>

</template>

<script>

import { useRouter } from "vue-router"

export default {
  name: 'App',
  components: {
  },
  methods: {
    // jumpToHome() {
    //   // console.log('jumpToHome')
    //   this.$router.push('/home')
    // }
  },
  setup () {
    const router = useRouter()
    // const jumpToAbout = () => {
    // router.push('/about')

    // router.push({
    //   path: '/about',
    //   query: {
    //     name: 'why',
    //     age: 18
    //   }
    // })


    // router.replace({
    //   path: '/about',
    //   query: {
    //     name: 'why',
    //     age: 18
    //   },
    // })

    const forwardOneStep = () => {
      router.go(1)
      router.forward()

      // router.back()
    }

    return {
      // jumpToAbout
      forwardOneStep
    }
  }
}

</script>


<style>
</style>
