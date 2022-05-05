<template>
  <div>
    <button
      v-for="item in tabs"
      :key="item"
      @click="itemClick(item)"
      :class="{active: currentTab === item}"
    >{{item}}</button>
    <!-- v-if的判断来实现 -->
    <!-- <template v-if="currentTab === 'home'">
      <home></home>
    </template>
    <template v-if="currentTab === 'about'">
      <about></about>
    </template>
    <template v-if="currentTab === 'category'">
      <category></category>
    </template>-->

    <!-- 2. 动态组件 -->
    <keep-alive include="home,about">
      <component
        :is="currentTab"
        name="codewhy"
        :age="18"
        @pageClick="pageClick"
      ></component>
    </keep-alive>
  </div>
</template>

<script>
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Category from './pages/Category.vue'

export default {
  components: {
    Home,
    About,
    Category
  },
  data () {
    return {
      tabs: ["home", "about", "category"],
      currentTab: "home"
    }
  },
  methods: {
    itemClick (item) {
      this.currentTab = item
    },
    pageClick () {
      console.log("pageClick 发生点击");
    }
  }
}
</script>

<style scoped>
.active {
  color: red;
}
</style>