<template lang="pug">
  Alert.wrap(
    center
    type="warning"
    :closable="false")
      h3 This is a secure page!
</template>
<script>
export default {
  name: 'Secret',
  middleware: 'auth'
}
</script>
<style lang="stylus" scoped>
.wrap
  width 60%
  margin 20px auto 0
h3
  padding 10px
</style>
