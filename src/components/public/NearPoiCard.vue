<template>
  <router-link :to="poiUrl" class="link poi-item">
    <div class="card-wrapper">
      <div class="img-box">
        <img :src="imgUrl" class="image" />
      </div>
      <div class="info-box">
        <div class="title ellipsis">{{nearPoi.name}}</div>
        <div class="address ellipsis">{{nearPoi.address}}</div>
        <div class="bottom-line">
          <div class="price-box">
            <span class="yuan">￥</span>
            <span>
              <span class="price-number numfont">{{nearPoi.lowestPrice}}</span>
              <span class="price-desc">起</span>
            </span>
          </div>
          <div class="bottom-right">已售{{nearPoi.sold}}</div>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script>
import util from '@/assets/util/poi.js'

export default {
  props: ["nearPoi"],
  computed: {
    poiUrl() {
      return util.poiUrlSuper(this.nearPoi.firstCate[0],this.nearPoi.showType,this.nearPoi.id)
    },
    imgUrl() {
      return this.nearPoi.headIcon.replace('/w.h','').concat('@267w_150h_1e_1c') 
    }
  },
};
</script>

<style lang="stylus" scoped>
  .poi-item
    padding-left 10px
    padding-right 10px
    margin-bottom 20px
    display inline-block
    width 20%
    box-sizing border-box
    vertical-align middle
    .card-wrapper
      width 100%
      .img-box
        height 0
        padding-bottom 56.25%
        width 100%
        background-color #f4f4f4
        background-image url(../../assets/images/214b8411190e874781fe91dd3096236211567.png)
        background-size cover
        background-position 50%
        border-radius 4px
        overflow hidden
        .image
          width 100%
      .info-box
        position relative
        margin-top 10px
        .title
          font-size 16px
          color #222222
          line-height 22px
          width 100%
          height 22px
          font-weight 500
        .address
          font-size 12px
          color #999999
          width 100%
          height 18px
          line-height 18px
          margin-top 6px
        .bottom-line
          height 26px
          margin-top 4px
          position relative
          .price-box
            color #FF6600
            font-size 0
            .yuan
              font-size 14px
              font-weight 700
            .price-number
              font-size 22px
            .price-desc
              font-size 12px
              margin-left 4px
              font-weight 700
          .bottom-right
            position absolute
            bottom 0
            right 0
            font-size 12px
            color #999999
            line-height 20px
@media screen and (max-width 1200px)
  .poi-item
    width 25%
</style>