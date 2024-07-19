import AuthLogin from '../../../../views/AuthLogin.vue'

const AuthLoginRoute = {
  path: '/auth/login',
  name: 'authLogin',
  component: AuthLogin
  // beforeEnter: async (to, from, next) => {
    // if( $isAuthenticated === true ){}
    // return next('/models')
  // }
}

export { AuthLoginRoute }
