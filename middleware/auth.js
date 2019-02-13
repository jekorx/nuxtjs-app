// 登录认证，如果store中没有用户信息，将重定向到登录页面
export default function ({ store, redirect }) {
  if (!store.getters['user/isAuth']) {
    return redirect('/login')
  }
}
