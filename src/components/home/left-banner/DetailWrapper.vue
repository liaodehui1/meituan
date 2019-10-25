<template>
  <div class="category-nav-detail-wrapper"    
    :class="current !== -1 ? 'active' : ''">
    <detail 
      v-for="(item,index) in descList"
      :key="index" 
      :desc="item" 
      :index="index" 
      :current="current"/>
  </div>
</template>

<script>
import Detail from "./Detail";
export default {
  props:['current'],
  data() {
    return {
      descList: [
        [
          {
            link: "/meishi",
            title: "美食",
            content: [
              "代金券",
              "甜点饮品",
              "火锅",
              "自助餐",
              "小吃快餐",
              "日韩料理",
              "西餐",
              "聚餐宴请",
              "烧烤烤肉",
              "东北菜",
              "川湘菜",
              "江浙菜",
              "香锅烤鱼",
              "粤港菜",
              "中式烧烤烤串",
              "西北菜",
              "咖啡酒吧茶馆",
              "云贵菜",
              "东南亚菜",
              "海鲜",
              "素食",
              "台湾客家菜",
              "创意菜",
              "汤粥炖菜",
              "蒙餐",
              "新疆菜",
              "其他美食",
              "京菜鲁菜"
            ]
          }
        ],
        [
          {
            link: "/waimai",
            title: "外卖",
            content: ["美团外卖"]
          }
        ],
        [
          {
            link: "/hotel",
            title: "酒店",
            content: ["经济型", "舒适/三星", "高档/四星", "豪华/五星"]
          }
        ],
        [
          {
            link: "zhenguo",
            title: "热门城市",
            content: [
              "上海",
              "成都",
              "北京",
              "重庆",
              "南京",
              "杭州",
              "广州",
              "西安",
              "武汉",
              "厦门",
              "长沙",
              "青岛",
              "深圳",
              "天津",
              "苏州"
            ]
          },
          {
            link: "zhenguo",
            title: "热门房源",
            content: ["复式Loft", "别墅"]
          }
        ],
        [
          {
            link: "/maoyan",
            title: "热映电影",
            content: [
              "少年的你",
              "沉睡魔咒2",
              "航海王：狂热行动",
              "中国机长",
              "双子杀手",
              "催眠·裁决",
              "犯罪现场",
              "天作谜案",
              "我和我的祖国",
              "攀登者"
            ]
          },
          {
            link: "/maoyan",
            title: "热门影院",
            content: [
              "万达影城",
              "金逸影城",
              "星美国际影城",
              "大地影院",
              "17.5影城",
              "恒大影城",
              "华影国际影城",
              "银兴电影城",
              "永乐影城",
              "博纳国际影城"
            ]
          }
        ],
        [
          {
            link: "/flight",
            title: "机票",
            content: ["国内机票", "国际/港澳台机票"]
          },
          {
            link: "/train",
            title: "火车票",
            content: ["火车票"]
          }
        ],
        [
          {
            link: "/xiuxianyule",
            title: "休闲娱乐",
            content: [
              "足疗按摩",
              "洗浴/汗蒸",
              "酒吧",
              "密室逃脱",
              "轰趴馆",
              "茶馆",
              "私人影院",
              "DIY手工坊",
              "采摘/农家乐",
              "网吧网咖",
              "游乐游艺",
              "VR",
              "桌面游戏",
              "真人CS",
              "棋牌室",
              "其他玩乐"
            ]
          },
          {
            link: "/xiuxianyule",
            title: "KTV",
            content: ["KTV"]
          }
        ],
        [
          {
            link: "/shenhuofuwu",
            title: "生活服务",
            content: [
              "衣物/皮具洗护",
              "家政",
              "搬家运输",
              "送水",
              "充值缴费",
              "服饰/鞋包养护",
              "开锁换锁",
              "居家维修",
              "管道疏通",
              "家电维修清洗",
              "电脑维修",
              "手机维修",
              "证件照/肖像摄影",
              "照片冲印/图文文印",
              "商务服务/法律服务",
              "文化传媒机构",
              "成人用品/情趣用品"
            ]
          }
        ],
        [
          {
            link: "/jiankangliren",
            title: "丽人",
            content: [
              "美发",
              "美甲美睫",
              "美容美体",
              "医学美容",
              "瑜伽舞蹈",
              "瘦身纤体",
              "韩式定妆",
              "祛痘",
              "纹身",
              "化妆品",
              "养发"
            ]
          }
        ],
        [
          {
            link: "/jiehun",
            title: "结婚",
            content: [
              "婚纱摄影",
              "旅拍",
              "个性写真",
              "婚宴",
              "婚庆公司",
              "婚纱礼服",
              "西服定制",
              "婚戒首饰",
              "婚车租赁",
              "司仪主持",
              "彩妆造型",
              "婚礼跟拍",
              "婚礼小礼品",
              "更多婚礼服务"
            ]
          }
        ],
        [
          {
            link: "/qinzi",
            title: "儿童乐园",
            content: ["婴儿游泳", "其它亲子游乐"]
          },
          {
            link: "/qinzi",
            title: "幼儿教育",
            content: [
              "早教中心",
              "少儿英语",
              "智力开发",
              "托班幼儿园",
              "幼儿教育",
              "其他幼儿教育"
            ]
          },
          {
            link: "/qinzi",
            title: "亲子摄影",
            content: ["儿童摄影", "孕妇写真", "上门拍", "其他亲子摄影"]
          },
          {
            link: "/qinzi",
            title: "孕产护理",
            content: [
              "月子会所",
              "产后恢复",
              "妇幼医院",
              "孕产用品",
              "开奶催乳",
              "月嫂",
              "亲子购物",
              "宝宝派对",
              "服务亲子"
            ]
          }
        ],
        [
          {
            link: "/yundongjianshen",
            title: "运动健身",
            content: [
              "健身中心",
              "武术场馆",
              "游泳馆",
              "羽毛球馆",
              "溜冰场",
              "射箭馆",
              "篮球场",
              "网球馆",
              "台球馆",
              "乒乓球",
              "足球场",
              "高尔夫场",
              "保龄球馆",
              "体育场馆",
              "马术场",
              "壁球馆",
              "更多运动"
            ]
          }
        ],
        [
          {
            link: "/jiazhuang",
            title: "装修设计",
            content: ["半包装修", "全包装修", "清包装修"]
          },
          {
            link: "/jiazhuang",
            title: "装修建材",
            content: [
              "地板",
              "瓷砖石材",
              "橱柜",
              "灯饰照明",
              "厨卫洁具",
              "油漆涂料",
              "集成吊顶",
              "墙纸墙艺",
              "门窗",
              "木材板材",
              "家用五金",
              "电工电料",
              "楼梯",
              "管材管件"
            ]
          },
          {
            link: "/jiazhuang",
            title: "家具家居",
            content: [
              "家具",
              "床上用品/家纺",
              "家居饰品",
              "厨具餐具",
              "智能家居"
            ]
          },
          {
            link: "/jiazhuang",
            title: "家装卖场",
            content: ["建材卖场", "家居卖场", "灯饰卖场"]
          }
        ],
        [
          {
            link: "/xuexipeixun",
            title: "音乐培训",
            content: [
              "钢琴",
              "吉他",
              "小提琴",
              "古筝",
              "架子鼓",
              "声乐",
              "其他音乐培训"
            ]
          },
          {
            link: "/xuexipeixun",
            title: "职业技术",
            content: [
              "美容化妆",
              "会计",
              "IT",
              "厨艺",
              "管理培训",
              "摄影培训",
              "司法考试",
              "公务员培训",
              "其他职业培训"
            ]
          },
          {
            link: "/xuexipeixun",
            title: "外语培训",
            content: [
              "英语",
              "日语",
              "韩语",
              "法语",
              "德语",
              "汉语",
              "俄语",
              "西班牙语",
              "其他外语"
            ]
          },
          {
            link: "/xuexipeixun",
            title: "美术培训",
            content: ["绘画", "书法", "其他美术"]
          }
        ],
        [
          {
            link: "/yiliao",
            title: "医疗健康",
            content: [
              "医院",
              "齿科口腔",
              "体检中心",
              "药店",
              "中医",
              "其他健康服务"
            ]
          },
          {
            link: "/aiche",
            title: "爱车",
            content: [
              "洗车",
              "租车",
              "加油站",
              "维修保养",
              "驾校",
              "汽车美容",
              "陪练",
              "汽车用品",
              "停车场",
              "汽车保险",
              "4S店/汽车销售",
              "更多汽车服务",
              "机油保养",
              "汽车报价",
              "二手车",
              "广告驾校",
              "交警队",
              "汽车改装",
              "汽车配件"
            ]
          },
          {
            link: "/chongwu",
            title: "宠物",
            content: ["宠物店", "宠物医院", ""]
          }
        ],
        [
          {
            link: "/xiuxianyule",
            title: "玩乐",
            content: [
              "KTV",
              "酒吧",
              "密室逃脱",
              "游乐游艺",
              "网吧网咖",
              "私人影院",
              "DIY手工坊",
              "桌面游戏",
              "采摘/农家乐",
              "棋牌室",
              "轰趴馆",
              "真人CS",
              "VR",
              "其他玩乐"
            ]
          }
        ]
      ]
    };
  },
  components: {
    detail: Detail
  }
};
</script>

<style lang="stylus" scoped>
  .category-nav-detail-wrapper
    display none
    position absolute
    top 60px
    left 229px //230px
    width 400px
    height 416px
    background-color #fff
    z-index 199
    color #666
    overflow hidden
    &.active
      display block
</style>