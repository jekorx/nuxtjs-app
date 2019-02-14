// 登录认证，如果store中有用户信息，将重定向到首页，如登录页面
export default function ({ store, redirect }) {
  if (store.getters['user/isAuth']) {
    return redirect('/')
  }
}
