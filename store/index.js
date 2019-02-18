import { USER_SIGN, COOKIE_USER_INFO } from './user'
const cookieparser = process.server ? require('cookieparser') : undefined

/**
 * 根vuex状态
 */

export const state = () => ({

})

export const getters = {

}

export const mutations = {

}

export const actions = {
  // 服务端执行
  nuxtServerInit ({ commit }, { req }) {
    let info = null
    // 初始化时判断是否存在cookie
    if (req.headers.cookie) {
      // 将cookie格式化
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        // 获取保存用户信息的cookie（base64）
        info = parsed[COOKIE_USER_INFO]
      } catch (err) {
        // No valid cookie found
        process.server && console.log('store-server-init', err)
      }
    }
    commit(`user/${USER_SIGN}`, info, { root: true })
  }
}
