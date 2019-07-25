<template>
  <component-a ref="comA"></component-a>
</template>
<script>
import componentA from './A.vue'
export default {
  components: {
    componentA
  },
  mounted () {
    const comA = this.$refs.comA
    console.log(comA.name)
    comA.sayHello()
  }
}
</script>
