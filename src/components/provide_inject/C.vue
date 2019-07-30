<template>
  <div>
      {{demo}}
  </div>
</template>
<script>
export default {
  name: 'C',
  inject: ['msg'],
  data () {
    return {
      demo: this.msg
    }
  }
}
</script>
