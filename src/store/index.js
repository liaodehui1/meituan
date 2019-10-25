import Vue from 'vue'
import Vuex from 'vuex'
import city from './modules/city'
import user from './modules/user'

Vue.use(Vuex)

export default new Vuex.Store({
  modules:{
    city,
    user
  }
})