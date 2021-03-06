// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import VueLazyload  from 'vue-lazyload'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import './assets/font/index.css';

Vue.use(ElementUI)
Vue.config.productionTip = false
// 图片懒加载
Vue.use(VueLazyload,{
  preLoad:0.5,
  attempt:2,
  listenEvents:['scroll'],
  observer: true,
  observerOptions:{ 
      rootMargin: '-10px', 
      threshold: 0.1 ,
  }
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
