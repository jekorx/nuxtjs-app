<template lang="pug">
  Alert.wrap(
    center
    :closable="false")
    h3 Welcome to Nuxt.js auth example
    div(v-if="!isAuth")
      Button(
        type="success"
        @click="login") Login
    div(v-else)
      Button(
        type="primary"
        @click="secret") Secret
      | &nbsp;&nbsp;
      Button(
        type="danger"
        @click="logout") Logout
    .status
      | User status:
      | &nbsp;&nbsp;
      Tag(
        v-if="isAuth"
        size="small"
        type="success") Logged in
      Tag(
        v-else
        size="small"
        type="warning") Guest
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SIGN } from '~/store/user'

export default {
  name: 'Index',
  computed: {
    ...mapGetters('user', { isAuth: 'isAuth' })
  },
  methods: {
    ...mapActions('user', { USER_SIGN }),
    login () {
      this.$router.push('/login')
    },
    secret () {
      this.$router.push('/secret')
    },
    logout () {
      // 清空vuex中用户信息
      this[USER_SIGN]()
      // 路由跳转到首页
      this.$router.push('/')
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  width 60%
  margin 20px auto 0
  text-align center
h3
  padding 10px
.status
  padding 20px 0 10px
</style>
