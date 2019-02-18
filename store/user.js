import Cookie from 'js-cookie'
import { Base64 } from 'js-base64'

/**
 * 用户vuex状态
 */
// 常量
export const COOKIE_USER_INFO = 'INFO'
export const USER_SIGN = 'USER_SIGN'

export const state = () => ({
  info: null
})

export const getters = {
  // 用户信息是否为空
  isAuth ({ info }) {
    return !!info
  },
  // 用户信息
  userInfo ({ info }) {
    if (info) {
      return JSON.parse(Base64.decode(info))
    }
    return {}
  }
}

export const mutations = {
  [USER_SIGN] (state, info = null) {
    // 将信息保存到state
    state.info = info
  }
}

export const actions = {
  [USER_SIGN] ({ commit }, info = null) {
    if (info) {
      // 通过base64加密
      info = Base64.encode(JSON.stringify(info))
      // 将信息保存到cookie
      Cookie.set(COOKIE_USER_INFO, info)
    } else {
      // 清空cookie
      Cookie.remove(COOKIE_USER_INFO, { path: '/' })
    }
    commit(USER_SIGN, info)
  }
}
