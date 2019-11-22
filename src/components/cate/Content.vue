<template>
  <div class="page index">
    <div class="poi-container">
      <crumbs :crumbs="cateInfo.poiInfo.crumbs"></crumbs>
      <poi-detail :poiInfo="cateInfo.poiInfo" :album="cateInfo.album"></poi-detail>
      <div class="center-content">
        <div class="left-content">
          <poi-group-offer v-if="cateInfo.groupDealList.group.length" :group="cateInfo.groupDealList.group"></poi-group-offer>
          <comment :id="cateInfo.poiInfo.id"></comment>
        </div>
        <div class="right-content">
          <map-container 
            :lng="cateInfo.poiInfo.lng" 
            :lat="cateInfo.poiInfo.lat"
            :name="cateInfo.poiInfo.name"
            :address="cateInfo.poiInfo.address"
            :phone="cateInfo.poiInfo.phone"></map-container>
          <brand-box v-if="cateInfo.branchModel" :brandInfos="cateInfo.branchModel.infos" 
            :brandId="cateInfo.poiInfo.brandId">
          </brand-box>
          <recommend-box 
            :poiId="cateInfo.poiInfo.id"
            :cityId="cateInfo.poiInfo.cityId"
            :lat="cateInfo.poiInfo.lat"
            :lng="cateInfo.poiInfo.lng"></recommend-box>
        </div>
      </div>
      <around-box-wrapper :nearPoiList="cateInfo.nearPoiList"></around-box-wrapper>
    </div>
  </div>
</template>

<script>
import crumbs from '../public/Crumbs'
import PoiDetail from './poi-detail/PoiDetail'
import PoiGroupOffer from './left-content/poi-group-offer/PoiGroupOffer'
import MapContainer from '../public/MapContainer'
import BrandBox from './right-content/BranchBox'
import RecommendBox from './right-content/RecommendBox'
import AroundBoxWrapper from './near-poi/AroundBoxWrapper'
import Comment from './left-content/comment/Comment'

export default {
  props:['cateInfo'],
  components:{
    crumbs,
    'poi-detail':PoiDetail,
    'poi-group-offer':PoiGroupOffer,
    'map-container':MapContainer,
    'brand-box':BrandBox,
    'recommend-box':RecommendBox,
    'around-box-wrapper':AroundBoxWrapper,
    'comment':Comment
  }
}
</script>

<style lang="stylus" scoped>
  .poi-container
    margin 0 auto 
    padding-top 10px
    width 1190px
    .center-content
      display flex
      .left-content
        flex 1
      .right-content
        flex 0 0 230px
        margin-left 10px
        padding-top 76px
  @media screen and (max-width 1200px)
    .poi-container
      width 940px
</style>