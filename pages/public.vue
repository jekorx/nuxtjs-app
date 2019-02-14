<template lang="pug">
  Row(type="flex" justify="center")
    Col.col(span="16")
      Alert(type="success")
        h3 You should see this page without need to authentication!
</template>
<script>
export default {
  name: 'Public'
}
</script>
<style lang="stylus" scoped>
.col
  padding-top 20px
h3
  padding 20px 0
</style>
