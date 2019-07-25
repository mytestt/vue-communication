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
  inject: ['for'],
  data () {
    return {
      demo: this.for
    }
  }
}
</script>
