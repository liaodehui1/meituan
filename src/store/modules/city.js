const state = {
  currentCity:'南昌',
  nearCity:['奉新','共青城','丰城']
}
const actions = {
  changeCity({commit},city){
    commit('changeCity',city)
  }
}
const mutations = {
  changeCity(state,city){
    state.currentCity = city
  }
}
export default {
  namespaced:true,
  state,
  actions,
  mutations
}