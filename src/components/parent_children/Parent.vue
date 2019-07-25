<template>
  <div class="hello_world">
    <div>{{msg}}</div>
    <child></child>
    <button @click="changeA">点击改变子组件值</button>
  </div>
</template>

<script>
import child from './Child.vue'
export default {
  name: 'HelloWorld',
  components: { child },
  data () {
    return {
      msg: 'Welcome'
    }
  },

  methods: {
    changeA () {
      // 获取到子组件A
      this.$children[0].messageA = 'this is new value'
    }
  }
}
</script>
