import qs from 'qs'
const COOKIE_USER_INFO = process.server ? require('~/store/user').COOKIE_USER_INFO : undefined
const Base64 = process.server ? require('js-base64').Base64 : undefined
const cookieparser = process.server ? require('cookieparser') : undefined

/**
 * axios相关配置（需要区分server和client）
 * https://axios.nuxtjs.org/usage
 */
// ip，服务端使用
const IP = 'http://127.0.0.1:8080'
// 请求前缀
const PREFIX = '/nuojin/'

export default function ({ $axios, store: { getters }, req }) {
  // 携带cookie
  $axios.defaults.withCredentials = true
  // 参数转为FormData
  $axios.defaults.transformRequest = [params => qs.stringify(params)]
  // baseURL
  let token = null
  // server端相关配置
  if (process.server) {
    // baseURL，服务端ajax请求数据需要设置ip地址和端口
    $axios.defaults.baseURL = IP + PREFIX
    // 获取token
    try {
      const parsed = cookieparser.parse(req.headers.cookie)
      // 获取保存用户信息的cookie（base64）
      token = parsed[COOKIE_USER_INFO]
      token = Base64.decode(token)
      token = JSON.parse(token).token
    } catch (err) {
      // No valid cookie found
      process.server && console.log('server-axios-plugin', err)
    }
  } else {
    // client端相关配置
    // baseURL
    $axios.defaults.baseURL = PREFIX
    // 获取token
    token = getters['user/userInfo'] && getters['user/userInfo'].token
  }
  // 设置headers的ticket
  if (token) {
    $axios.defaults.headers.ticket = token
  }
}
