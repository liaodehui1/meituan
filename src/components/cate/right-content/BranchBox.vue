<template>
  <div class="branch-box">
    <div class="branch-info">
      <p class="branch-label">热门分店</p>
      <router-link class="branch-all" 
        :to="`/shops/${this.brandId}`">
        显示全部
      </router-link>
    </div>
    <div class="branch-list">
      <div class="branch-item" v-for="(item,index) in brandInfos" :key="index">
        <a class="branch-title" :href="brandUrl(index)">{{item.name}}</a>
        <div class="branch-score">
          <rate-star :score="item.score"></rate-star>
          <span>{{item.score}}分</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RateStar from '../../public/RateStar'
import util from '@/assets/util/poi.js'

export default {
  props: ["brandInfos", "brandId"],
  components:{
    'rate-star':RateStar
  },
  methods: {
    brandUrl(index) {
      let brand = this.brandInfos[index];
      return util.poiUrlSuper(brand.firstCate[0],brand.showType,brand.id)
    }
  }
};
</script>

<style lang="stylus" scoped>
  .branch-box
    background-color #fff
    border-radius 4px
    border 1px solid #e5e5e5
    padding 16px 20px 0
    width 230px
    box-sizing border-box
    .branch-info
      overflow hidden
      .branch-label
        float left
        font-size 16px
        color #333333
        line-height 22px
        font-weight 700
      .branch-all
        float right
        font-size 12px
        line-height 22px
        color #999999
    .branch-list
      margin-top 14px
      .branch-item
        margin-bottom 20px
        .branch-title
          font-size 14px
          color #222222
          font-weight 500
          margin-top 10px
          line-height 20px
          &:hover
            color #FE8C00
        .branch-score
          margin-left -3px
          span 
            color #666666
            font-size 14px
            margin-left 10px
</style>