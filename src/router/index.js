import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Validation',
    component: () =>
      import ('@/pages/Account/Validation')
  }, {
    path: '*',
    redirect: '/'
  }]
})
