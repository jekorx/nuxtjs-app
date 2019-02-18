<template lang="pug">
  Row(type="flex" justify="center")
    Col.col(span="8")
      Alert
        Form(:label-width="80")
          h3 Login
          FormItem(label="username")
            Input(v-model="username")
              Icon(type="ios-person-outline" slot="prepend")
          FormItem(label="password")
            Input(v-model="password" type="password")
              Icon(type="ios-lock-outline" slot="prepend")
          FormItem(:label-width="0" style="text-align: center")
            Button(@click="submit" type="primary") login
</template>
<script>
import { mapActions } from 'vuex'
import { USER_SIGN } from '~/store/user'
import md5 from 'js-md5'

export default {
  name: 'Login',
  middleware: 'noAuth',
  data () {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    ...mapActions('user', { USER_SIGN }),
    submit () {
      // 提交表单登录
      this.$axios.$post('sign/v1/in', {
        account: this.username,
        password: md5(this.password) // md5加密密码
      }).then(({ data }) => {
        // 结果保存到vuex
        this[USER_SIGN](data)
        // 设置axios请求头
        this.$axios.defaults.headers.ticket = data.token
        // 页面跳转
        const { ref } = this.$route.query
        this.$router.push(ref || '/')
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.col
  padding-top 20px
h3
  text-align center
  padding 20px 0
</style>
