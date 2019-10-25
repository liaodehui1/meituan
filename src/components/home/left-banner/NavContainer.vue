<template>
  <div>
    <div class="category-nav-title-wrapper" @mouseenter="$listeners.blur">
      <span class="category-nav-title">全部分类</span>
    </div>
    <div class="category-nav-content-wrapper">
      <ul>
        <nav-li
          v-for="(item,index) in textList"
          :key="index"
          :nav="item"
          :itemIndex="index"
          :hot="hot"
          v-on="$listeners"
        ></nav-li>
      </ul>
    </div>
  </div>
</template>

<script>
import NavLi from "./NavLi";
export default {
  data() {
    return {
      textList: [
        [
          {
            icon: "hc-icon-foodNew",
            title: "美食",
            link: "/meishi"
          }
        ],
        [
          {
            icon: "hc-icon-waimaiNew",
            title: "外卖",
            link: "/waimai"
          }
        ],
        [
          {
            icon: "hc-icon-hotelNew",
            title: "酒店",
            link: "/hotel"
          }
        ],
        [
          {
            icon: "hc-icon-zhenguoNew",
            title: "榛果民宿",
            link: "/zhenguo"
          }
        ],
        [
          {
            icon: "hc-icon-maoyanNew",
            title: "猫眼电影",
            link: "/maoyan"
          }
        ],
        [
          {
            icon: "hc-icon-planeNew",
            title: "机票",
            link: "/flight"
          },
          {
            icon: "hc-icon-planeNew",
            title: "火车票",
            link: "/train"
          }
        ],
        [
          {
            icon: "hc-icon-ktvNew",
            title: "休闲娱乐",
            link: "/xiuxianyule"
          },
          {
            icon: "hc-icon-ktvNew",
            title: "KTV",
            link: "/xiuxianyule"
          }
        ],
        [
          {
            icon: "hc-icon-lifeNew",
            title: "生活服务",
            link: "/shenhuo"
          }
        ],
        [
          {
            icon: "hc-icon-beautyNew",
            title: "丽人",
            link: "/jiankangliren"
          },
          {
            icon: "hc-icon-beautyNew",
            title: "美发",
            link: "/xiuxianyule"
          },
          {
            icon: "hc-icon-beautyNew",
            title: "医学美容",
            link: "/xiuxianyule"
          }
        ],
        [
          {
            icon: "hc-icon-marriedNew",
            title: "结婚",
            link: "/jiehun"
          },
          {
            icon: "hc-icon-marriedNew",
            title: "婚纱摄影",
            link: "/jiehun"
          },
          {
            icon: "hc-icon-marriedNew",
            title: "婚宴",
            link: "/jiehun"
          }
        ],
        [
          {
            icon: "hc-icon-childNew",
            title: "亲子",
            link: "/qinzi"
          },
          {
            icon: "hc-icon-childNew",
            title: "儿童乐园",
            link: "/qinzi"
          },
          {
            icon: "hc-icon-childNew",
            title: "幼教",
            link: "/qinzi"
          }
        ],
        [
          {
            icon: "hc-icon-sportNew",
            title: "运动健身",
            link: "/yundongjianshen"
          },
          {
            icon: "hc-icon-sportNew",
            title: "健身中心",
            link: "/yundongjianshen"
          }
        ],
        [
          {
            icon: "hc-icon-decorateNew",
            title: "家装",
            link: "/jiazhuang"
          },
          {
            icon: "hc-icon-decorateNew",
            title: "建材",
            link: "/jiazhuang"
          },
          {
            icon: "hc-icon-decorateNew",
            title: "家居",
            link: "/jiazhuang"
          }
        ],
        [
          {
            icon: "hc-icon-educationNew",
            title: "学习培训",
            link: "/jiaoyupeixun"
          },
          {
            icon: "hc-icon-educationNew",
            title: "音乐培训",
            link: "/jiaoyupeixun"
          }
        ],
        [
          {
            icon: "hc-icon-medicalNew",
            title: "医疗健康",
            link: "/yiliao"
          },
          {
            icon: "hc-icon-medicalNew",
            title: "宠物",
            link: "/chongwu"
          },
          {
            icon: "hc-icon-medicalNew",
            title: "爱车",
            link: "/aiche"
          }
        ],
        [
          {
            icon: "hc-icon-barNew",
            title: "酒吧",
            link: "/xiuxianyule"
          },
          {
            icon: "hc-icon-barNew",
            title: "密室逃脱",
            link: "/xiuxianyule"
          }
        ]
      ],
      hot:2
    };
  },
  components: {
    "nav-li": NavLi
  }
};
</script>

<style lang="stylus" scoped>
    .category-nav-title-wrapper
      height 50px
      padding-top 15px
      box-sizing border-box
      .category-nav-title
        color #222
        font-size 16px
        font-weight 700
        margin-left 15px
    .category-nav-content-wrapper
        ul
          padding 10px 0 8px
          height 425px
          box-sizing border-box
          display flex
          flex-direction column
          justify-content space-between
</style>