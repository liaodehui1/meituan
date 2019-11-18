<template>
  <div class="around-box-wrapper">
    <div class="around-box">
      <div class="around-label">附近商家</div>
      <div class="poi-list">
        <near-poi-card 
          v-for="(item,index) in nearPoiList"
          :key="index"
          :nearPoi="item"></near-poi-card>
      </div>
    </div>
  </div>
</template>

<script>
import NearPoiCard from '../../public/NearPoiCard'

export default {
  props:['nearPoiList'],
  components:{
    'near-poi-card':NearPoiCard
  }
}
</script>

<style lang="stylus" scoped>
  .around-box
    margin-top 40px
    width 100%
    box-sizing border-box
    .around-label
      font-size 20px
      color #222222
      line-height 26px
      margin-bottom 10px
      font-weight 500
  .poi-list
    box-sizing border-box
    background-color #fff
    border-radius 4px
    border 1px solid #e5e5e5
    max-height 472px
    padding 20px 10px 0
    width 100%
    overflow-y hidden
@media screen and (max-width 1200px)
  .poi-list
    max-height 466px
</style>