<template>
  <router-link class="link cheap-card" :to="cardInfo.iUrl">
    <div class="cheap-img">
      <img v-lazy="cardInfo.imgUrl" />
    </div>
    <div class="poi-info">
      <div class="title ellipsis">{{cardInfo.title}}</div>
      <div class="sub-title ellipsis">{{cardInfo.subTitle}}</div>
      <div class="tags-wrapper"></div>
      <div class="price-info">
        <span class="current-price-wrapper">
          <span class="price-symbol numfont" v-if="cardInfo.currentPrice !== '抢光了'">￥</span>
          <span class="current-price numfont">{{cardInfo.currentPrice}}</span>
        </span>
        <span class="old-price">{{cardInfo.oldPrice}}</span>
        <span class="sold bottom-right-info">{{cardInfo.bottomInfo}}</span>
      </div>
    </div>
  </router-link>
</template>

<script>
export default {
  props:['cardInfo']
};
</script>

<style lang="stylus" scoped>
  .cheap-card
    // min-width 0
    overflow hidden
    flex 0 0 20%
    height 270px
    padding 10px
    box-sizing border-box
    background-color #fff
    transition background-color .5s
    &:hover
      background-color #F4F4F4
      transition background-color .5s
      border-radius 4px
    .cheap-img
      background-image url(../../../../assets/images/214b8411190e874781fe91dd3096236211567.png)
      background-size cover
      background-position 50% 50%
      max-width 100%
      height 120px
      margin-bottom 11px
      cursor pointer
      img 
        width 100%
        height 100%
        border-radius 4px
    .poi-info
      text-align left
      .title
        font-size 16px
        color #222
        height 22px
        line-height 22px
        margin-bottom 8px
        cursor pointer
      .sub-title
        font-size 12px
        color #999999
        line-height 17px
        height 17px
        margin-bottom 10px
      .tags-wrapper
        font-size 12px
        height 20px
        color #999999
        overflow hidden
        margin-bottom 10px
      .price-info
        height 27px
        overflow hidden
        margin-bottom 10px
        font-size 0
        .current-price-wrapper
          cursor pointer
          .price-symbol
            font-size 14px
            color #FF6600
            font-weight 500
          .current-price
            font-size 22px
            color #FF6600
            margin-right 6px
            letter-spacing -0.8px
        .old-price
          font-size 12px
          color #999999
          text-decoration line-through
        .sold,.bottom-right-info
          font-size 12px
          float right
          color #999999
          margin-top 10px
  @media screen and (max-width 1200px)
    .cheap-card
      flex 0 0 25%
</style>