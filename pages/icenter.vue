<template lang="pug">
  Alert.wrap(
    center
    type="success"
    :closable="false")
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
.wrap
  width 60%
  margin 20px auto 0
h3
  padding 10px
</style>
