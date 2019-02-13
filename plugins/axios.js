import qs from 'qs'

/**
 * axios相关配置
 */
export default function ({ $axios, redirect }) {
  // 携带cookie
  $axios.defaults.withCredentials = true
  // 参数转为FormData
  $axios.defaults.transformRequest = [params => qs.stringify(params)]
}
