<template lang="pug">
  .wrap
    template(v-for="(item, idx) in page.list")
      Alert.alert(
        :type="alertType[(page.pageSize * (page.pageNum - 1) + idx) % 4]"
        :closable="false")
        template(slot="title")
          | {{ page.pageSize * (page.pageNum - 1) + idx + 1 }} : {{ item.title }}
        p(v-text="`${item.typeName} - ${item.collectNum} - ${item.goodNum} - ${item.shareNum} - ${item.watchNum}`")
        p(v-text="item.createTime")
    Pagination(
      background
      layout="total, prev, pager, next, jumper"
      style="text-align: center"
      :total="page.total"
      :current-page="page.pageNum"
      :page-size.sync="page.pageSize"
      @current-change="pageChange")
    Button(type="primary" @click="test") Ajax Test
</template>
<script>
export default {
  name: 'List-Ps-Pn',
  middleware: 'auth',
  async asyncData ({ $axios, params: { ps = 5, pn = 1 } }) {
    // 异步获取数据
    let { data } = await $axios.$post('app/v1/course/list', {
      // url获取的为string，转为number
      pageNum: +pn,
      pageSize: +ps
    })
    // 返回结果
    return {
      page: data
    }
  },
  data () {
    return {
      alertType: [ 'info', 'success', 'warning', 'error' ]
    }
  },
  methods: {
    test () {
      this.$axios.$post('app/v1/course/list', {
        pageNum: this.page.pageSize,
        pageSize: this.page.pageNum
      }).then(res => {
        console.log(res)
      })
    },
    pageChange (pn) {
      this.$router.push(`/list/${this.page.pageSize}/${pn}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.wrap
  width 80%
  margin 20px auto 0
.alert
  margin-bottom 10px
</style>
