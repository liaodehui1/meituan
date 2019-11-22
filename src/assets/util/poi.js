var poiMap = {
  defults: 'cate',
  1: 'meishi',
  2: 'xiuxianyule',
  20252: 'yundongjianshen',
  3: 'shenghuo',
  20002: 'shangmenfuwu',
  4: 'wanggou',
  20383: 'shishanggou',
  387: 'bendigouwu',
  20: 'jiudian',
  20178: 'jiehun',
  29: 'sheyingxiezhen',
  20375: 'yanhui',
  78: 'lvyou',
  195: 'zhoubianyou',
  20513: 'dujiachuxing',
  99: 'shop',
  20626: 'dianyingquanbu',
  22: 'jiankangliren',
  20007: 'qinzi',
  20285: 'xuexipeixun',
  20179: 'jiazhuang',
  27: 'aiche',
  20274: 'yiliao',
  20691: 'chongwu',
  20966: 'zhenguo'
};
var showTypeMap = {
  'entertainment': 'xiuxianyule',
  'food': 'meishi',
  'fitness': 'yundongjianshen',
  'easylife': [{
    id: 20691,
    path: 'chongwu'
  }, {
    id: 3,
    path: 'shenghuo'
  }],
  'married': 'jiehun',
  'beauty': 'jiankangliren',
  'children': 'qinzi',
  'education': 'xuexipeixun',
  'domestic': 'jiazhuang',
  'car': 'aiche',
  'medicine': 'yiliao'
};

function poiFilter(ids) {
  if (ids instanceof Array) {
    return ids.map(function (id) {
      return poiMap[id] || poiMap.defults;
    });
  }

  return poiMap[ids] || poiMap.defults;
}

function poiUrl(id) {
  if (id === 99) {
    return '/maoyan/cshop/';
  }

  return `/${poiFilter(id)}/`;
}

function poiUrlSuper(id,showType,poiId) {
  if(showType) {
    return `/${showTypeMap[showType]}/${poiId}`
  }else {
    return poiUrl(id).concat(poiId,'/')
  }
}

function formatTime(time) {
  let date = new Date(time)
  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()
  // console.log(year,month,day)
  return `${year}年${month}月${day}日`
}

export default {
  poiUrlSuper,
  formatTime
}