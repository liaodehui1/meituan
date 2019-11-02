<template>
  <div class="index-nav-container undefined" :style="styl">
    <ul>
      <li class="title nav-item mf-shang-hei-regular">{{nav.theme}}</li>
      <li class="nav-item" 
        :class="activeIndex === index ? 'active' : ''" 
        v-for="(item,index) in nav.navList" 
        :key="index"
        @mouseenter="enter(index)">{{item.text || item.cityName}}</li>
      <li class="total nav-item" v-if="link">
        <router-link :to="link">
          <span>全部</span>
          <span class="right-arrow iconfont icon-btn_right"></span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex:0
    }
  },
  props:{
    nav:{
      type:Object
    },
    styl:{
      type:String
    },
    link:{
      type:String,
      default:''
    }
  },
  methods: {
    enter(index){
      this.activeIndex = index
      let tab = this.nav.navList[index].tab || this.nav.navList[index].cityId
      this.$emit('fetchData',tab)
    }
  },
};
</script>

<style lang="stylus" scoped>
  .index-nav-container
    width 100%
    height 44px
    line-height 44px
    font-size 14px
    color #ffffff
    border-top-right-radius 5px
    border-top-left-radius 5px
    text-align left
    ul
      position relative
      .title
        font-size 18px
        margin-left 13px
        margin-right 10px
      .nav-item
        position relative
        display inline-block
        padding 0 5px
        cursor pointer
        text-transform uppercase //仅有大写
        &.total
          position absolute
          right 12px
          a
            color #ffffff
        &.active:after
          content ''
          display block
          position absolute
          bottom 0
          left 50%
          transform translateX(-50%)
          border-bottom 7px solid #fff
          border-left 5px solid transparent
          border-right 5px solid transparent
</style>