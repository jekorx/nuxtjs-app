<template lang="pug">
  Row(type="flex" justify="center")
    Col.col(span="16")
      Alert(type="info")
        h3 User Info
        p(v-text="'nickName: ' + info.nickName")
        p(v-text="'account: ' + info.account")
        p(v-text="'phone: ' + info.phone")
        p(v-text="'realName: ' + info.realName")
        p(v-text="'roleName: ' + info.roleName")
        p(v-text="'sex: ' + info.sex")
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Icenter',
  middleware: 'auth',
  computed: {
    ...mapGetters('user', { info: 'userInfo' })
  }
}
</script>
<style lang="stylus" scoped>
.col
  padding-top 20px
h3
  padding 20px 0
  text-align center
</style>
