/**
 * 用户vuex状态
 */

export const state = () => ({
  info: null
})

export const getters = {
  isAuth (state) {
    return !!state.info
  }
}

export const mutations = {

}

export const actions = {

}
