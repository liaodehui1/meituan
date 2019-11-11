<template>
  <router-link :to="`/meishi/${cardInfo.itemId}`" class="link recommend-item">
    <div class="card-container">
      <div class="recommend-card-wrapper">
        <div class="img-box">
          <img :src="cardInfo.imgUrl" />
        </div>
        <div class="info-box">
          <div class="title aligned ellipsis">{{cardInfo.title}}</div>
          <div class="score-line aligned">
            <div class="score">
              <rate-star :rateWidth="cardInfo.rateWidth"></rate-star>
            </div>
            <div class="comment-number">{{cardInfo.commentNum}}个评价</div>
          </div>
          <div class="desc-line aligne">
            <div class="desc ellipsis">{{cardInfo.areaName}}</div>
          </div>
          <div class="bottom-line aligned">
            <div class="price-box">
              <span>
                <span class="yuan">￥</span>
                <span class="price-number numfont">{{cardInfo.lowPrice}}</span>
                <span class="price-desc">起</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import RateStar from '../../../public/RateStar'
export default {
  props:['cardInfo'],
  components:{
    RateStar
  }
};
</script>

<style lang="stylus" scoped>
  .recommend-item
    width 20%
    .card-container
      padding 10px
      &:hover
        background-color #f4f4f4
        transition background-color .5s
        border-radius 4px
      .img-box
        height 0
        padding-bottom 56.25%
        background-color #f4f4f4
        background-image url(/assets/images/214b8411190e874781fe91dd3096236211567.png)
        background-size cover
        background-position 50% 50%
        border-radius 4px
        overflow hidden
        img 
          width 100%
      .info-box
        position relative
        margin-top 10px
        .title
          color #222222
          margin 0
          font-weight 500
          &.aligned
            font-size 16px
            height 22px
            line-height 22px
        .score-line
          div
            display inline-block
          &.aligned
            height 24px
          .score
            display inline-block
            
          .comment-number
            margin-left 10px
            height 24px
            line-height 24px
            color #999999
            font-size 12px
        .desc-line 
          &.aligne
            height 18px
            .desc
              font-size 12px
              color #999999
              height 18px
              line-height 18px
              margin-top 4px
        .bottom-line
          position relative
          div
            display inline-block
          .price-box
            color #ff6600
            font-size 0
            .yuan
              font-size 14px
              font-weight 700
            .price-number
              font-size 22px
              letter-spacing -0.5px
            .price-desc
              font-size 12px
              margin-left 4px
              font-weight 700
  @media screen and (max-width 1200px)
    .recommend-item
      width 25%
</style>