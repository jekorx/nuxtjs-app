import qs from 'qs'

/**
 * axios相关配置
 * https://axios.nuxtjs.org/usage
 */
export default function ({ $axios, store: { state } }) {
  // baseURL
  $axios.defaults.baseURL = '/api/'
  // 携带cookie
  // $axios.defaults.withCredentials = true
  // 参数转为FormData
  $axios.defaults.transformRequest = [params => qs.stringify(params)]
  // headers
  const token = state.user && state.user.info && state.user.info.token
  if (token) {
    $axios.defaults.headers.ticket = token
  }
}
