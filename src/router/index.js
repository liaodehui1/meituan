import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import ChangeCity from '@/pages/change-city/ChangeCity'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path:'/changecity',
      name:'changecity',
      component:ChangeCity
    }
  ]
})
