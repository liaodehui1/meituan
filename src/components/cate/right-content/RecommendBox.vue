<template>
  <div class="recommend-box-wrapper">
    <div class="recommend-box">
      <div class="top-nav-box">
        <div class="label">猜你喜欢</div>
      </div>
      <div class="recommend-list">
        <router-link 
          :to="`/meishi/${item.itemId}`" 
          class="link recommend-item"
          v-for="(item,index) in cardList"
          :key="index">
          <recommend-card :cardInfo="item"></recommend-card>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import RecommendCard from '../../public/RecommendCard'
import api from '@/api/public'

export default {
  data() {
    return {
      cardList:[]
    }
  },
  props:['poiId','cityId','lat','lng'],
  components:{
    'recommend-card':RecommendCard
  },
  created() {
    this.getData()
  },
  methods: {
    getData() {
      let params = {
        poiId:this.poiId,
        cityId:this.cityId,
        lat:this.lat,
        lng:this.lng
      }
      api.recommendList(params)
        .then(res => {
          // console.log(res)
          this.cardList = res.map(item => {
            item.imgUrl = item.imgUrl.replace('w.h/','')
            item.imgUrl = item.imgUrl + '@237w_132h_1e_1c'
            return item
          })
        })
    }
  },
}
</script>

<style lang="stylus" scoped>
  .recommend-box
    margin-top 10px
    background-color #fff
    border-radius 4px
    border 1px solid #e5e5e5
    padding 16px 20px 0
    width 230px
    box-sizing border-box
    .top-nav-box
      margin-bottom 12px
      .label
        font-size 16px
        color #333333
        line-height 22px
        font-weight 500
      div
        display inline-block
    .recommend-list
      .recommend-item
        margin-bottom 20px
        display inline-block
        width 190px
</style>