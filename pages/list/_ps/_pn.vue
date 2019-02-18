<template lang="pug">
  Row(type="flex" justify="center")
    Col.col(span="16")
      template(v-for="(item, idx) in list")
        Alert(:type="alertType[(page.ps * (page.pn - 1) + idx) % 4]")
          | {{ page.ps * (page.pn - 1) + idx + 1 }} : {{ item.title }}
          template(slot="desc")
            p(v-text="`${item.typeName} - ${item.collectNum} - ${item.goodNum} - ${item.shareNum} - ${item.watchNum}`")
            p(v-text="item.createTime")
      Page(
        show-total
        style="text-align: center"
        :total="page.total"
        :current="page.pn"
        :page-size="page.ps"
        @on-change="pageChange")
    Col.col(span="16")
      Button(type="primary" @click="test") Ajax Test
</template>
<script>
export default {
  name: 'List-Ps-Pn',
  middleware: 'auth',
  async asyncData ({ $axios, params: { ps = 5, pn = 1 } }) {
    // url获取的为string，转为number
    ps = +ps
    pn = +pn
    // 异步获取数据
    let { data } = await $axios.$post('app/v1/course/list', {
      pageNum: pn,
      pageSize: ps
    })
    // 返回结果
    return {
      page: {
        ps,
        pn,
        total: data.total
      },
      list: data.list
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
        pageNum: this.page.pn,
        pageSize: this.page.ps
      }).then(res => {
        console.log(res)
      })
    },
    pageChange (pn) {
      this.$router.push(`/list/${this.page.ps}/${pn}`)
    }
  }
}
</script>
<style lang="stylus" scoped>
.col
  padding-top 20px
</style>
