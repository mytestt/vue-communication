<template>
  <div>
      <button @click="toFather">props / $emit</button>
      <button @click="toParent">$children / $parent</button>
      <button @click="toA">provide/ inject</button>
      <button @click="to4">ref / refs</button>
      <button @click="to5">eventBus</button>
      <button @click="to6">Vuex</button>
      <button @click="to7">$attrs与 $listeners</button>
      <button></button>
  </div>
</template>

<script>
export default {
  methods: {
    toFather () {
      this.$router.push('/1')
    },
    toParent () {
      this.$router.push('/2')
    },
    toA () {
      this.$router.push('/3')
    },
    to4 () {
      this.$router.push('/4')
    },
    to5 () {
      this.$router.push('/5')
    },
    to6 () {
      this.$router.push('/6')
    },
    to7 () {
      this.$router.push('/7')
    }
  }
}
</script>

<style scoped>
</style>
