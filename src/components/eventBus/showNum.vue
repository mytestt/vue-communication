<template>
  <div>计算和: {{count}}</div>
</template>

<script>
import { bus } from './event-bus.js'

export default {
  data () {
    return {
      count: 0
    }
  },

  mounted () {
    bus.$on('addition', param => {
      this.count = this.count + param.num
    })
  }
}
</script>
