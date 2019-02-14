const Cookie = process.client ? require('js-cookie') : undefined

/**
 * 用户vuex状态
 */
// 常量
export const COOKIE_USER_INFO = 'INFO'
export const USER_LOGIN = 'USER_LOGIN'
export const USER_LOGOUT = 'USER_LOGOUT'

export const state = () => ({
  info: null
})

export const getters = {
  // 用户信息是否为空
  isAuth (state) {
    return !!state.info
  }
}

export const mutations = {
  [USER_LOGIN] (state, info) {
    // 将信息保存到state
    state.info = info
  },
  [USER_LOGOUT] (state) {
    // state中info置为null
    state.info = null
  }
}

export const actions = {
  [USER_LOGIN] ({ commit }, info) {
    // 将信息保存到cookie
    Cookie && Cookie.set(COOKIE_USER_INFO, info)
    commit(USER_LOGIN, info)
  },
  [USER_LOGOUT] ({ commit }) {
    // 清空cookie
    Cookie && Cookie.remove(COOKIE_USER_INFO, { path: '/' })
    commit(USER_LOGOUT)
  }
}
