<template>
  <router-link class="link quality-card" :to="cardInfo.iUrl">
    <div class="quality-img">
      <img :src="cardInfo.imgUrl" />
    </div>
    <div class="poi-info">
      <div class="title ellipsis">{{cardInfo.title}}</div>
        <div class="tags-wrapper" v-if="cardInfo.tags">
          <div class="tag" v-for="(item,index) in cardInfo.tags" :key="index">
            {{item.tag}}
          </div>
        </div>
      <div class="sub-title ellipsis" v-if="cardInfo.subTitle">{{cardInfo.subTitle}}</div>
      <div class="price-info">
        <span class="current-price-wrapper" v-if="cardInfo.currentPrice">
          <span class="price-symbol numfont">￥</span>
          <span class="current-price numfont">
            {{cardInfo.currentPrice}}<!--
            --><span class="current-price-type" v-if="cardInfo.priceType">/{{cardInfo.priceType}}</span>
          </span>
        </span>
        <span class="old-price" v-if="cardInfo.oldPrice">{{cardInfo.oldPrice}}</span>
        <span class="sold bottom-right-info" v-if="cardInfo.bottomInfo">{{cardInfo.bottomInfo}}</span>
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
  .quality-card
    // min-width 0
    overflow hidden
    flex 0 0 33.3%
    height 314px
    padding 10px
    box-sizing border-box
    background-color #fff
    transition background-color .5s
    &:hover
      background-color #F4F4F4
      transition background-color .5s
      border-radius 4px
    .quality-img
      background-size cover
      background-position 50% 50%
      max-width 100%
      height 208px
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
      .tags-wrapper
        font-size 12px
        height 20px
        color #999999
        overflow hidden
        margin-bottom 5px
        .tag
          height 18px
          line-height 18px
          text-align center
          border 1px solid #d8d8d8
          border-radius 2px
          display inline-block
          margin-right 10px
          margin-bottom 5px
          padding 0 3px
      .sub-title
        font-size 12px
        color #999999
        line-height 18px
        height 18px
        margin-bottom 7px
      .price-info
        height 27px
        overflow hidden
        margin-bottom 10px
        font-size 0
        .current-price-wrapper
          cursor pointer
          .price-symbol
            font-size 14px
            color #BE9E4D
            font-weight 500
          .current-price
            font-size 22px
            color #BE9E4D
            margin-right 6px
            letter-spacing -0.8px
            cursor pointer
            &-type
              font-size 12px
              letter-spacing -0.6px
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
    .quality-card
      height 270px
      .quality-img
        height 162px
</style>