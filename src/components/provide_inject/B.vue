<template>
  <div>
      {{demo}}
    <C></C>
  </div>
</template>
<script>
import C from './C.vue'
export default {
  name: 'B',
  components: {
    C
  },
  inject: ['msg'],
  data () {
    return {
      demo: this.msg
    }
  }
}
</script>
