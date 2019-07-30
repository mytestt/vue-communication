<template>
  <div class="com_a">
    子组件
    <div>
      <span>{{messageA}}</span>
    <p>获取父组件的值为:  {{parentVal}}</p>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      messageA: this.$parent.msg
    }
  },
  computed: {
    parentVal () {
      return this.$parent.msg
    }
  }
}
</script>
