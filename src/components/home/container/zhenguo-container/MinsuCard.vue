<template>
  <div class="minsu-item">
    <router-link :to="`/housing/${cardInfo.productId}`">
      <div class="product-card-header">
        <img :src="cardInfo.coverImage" class="product-img" />
        <img :src="cardInfo.hostAvatarUrl" class="head-img" />
      </div>
      <div class="product-info">
        <p class="product-title ellipsis">{{cardInfo.title}}</p>
        <p class="sub-title">
          <span>整套{{cardInfo.layoutRoom}}居室·</span>
          <span>可住{{cardInfo.maxGuestNumber}}人 | </span>
          <span>{{cardInfo.locationArea}}</span>
        </p>
        <p class="price-number numfont price">
          <span class="price-icon">￥</span><!--
          -->{{cardInfo.price}}
        </p>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props:['cardInfo']
};
</script>

<style lang="stylus" scoped>
  .minsu-item
    padding-right 18px
    box-sizing border-box
    flex 0 0 33.3%
    .product-card-header
      position relative
      .product-img
        width 100%
        height 208px
        border-radius 4px
        background-size cover
        max-width 100%
        margin-bottom 11px
        cursor pointer
      @media screen and (max-width 1200px)
        .product-img
          height 250px
      .head-img
        position absolute
        border 2px solid #ffffff
        height 48px
        width 48px
        bottom -12px
        right 15px
        border-radius 40px
        background-repeat no-repeat
        background-size cover
        background-position 50% 50%
    .product-info
      text-align left
      padding-bottom 25px
      .product-title
        font-size 16px
        color #222
        margin 7px 0
        width 297px
      .sub-title
        font-size 12px
        color #999
        text-align left
      .price
        font-weight 500
        font-size 22px
        color #ff6600
        letter-spacing -0.8px
        padding 4px 0
        .price-icon
          font-size 14px
  @media screen and (max-width 1200px)
    .minsu-item
      flex 0 0 50%
</style>