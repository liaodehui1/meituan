import Vue from 'vue'
import Router from 'vue-router'
import home from '@/pages/Home/home'
import changecity from '@/pages/ChangeCity/changecity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path:'/changecity',
      name:'changecity',
      component:changecity
    }
  ]
})
