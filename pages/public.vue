<template lang="pug">
  Alert.wrap(
    center
    :closable="false")
      h3 You should see this page without need to authentication!
      CarouselCard(:interval="7000" height="300px" type="card" arrow="always")
        CarouselCardItem(v-for="i in 6" :key="i")
          h1(v-text="i")
</template>
<script>
export default {
  name: 'Public',
  data () {
    return {
      isShow: typeof window !== 'undefined'
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  width 60%
  margin 20px auto 0
h3
  padding 10px
h1
  height 100%
  padding 0
  margin 0
  display flex
  justify-content center
  align-items center
  color #FFF
  background linear-gradient(90deg, rgba(88,140,236,1), rgba(106,106,207,1))
</style>
