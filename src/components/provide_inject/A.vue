<template>
  <div>
    <B></B>
  </div>
</template>
<script>
import B from './B.vue'
export default {
  name: 'A',
  components: {
    B
  },
  data () {
    return {
      mssg: 'xxxx'
    }
  },
  provide: {
    msg: this.mssg
  },
}
</script>
