<template lang="pug">
  Menu(
    mode="horizontal"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="activited"
    @select="redirect")
    .layout-logo Nuxt.js
    MenuItem(index="/")
      i.el-icon-menu
      | Home
    MenuItem(index="/public")
      i.el-icon-goods
      | Public
    MenuItem(index="/secret")
      i.el-icon-warning
      | Secret
    MenuItem(index="/list")
      i.el-icon-tickets
      | List
    MenuItem.layout-nav(
      v-if="!isAuth"
      index="/login")
      i.el-icon-info
      | Login
    User(v-else)
</template>
<script>
import { mapGetters } from 'vuex'
import User from './user'

export default {
  name: 'Nav',
  components: { User },
  computed: {
    ...mapGetters('user', { isAuth: 'isAuth' })
  },
  data () {
    return {
      activited: '/'
    }
  },
  watch: {
    '$route.path' (val) {
      this.activited = val
    }
  },
  created () {
    this.activited = this.$route.path
  },
  methods: {
    redirect (index) {
      this.$router.push(index)
    }
  }
}
</script>
<style lang="stylus" scoped>
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
  margin-right 40px
.el-menu-item.layout-nav
  float right
  margin-right 20px
</style>
