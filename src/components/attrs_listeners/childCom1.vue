<template class="border">
  <div>
    <p>name: {{ name}}</p>
    <p>childCom1的$attrs: {{ $attrs }}</p>
    <child-com2 v-bind="$attrs"></child-com2>
  </div>
</template>
<script>
  // const childCom2 = () => import('./childCom2.vue')
  import childCom2 from './childCom2.vue'
  export default {
    data () {
      return {
        msg: '子组件的msg'
      }
    },
    components: {
      childCom2
    },
    props: {
      name: String // name作为props属性绑定
    },
    created() {
      console.log(this.$attrs)
    }
  }
</script>