<template>
  <li class="group-combo-li">
    <div class="group-combo-info">
      <div class="img-wrapper">
        <img :src="cardInfo.headIcon" class="image" />
      </div>
      <div class="info">
        <a href class="combo-title">
          <span class="combo-title-text ellipsis">{{cardInfo.title}}</span><!--
          --><img :src="tuanImg" class="icon" />
        </a>
        <div class="combo-subtitle">
          <span class="sold-num">已售{{cardInfo.sold}}</span>
          截止日期:
          <span class="deadline">{{deadTime}}</span>
        </div>
        <div class="combo-prices">
          <span class="price-symbol">￥</span>
          <span class="cur-price numfont">{{cardInfo.price}}</span>
          <span class="market-price">门店价{{cardInfo.value}}</span>
        </div>
      </div>
    </div>
    <div class="operation">
      <span class="panic-buy-btn">立即抢购</span>
    </div>
  </li>
</template>

<script>
import util from '@/assets/util/poi.js'

export default {
  data() {
    return {
      tuanImg:require('@/assets/images/tuan_icon.png')
    }
  },
  props: ["cardInfo"],
  computed: {
    deadTime() {
     return util.formatTime(this.cardInfo.deadline)
    }
  },
};
</script>

<style lang="stylus" scoped>
  .group-combo-li
    padding 20px 0px
    overflow hidden
    &:not(:last-child)
      border-bottom 1px solid #e5e5e5
    .group-combo-info
      float left
      .img-wrapper
        width 100px
        height 100px
        float left
        margin-right 20px
        cursor pointer
        background-image url(../../../../assets/images/214b8411190e874781fe91dd3096236211567.png)
        background-size cover
        background-position 50% 50%
        .image
          width 100%
          height 100%
          border-radius 4px
      .info
        float left
        .combo-title
          font-size 16px
          font-weight 500
          color #222
          height 22px
          line-height 22px
          margin-bottom 4px
          cursor pointer
          &-text
            vertical-align middle
            margin-right 12px
            max-width 480px
            display inline-block
            &:hover
              color #FE8C00
          .icon
            width 16px
            height 16px
            vertical-align middle
            border 0
        .combo-subtitle
          font-size 12px
          color #666666
          line-height 17px
          height 17px
          margin-bottom 22px
          .sold-num
            margin-right 10px
          .deadline
            margin-left 5px
        .combo-prices
          font-size 0
          .price-symbol
            font-size 14px
            color #FF6600
            font-weight 500
          .cur-price
            font-size 30px
            color #FF6600
            margin-right 10px
          .market-price
            font-size 12px
            color #999999
    .operation
      float right
      height 100px
      line-height 100px
      .panic-buy-btn
        font-weight 500
        color #ffffff
        font-size 14px
        padding 10px 32px
        background-color #FF9900
        transition background-color 0.5s
        border none 
        cursor pointer
        border-radius 100px
        &:hover
          background-color #FDAC43
          transition background-color 0.5s
</style>