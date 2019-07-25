<template>
  <div>
    <son :msg="msg" @emitMsg="getSonMsg"></son>
    <span>{{msgformson}}</span>
  </div>
</template>

<script>
import son from './son.vue'
export default {
  name: 'Father',
  components: {
    son
  },
  data () {
    return {
      msg: '父组件向子组件传值',
      msgformson: ''
    }
  },
  methods: {
    getSonMsg (msg) {
      this.msgformson = msg
    }
  }
}
</script>

<style scoped>
</style>
