<template>
  <div class="rate-stars">
    <ul class="rate-stars-ul rate-stars-dark">
      <li class="iconfont icon-star_icon" v-for="index in 5" :key="index"></li>
    </ul>
    <!-- 星星计算覆盖 -->
    <ul class="rate-stars-ul rate-stars-light" :style="`width:${rateWidth}%`">
      <li class="iconfont icon-star_icon" v-for="index in 5" :key="index"></li>
    </ul>
  </div>
</template>

<script>
export default {
  props:['rateWidth']
};
</script>

<style lang="stylus" scoped>
.rate-stars
  width 84px
  height 24px
  position relative
  display inline-block
  .rate-stars-ul
    padding 0
    text-align left
    margin 3px 0
    white-space nowrap
    &>li
      display inline-block
      padding 0px 2px
  .rate-stars-dark
    color #c3c3c3
  .rate-stars-light
    color #ff9900
    position absolute
    top 0
    overflow hidden
</style>