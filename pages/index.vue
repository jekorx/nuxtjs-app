<template lang="pug">
  div
    Row.row(type="flex" justify="center")
      Col.col(span="16")
        h3 Welcome to Nuxt.js auth example
        div(v-if="!isAuth")
          Button(type="success" @click="login") Login
        div(v-else)
          Button(type="info" @click="secret") Secret
          | &nbsp;&nbsp;
          Button(type="error" @click="logout") Logout
      Col.left(span="16")
        | User status:
        Tag(v-if="isAuth" color="success") Logged in
        Tag(v-else color="gray") Guest
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import { USER_SIGN } from '~/store/user'

export default {
  name: 'Index',
  computed: {
    ...mapGetters('user', { isAuth: 'isAuth' })
  },
  data () {
    return {
      axios: {},
      testNum: 123
    }
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
.row
  text-align center
  padding-top 20px
.col
  background-color #e9ecef
  padding 40px 20px
  border-radius 6px
.left
  text-align left
  padding-top 20px
.ivu-tag
  margin-left 6px
h3
  padding 10px
</style>
