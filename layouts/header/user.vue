<template lang="pug">
  Dropdown.layout-user(
    size="small"
    @command="clickHandler")
    .user
      img(:src="info.avatar || require('~/assets/images/logo.png')")
      Badge.badge(is-dot)
        span.name(v-text="info.nickName")
      i.el-icon-caret-bottom
    DropdownMenu(slot="dropdown")
      DropdownItem.item(command="/icenter") 个人中心
      DropdownItem.item(command="/message")
        Badge(:value="10") 消息中心
      DropdownItem.item(command="/logout") 退出登录
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SIGN } from '~/store/user'

export default {
  name: 'User',
  computed: {
    ...mapGetters('user', { info: 'userInfo' })
  },
  methods: {
    ...mapActions('user', { USER_SIGN }),
    clickHandler (cmd) {
      if (cmd === '/icenter') {
        this.$router.push(cmd)
      } else if (cmd === '/logout') {
        // 清空vuex中用户信息
        this[USER_SIGN]()
        // 路由跳转到首页
        this.$router.push('/')
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.layout-user
  float right
  margin-right 16px
.user
  padding-top 11px
  cursor pointer
  img
    width 40px
    height 40px
    vertical-align middle
    margin-right 4px
    border-radius 100%
    background-color rgba(144,147,153,.4)
    padding 2px
    box-sizing border-box
  .el-icon-caret-bottom
    color #FFF
    margin-left 10px
.badge
  height 30px
  line-height 30px
  vertical-align middle
  padding 0 6px
.name
  color #FFF
.el-dropdown-menu
  .item
    padding 6px 26px
</style>
