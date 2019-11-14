<template>
  <div class="page index">
    <div class="poi-container">
      <crumbs :crumbs="cateInfo.poiInfo.crumbs"></crumbs>
      <poi-detail :poiInfo="cateInfo.poiInfo" :album="cateInfo.album"></poi-detail>
    </div>
  </div>
</template>

<script>
import crumbs from '../public/Crumbs'
import PoiDetail from './poi-detail/PoiDetail'
export default {
  props:['cateInfo'],
  components:{
    crumbs,
    "poi-detail":PoiDetail
  }
}
</script>

<style lang="stylus" scoped>
  .poi-container
    margin 0 auto 
    padding-top 10px
    width 1190px
  @media screen and (max-width 1200px)
    .poi-container
      width 940px
</style>