<template>
  <div class="poi-group-offer">
    <p class="desc">商家优惠促销</p>
    <div class="group-combo">
      <p class="sub-desc">{{group.length}}款套餐</p>
      <ul>
        <group-combo-li 
          v-for="(index) in count" 
          :key="index" 
          :cardInfo="group[index - 1]">
        </group-combo-li>
      </ul>
      <p class="toggle-btn" @click="unfold" v-if="this.group.length > this.count">
        <span>{{text}}</span>
        <span :class="`iconfont ${showAll ? 'up' : 'down'}-btn`"></span>
      </p>
    </div>
  </div>
</template>

<script>
import GroupComboLi from './GroupComboLi'

export default {
  data() {
    return {
      count:5,
      showAll:false
    }
  },
  computed: {
    text() {
      return this.showAll ? '收起' : `更多${this.group.length - this.count}款套餐`
    }
  },
  props: ["group"],
  components:{
    'group-combo-li':GroupComboLi
  },
  methods: {
    unfold() {
      if(!this.showAll) {
        this.count = this.group.length
      }else {
        this.count = 5
      }
      this.showAll = !this.showAll
    }
  },
};
</script>

<style lang="stylus" scoped>
  .poi-group-offer
    position relative
    margin-top 30px
    .desc
      font-size 20px
      font-weight 500
      color #222
      height 26px
      padding 8px 0px
      overflow hidden
    .group-combo
      padding 20px 20px 0
      margin-bottom 10px
      border 1px solid #e5e5e5
      border-radius 4px
      background-color #fff
      .sub-desc
        font-size 16px
        color #333
        line-height 26px
        font-weight 500
      .toggle-btn
        text-align center
        padding 10px 0
        border-top 1px solid #e5e5e5
        font-size 12px
        color #666
        cursor pointer
        &:hover
          color #FE8C00
        .down-btn,.up-btn
          position relative
          &::after
            position absolute
            top 0
            left 2px
            display block
            transform scale(0.6) rotate(90deg)
        .down-btn
          &::after
            content '\e609'
        .up-btn
          &::after
            content '\e608'
</style>