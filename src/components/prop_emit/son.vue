<template>
  <div>
    <span @click="sendMsg">{{msg}}</span>
  </div>
</template>

<script>
export default {
  name: 'Son',
  props: ['msg'],
  methods: {
    sendMsg () {
      this.$emit('emitMsg', '子组件向父组件传值')
    }
  }
}
</script>

<style scoped>
</style>
