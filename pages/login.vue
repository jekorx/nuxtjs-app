<template lang="pug">
  div
    h4 login
    div
      span username
      input(v-model="username")
    div
      span password
      input(v-model="password" type="password")
    div
      button(@click="submit") login
</template>
<script>
import { mapState } from 'vuex'
// import md5 from 'js-md5'

export default {
  name: 'Login',
  computed: {
    ...mapState('user', { info: 'info' })
  },
  data () {
    return {
      username: 'admin',
      password: 'admin'
    }
  },
  methods: {
    submit () {
      console.log(this.info)
      /* this.$axios.$post('/sign/v1/in', {
        account: this.username,
        password: md5(this.password)
      }).then(res => {
        console.log(res)
      }) */
    }
  }
}
</script>
