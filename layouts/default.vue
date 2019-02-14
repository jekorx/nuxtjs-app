<template lang="pug">
  div
    Header
    nuxt
</template>
<script>
import Header from './header'

export default {
  name: 'Layout',
  components: { Header }
}
</script>
<style lang="stylus">
html
body
  margin 0
  padding 0
  height 100%
  font-size 14px
</style>
