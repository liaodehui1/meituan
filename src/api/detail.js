import {fetchGet} from './index';

export default {
  cate(id) {
    return fetchGet(`/cate/${id}`)
  }
}