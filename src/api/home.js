import {fetchGet} from './index';

export default {
  // 有格调/狠优惠
  getScenesList(params) {
    return fetchGet('/home/getScenesList',params)
  },
  // 正在热映
  getFilms(tab,params) {
    return fetchGet(`/home/get${tab}Films`,params)
  },
  // 民宿城市
  minsuCitys(params) {
    return fetchGet('/home/minsuCitys',params)
  },
  // 民宿
  minsu(params) {
    return fetchGet('/home/minsu',params)
  },
  // 猜你喜欢
  recommends() {
    return fetchGet('/home/recommends')
  }
}