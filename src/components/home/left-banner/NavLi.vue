<template>
  <li class="nav-li" @mouseenter="$listeners.active(itemIndex)">
    <i class="iconfontNew" :class="icon"></i>
    <span class="nav-text-wrapper">
      <span v-for="(item,index) in nav" :key="index">
        <router-link :to="item.link" class="link nav-text">
          {{item.title}}
          <span class="nav-promotion" v-if="itemIndex === hot">HOT</span>
        </router-link>
        {{slopeBar(index)}}
      </span>
    </span>
    <i class="nav-right-arrow"></i>
  </li>
</template>

<script>
export default {
  props:['nav','itemIndex','hot'],
  computed: {
    icon(){
      return this.nav[0].icon
    }
  },
  methods: {
    slopeBar(index){
      return index === this.nav.length-1 ? '' : '/'
    }
  },
};
</script>

<style lang="stylus" scoped>
  .nav-li
    position relative
    box-sizing border-box
    padding 2px 12px
    height 26px
    &:hover
      background rgba(255,150,0,0.08)
      color #222
      .nav-right-arrow
        color #222
        border-bottom 1px solid #222
        border-right 1px solid #222
      .nav-text
        color #222 !important
      a
        font-weight 700
    .nav-text-wrapper
      display inline-block
      margin-left 11px
      .nav-text
        font-size 12px
        line-height 20px
        height 20px
        color #646464
        cursor pointer
    .nav-right-arrow
      width 4px
      height 4px
      color #BFBFBF
      border-bottom 1px solid #BFBFBF
      border-right 1px solid #BFBFBF
      transform rotate(-45deg)
      // display block
      position absolute
      right 13px
      top 0
      bottom 0
      margin auto // 垂直方向居中
  .nav-promotion
    font-size 12px
    color #222
    background-color #FFF3CC
    display inline-block
    border-radius 10px
    padding 0 7px
    margin-left 5px
    transform scale(0.9)
    position relative
    opacity 1
</style>