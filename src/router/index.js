import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/pages/home/Home')
    },
    {
      path:'/changecity',
      name:'changecity',
      component: () => import('@/pages/change-city/ChangeCity')
    },
    {
      path:'/shop/:id',
      redirect:'/cate/:id'
    },
    {
      path:'/cate/:id',
      name:'cate',
      component: () => import('@/pages/cate/Cate')
    }
  ]
})
