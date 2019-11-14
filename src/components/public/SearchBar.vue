<template>
  <el-row class="header-content">
    <el-col :span="7">
      <div class="header-title-module">
        <div class="box">
          <div class="header-title">
            <router-link to="/">
              <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
            </router-link>
          </div>
          <span class="header-categorys-cate">· {{type}}</span>
          <div class="header-categorys-block">
            <li class="header-categorys-all">全部分类</li>
            <nav class="header-categorys-list">
              <li v-for="(text,i) in textList" :key="i">
                <routerLink 
                  v-for="(item,j) in text" 
                  :key="j" 
                  :to="item.link" :slop="slopeBar(j,text)">
                  {{item.title}}
                </routerLink>
              </li>
            </nav>
          </div>
        </div>
      </div>
    </el-col>
    <el-col :span="12" class="header-search-module">
      <search></search>
    </el-col>
  </el-row>
</template>

<script>
import Search from "./Search";
export default {
  props:['type'],
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
      ]
    };
  },
  methods: {
    slopeBar(index, text) {
      return index === text.length - 1 ? "" : "/";
    }
  },
  components: {
    search: Search
  }
};
</script>

<style lang="stylus" scoped>
  .header-title-module
    .box
      position relative
      height 100%
      .header-categorys-cate
        position relative
        bottom 13px
        margin-left 10px
        color #222
      .header-categorys-block
        margin-left 14px
        display inline-block
        background-color #fff
        position absolute
        right 0
        bottom 15px
        color #999999
        font-size 12px
        border 1px solid #e5e5e5
        border-radius 4px
        .header-categorys-all
          padding 3px 13px 3px 4px
          cursor pointer
          &::after
            content ''
            width 4px
            height 4px
            border-right 1px solid #999
            border-bottom 1px solid #999 
            transform rotate(45deg)
            display block
            position absolute
            right 5px
            bottom 10px
            transition all .5s
        .header-categorys-list
          display none
          position absolute
          background-color #fff
          border 1px solid #e5e5e5
          box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
          border-bottom-right-radius 2px
          border-bottom-left-radius 2px
          left -1px
          padding 15px 40px 12px 10px
          z-index 1
          li
            line-height 2.4
            white-space nowrap
          a
            color #666666
            display inline-block
            padding 0 6px 
            position relative
            &:hover
              color #FE8C00
        &:hover
          box-shadow 0 3px 5px 0 rgba(0,0,0,0.1)
          border-radius 0
          border-top-right-radius 2px
          border-top-left-radius 2px
          .header-categorys-all::after
            transform rotate(-135deg)
            bottom 8px
          .header-categorys-list
            display block
            a::after
              content attr(slop)
              position absolute
              right -3px
              color #666
</style>