<template>
  <div class="page index">
    <div class="index-container">
      <div class="banner-container">
        <left-banner></left-banner>
        <right-banner></right-banner>
      </div>
      <div class="quality-container">
        <quality-container></quality-container>
      </div>
      <div class="offer-container">
        <cheap-container></cheap-container>
      </div>
      <div class="maoyan-container">
        <maoyan-container></maoyan-container>
      </div>
      <div class="zhenguo-container">
        <zhenguo-container></zhenguo-container>
      </div>
      <div class="recommend-container">
        <recommend-container></recommend-container>
      </div>
    </div>
  </div>
</template>

<script>
import LeftBanner from './left-banner/LeftBanner'
import RightBanner from './right-banner/RightBanner'
import QualityContainer from './container/quality-container/QualityContainer'
import CheapContainer from './container/offer-container/CheapContainer'
import ZhenguoContainer from './container/zhenguo-container/ZhenguoContainer'
import RecommendContainer from './container/recommend-container/RecommendContainer'
import MaoyanContainer from './container/maoyan-container/MaoyanContainer'
export default {
  components:{
    LeftBanner,
    RightBanner,
    QualityContainer,
    CheapContainer,
    ZhenguoContainer,
    RecommendContainer,
    MaoyanContainer
  }
}
</script>

<style lang="stylus" scoped>
  .page.index
    text-align center
    .index-container
      margin 0 auto
      width 1190px
      .banner-container,.quality-container,.offer-container,.maoyan-container,.zhenguo-container,.recommend-container
        width 1190px
        position relative
        display inline-block //去除容器塌陷
      .banner-container
        margin 0 auto
      .quality-container,.offer-container,.maoyan-container,.zhenguo-container,.recommend-container
        margin 40px auto 0
    @media screen and (max-width 1200px)
      .index-container
        width 940px
        .banner-container,.quality-container,.offer-container,.maoyan-container,.zhenguo-container,.recommend-container
          width 950px
</style>