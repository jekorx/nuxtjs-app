<template lang="pug">
  Dropdown
    .user
      Avatar(:src="info.avatar || require('~/assets/images/logo.png')")
      Badge.badge(dot)
        span.name admin
      Icon(:size="18" type="md-arrow-dropdown")
    DropdownMenu(slot="list")
      DropdownItem(name="message")
        | 消息中心
        Badge(style="margin-left: 10px" :count="10")
      DropdownItem(name="logout" @click.native="logout") 退出登录
</template>
<script>
import { mapState, mapActions } from 'vuex'
import { USER_LOGOUT } from '~/store/user'

export default {
  name: 'User',
  computed: {
    ...mapState('user', { info: 'info' })
  },
  methods: {
    ...mapActions('user', { USER_LOGOUT }),
    logout () {
      // 清空vuex中用户信息
      this[USER_LOGOUT]()
      // 路由跳转到首页
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
.user
  padding-right 6px
  cursor pointer
  .ivu-icon
    color #FFF
    margin-left 10px
.badge
  height 30px
  line-height 30px
  vertical-align middle
  padding 0 6px
.name
  color #FFF
</style>
