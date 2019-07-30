
<template>
  <div>
    <child-com1
      :name="name"
      :age="age"
      title="xxx"
    ></child-com1>
  </div>
</template>
<script>
// const childCom1 = () => import('./childCom1.vue')
import childCom1 from './childCom1.vue'
export default {
  components: { childCom1 },
  data () {
    return {
      name: 'zhang',
      age: '18',
      gender: '女',
      height: '168'
    }
  }
}
</script>
