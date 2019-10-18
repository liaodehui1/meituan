<template>
  <div class="com-header">
    <div class="header-bar">
      <div class="header-content df-jsb-ac">
        <div class="header-bar-city">
          <i class="el-icon-location"></i><!-- 去除间隙
          --><span class="current-city">{{currentCity}}</span>
          <router-link to="/changecity" class="change-city">切换城市</router-link>
          <div class="near-city">
            <a
              v-for="(item,index) in nearCity"
              :key="index"
              @click="changeCity(item)"
              href="javascript:;" 
              class="city-guess">
              {{item}}
            </a>
          </div>
        </div>
        <div class="header-bar-nav">导航栏</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed: mapState({
    currentCity:state => state.city.currentCity,
    nearCity:state => state.city.nearCity,
  }),
  methods: {
    ...mapActions({
      changeCity:'city/changeCity'
    })
  }
}
</script>

<style lang="stylus" scoped>
  .com-header
    background-color #fff
    box-shadow 0 2px 27px 0 rgba(0,0,0,.1)
    .header-bar
      height 40px
      background-color #f8f8f8
      font-size 12px
      color #999999
      &-city
        .current-city
          color #666666
        .change-city
          background-color #f4f4f4
          border 1px solid #e5e5e5
          border-radius 2px
          color #666666
          padding 0 2px
          margin 0 2px
          &:hover
            color #fe8c00
        .near-city
          display inline-block
          &::before
            content '['
          &::after
            content ']'
          .city-guess
            margin 0 4px
      a
        color #999999
  .header-content
    width 1190px
    height 100%
    margin 0 auto
    padding-bottom 35px
  @media screen and (max-width: 1200px)
    .header-content
      width 960px 
</style>