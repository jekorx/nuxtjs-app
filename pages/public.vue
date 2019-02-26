<template lang="pug">
  Alert.wrap(
    center
    :closable="false")
      h3 You should see this page without need to authentication!
</template>
<script>
export default {
  name: 'Public'
}
</script>
<style lang="stylus" scoped>
.wrap
  width 60%
  margin 20px auto 0
h3
  padding 10px
</style>
