<template>
  <div>
    <!-- <child-cpn>
      <button>哈哈哈</button>
    </child-cpn>-->
    <show-names :names="names">
      <template v-slot="slotProps">
        <button>{{slotProps.item}}-{{slotProps.index}}</button>
      </template>
    </show-names>

    <show-names :names="names">
    <!-- default可以省略 -->
      <template v-slot:default="slotProps">
        <strong>{{slotProps.item}}-{{slotProps.index}}</strong>
      </template>
    </show-names>
  </div>
</template>

<script>
// import ChildCpn from './ChildCpn.vue'
import ShowNames from './ShowNames.vue'

export default {
  components: {
    // ChildCpn,
    ShowNames
  },
  data() {
    return {
      names: ["why", "kobe", "james", "curry", "jordan"]
    }
  }
}
</script>

<style scoped>
</style>