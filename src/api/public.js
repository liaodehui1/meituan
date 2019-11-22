import {fetchGet} from './index';

export default {
  suggest(params) {
    return fetchGet('/public/suggest',params)
  },
  recommendList(params) {
    return fetchGet('/public/recommendList',params)
  },
  getcomment(params) {
    return fetchGet('/public/getcomment',params)
  }
}