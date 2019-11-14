const state = {
  currentCity: {
    "id": 83,
    "name": "南昌",
    "pinyin": "nanchang",
    "acronym": "nc",
    "onlineTime": "1298217600",
    "open": true,
    "rank": "C",
    "locationId": "360100",
    "position": {
        "lat": 28.6895771,
        "lng": 115.8935318
    },
    "divisionStr": "",
    "originGeotagID": 0,
    "realLocationID": "360100",
    "provinceLocationID": "360000",
    "gisID": "360100",
    "chineseFullName": "南昌市",
    "isHot": 0,
    "firstChar": "N",
    "originCityID": 0,
    "recommend": 1,
    "newIndex": 1,
    "endTime": "2000000000"
},
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