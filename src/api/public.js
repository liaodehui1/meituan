import {fetchGet} from './index';

export default {
  suggest(params) {
    return fetchGet('/public/suggest',params)
  },
  recommendList(params) {
    return fetchGet('/public/recmmendList',params)
  }
}