<template>
  <div>
    <button @click="updateState">+1</button>
    <h1>{{readonlyInfo2.name}}</h1>
  </div>
</template>

<script>
  import { reactive, ref, readonly } from "vue";

export default {
  setup() {
    const info1 = {name: "why"}
    const readonlyInfo1 = readonly(info1)

    /** 
     * 2. 响应式对象
     */ 

     const info2 = reactive({
       name: "why"
     })
     const readonlyInfo2 = readonly(info2)
     

     /** 
     * 3. 响应式对象
     */ 
    const info3 = ref("why")
    const readonlyInfo3 = readonly(info3)
    const updateState = function() {
      info3.value  = "coderwhy"
    }
    
    return {
      updateState ,
      readonlyInfo1,
      readonlyInfo2,
      readonlyInfo3
    }
  }

}
</script>

<style scoped>
</style>