// 登录认证，如果store中没有用户信息，将重定向到登录页面
export default function ({ store, route: { path }, redirect }) {
  if (!store.getters['user/isAuth']) {
    // ref为登陆后需要重定向的页面，如果不包含ref，则跳转到首页
    return redirect(`/login?ref=${path}`)
  }
}
