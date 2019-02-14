<template lang="pug">
  Menu(mode="horizontal" theme="dark" :active-name="activited")
    .layout-logo Nuxt.js
    MenuItem(name="/")
      nuxt-link(to="/")
        Icon(type="md-home")
        | Home
    MenuItem(name="/public")
      nuxt-link(to="/public")
        Icon(type="md-cube")
        | Public
    MenuItem(name="/secret")
      nuxt-link(to="/secret")
        Icon(type="md-lock")
        | Secret
    .layout-nav
      MenuItem(v-if="!isAuth" name="/login")
        nuxt-link(to="/login")
          Icon(type="md-log-in")
          | Login
      User(v-else)
</template>
<script>
import { mapGetters } from 'vuex'

import User from './user'

export default {
  name: 'Main',
  components: { User },
  computed: {
    ...mapGetters('user', { isAuth: 'isAuth' })
  },
  data () {
    return {
      activited: '/'
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.activited = this.$route.path
    })
  }
}
</script>
<style lang="stylus" scoped>
.ivu-menu-item
  padding 0
  a
    color rgba(255,255,255,.7)
    display block
    padding 0 20px
  &:hover
  &.ivu-menu-item-active
  &.ivu-menu-item-selected
    a
      color #FFF
.layout-logo
  height 30px
  padding 0 16px
  font-size 18px
  line-height 30px
  text-align center
  background-color #5b6270
  color #FFF
  border-radius 3px
  float left
  position relative
  top 15px
  left 20px
  margin-right 20px
.layout-nav
  float right
  margin-right 20px
</style>
