<template>
  <div class="page index">
    <div class="index-container">
      <div class="banner-container">
        <left-banner></left-banner>
        <right-banner></right-banner>
      </div>
    </div>
  </div>
</template>

<script>
import LeftBanner from './left-banner/LeftBanner'
import RightBanner from './right-banner/RightBanner'
export default {
  components:{
    LeftBanner,
    RightBanner
  }
}
</script>

<style lang="stylus" scoped>
  .page.index
    text-align center
    .index-container
      margin 0 auto
      width 1190px
      .banner-container,.scenes-container,.maoyan-container,.zhenguo-container,.recommend-container
        width 1190px

      .banner-container
        margin 0 auto
        position relative
    @media screen and (max-width 1200px)
      .index-container
        width 940px
      .banner-container,.scenes-container,.maoyan-container,.zhenguo-container,.recommend-container
        width 950px
</style>