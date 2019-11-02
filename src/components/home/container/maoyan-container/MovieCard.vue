<template>
  <li class="slider-item-film">
    <a :href="`/maoyan/films/${cardInfo.id}`" class="link">
      <img :src="cardInfo.img" class="image film-img" />
      <img :src="IMG" class="film-mark" v-if="showImg(cardInfo.ver)"/>
      <div class="film-info">
        <p class="film-score">
          <b v-if="cardInfo.sc">
            观众评
            <span>{{cardInfo.sc}}</span>
          </b>
          <b v-else>
            <span>{{cardInfo.wish}}</span>
            人想看
          </b>
        </p>
        <p class="film-name ellipsis">{{cardInfo.nm}}</p>
        <span class="buy-ticket" v-if="cardInfo.preSale">预售</span>
        <span class="buy-ticket" v-if="cardInfo.preSale == 0">购票</span>
      </div>
    </a>
  </li>
</template>

<script>
export default {
  props:['cardInfo'],
  data() {
    return {
      IMG:null,
      IMAX_IMG:require('@/assets/images/imax.png'),
      IMAX3D_IMG:require('@/assets/images/imax3d.png'),
      IMG_3D:require('@/assets/images/3d.png')
    }
  },
  methods: {
    showImg(ver){
      if(ver.indexOf('3D/IMAX') !==-1){
        this.IMG = this.IMAX3D_IMG
        return true
      }else if(ver.indexOf('IMAX') !== -1){
        this.IMG = this.IMAX_IMG
        return true
      }else if(ver.indexOf('3D') !== -1){
        this.IMG = this.IMG_3D
        return true
      }else{
        return false
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
  .slider-item-film
    height 297px
    width 214px
    float left
    background-size cover
    background-repeat no-repeat
    background-position 50%
    position relative
    margin-right 19px
    .image
      border 0px
    .film-img
      border-radius 4px
      width 100%
    .film-mark
      position absolute
      top 10px
      left -6px
      height 20px
      box-shadow 0 2px 6px 0 rgba(0,0,0,0.2)
      width auto
    .film-info
      position absolute
      height 100px
      width 100%
      bottom 0
      border-bottom-right-radius 4px
      border-bottom-left-radius 4px
      background-image linear-gradient(-180deg, rgba(0,0,0,0.00) 0%, rgba(29,45,55,0.80) 99%)
      .film-score
        margin-top 48px
        color #ffffff
        text-align left
        padding-left 10px
        font-weight 500
        font-size 12px
        line-height 21px
        span 
          font-size 16px
          color #FD9827
          font-weight 500
      .film-name
        text-align left
        color #ffffff
        padding-left 10px
        font-size 16px
        font-weight 500
        width 6em
      .buy-ticket
        float right
        top -24px
        right 10px
        background-color #FF4949
        color #ffffff
        padding 2px 12px 3px 12px
        font-size 14px
        position relative
        text-align center
        cursor pointer
        line-height 20px
        border-radius 100px
</style>