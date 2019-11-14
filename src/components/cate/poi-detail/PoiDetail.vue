<template>
  <div class="poi-detail df-jsb-ac">
    <div class="seller-info-head">
      <h1 class="seller-name">{{poiInfo.name}}</h1>
      <div class="row">
        <rate-stars :rateWidth="rateWidth"></rate-stars>
        <span class="score">
          {{poiInfo.score}}分
          <span>人均￥{{poiInfo.avgPrice}}</span>
        </span>
        <div class="share-seller">
          <a href="javascript:void(0)" ref="aOpen">
            <i class="icon icon-wechat"></i>分享到微信
          </a>
          <div class="share" v-show="show">
            <div class="qrcode">
              <!-- 原来是动态生成 -->
              <img :src="qrcodeImg" class="qrcode-canvas" />
            </div>
          </div>
        </div>
      </div>
      <div class="seller-info-body">
        <div class="item">
          <span>地址：</span>
          <a href>
            <span>{{poiInfo.address}}</span>
            <i class="iconfont icon-header_location"></i>
          </a>
        </div>
        <div class="item">
          <span>电话：</span>
          <span>{{poiInfo.phone}}</span>
        </div>
        <div class="item">
          <span>营业时间：</span>
          <span>{{poiInfo.openTime}}</span>
        </div>
      </div>
      <div class="support" v-if="support">
        <div class="service" v-if="poiInfo.wifi">
          <i class="icon icon-wifi"></i>
          <br>
          <span>提供WiFi</span>
        </div>
        <div class="service" v-if="poiInfo.park">
          <i class="icon icon-park"></i>
          <br>
          <span>停车位</span>
        </div>
      </div>
    </div>
    <div class="view-box">
      <seller-view :album="album" :id="poiInfo.id" :support="support"></seller-view>
    </div>
  </div>
</template>

<script>
import RateStar from "../../public/RateStar";
import SellerView from './SellerView'

export default {
  data() {
    return {
      show:false,
      qrcodeImg:require('../../../assets/images/qrcodeImg.png')
    }
  },
  props:['poiInfo','album'],
  components: {
    "rate-stars": RateStar,
    "seller-view": SellerView
  },
  mounted() {
    document.body.addEventListener('click',this.showQrCode)
  },
  beforeDestroy() {
    // console.log('销毁')
    document.body.removeEventListener('click',this.showQrCode)
  },
  computed: {
    rateWidth(){
      return this.poiInfo.score / 5.0 * 100
    },
    support() {
      return this.poiInfo.wifi || this.poiInfo.park
    }
  },
  methods: {
    showQrCode(event) {
      const aOpen = this.$refs.aOpen
      // console.log(event.target === aOpen)
      // console.log(aOpen.contains(event.target))
      if(event.target === aOpen) {
        this.show = !this.show
      }else{
        this.show = false
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
.poi-detail
  padding 20px
  .seller-info-head
    flex: 1
    margin-right 20px
    .seller-name
      font-size 26px
      color #222
      font-weight 500
    .row
      margin 5px 0 12px 0
      .score
        font-size 14px
        color #666
        line-height 14px
        padding-left 6px
      .share-seller
        float right
        position relative
        a
          color #666
          font-size 12px
          margin-left 10px
        .icon
          background-image url(../../../assets/images/24pt.png)
          background-repeat no-repeat
          background-size 130px
          width 20px
          height 20px
          display inline-block
          position relative
          top 6px
          left -1px
        .icon-wechat
          background-position 100%
        .share
          position absolute
          z-index 9
          top 30px
          left -30px
          box-shadow 0 5px 14px 0 rgba(0,0,0,.1)
          border-radius 4px
          border 1px solid #e5e5e5
          background-color #fff
          .qrcode-canvas
            width 148px
            height 148px
    .seller-info-body
      padding 10px 0
      border-top 1px solid #e5e5e5
      .item
        font-size 14px
        color #666
        padding 7px 0
        .icon-header_location::before
          content ''
          background-image url(../../../assets/images/location_colour.png)
          background-repeat no-repeat
          width 14px
          height 14px
          margin-left 6px
          display inline-block
          background-size auto 14px
          vertical-align -2px
        span 
          line-height 20px
        a
          color #666
    .support
      border-top 1px solid #e5e5e5
      .service
        float left
        text-align center
        margin 18px 15px 0px 15px
        .icon
          background-image url(../../../assets/images/32pt.png)
          height 30px
          width 30px
          display inline-block
          background-repeat no-repeat
          background-size 180px
        .icon-wifi
          background-position 98%
        .icon-park
          background-position 74%
        span 
          font-size 12%
          color #666
  .view-box 
    flex 0 0 383px
</style>