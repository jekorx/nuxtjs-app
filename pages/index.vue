<template lang="pug">
  div
    h2 test
    nuxt-link(to="/test") to test
</template>
<script>

export default {
  name: 'Index',
  data () {
    return {
      axios: {},
      testNum: 123
    }
  },
  methods: {

  }
}
</script>
<style lang="stylus" scoped>
div
  text-align center
  border-bottom 1px solid #CCC
h2
  font-weight 500
p
  color red
</style>
