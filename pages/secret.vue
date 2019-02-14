<template lang="pug">
  Row(type="flex" justify="center")
    Col.col(span="16")
      Alert(type="warning")
        h3 This is a secure page!
</template>
<script>
export default {
  name: 'Secret',
  middleware: 'auth',
  methods: {
    test () {
      this.$axios.$post('app/v1/prospectus/list', {
        pageNum: 1,
        pageSize: 2
      }).then(res => {
        console.log(res.data.list)
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.col
  padding-top 20px
h3
  padding 10px 0
</style>
