<template>
  <div>
    <B></B>
  </div>
</template>
<script>
import B from './B.vue'
export default {
  name: 'A',
  provide: {
    for: 'demo'
  },
  components: {
    B
  }
}
</script>
