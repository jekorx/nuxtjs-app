import { USER_LOGIN, COOKIE_USER_INFO } from './user'
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
  nuxtServerInit ({ commit }, { req }) {
    let info = null
    if (req.headers.cookie) {
      const parsed = cookieparser.parse(req.headers.cookie)
      try {
        info = JSON.parse(parsed[COOKIE_USER_INFO])
      } catch (err) {
        // No valid cookie found
      }
    }
    commit(`user/${USER_LOGIN}`, info, { root: true })
  }
}
