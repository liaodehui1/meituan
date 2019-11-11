<template>
  <div class="header-bar-city">
    <i class="header-icon icon-header_location"></i><!-- 去除间隙
    --><span class="current-city">{{currentCity}}</span>
    <router-link to="/changecity" class="change-city">切换城市</router-link>
    <div class="near-city">
      <a
        v-for="(item,index) in nearCity"
        :key="index"
        @click="changeCity(item)"
        href="javascript:;"
        class="city-guess"
      >{{item}}</a>
    </div>
  </div>
</template>

<script>
import {mapState,mapActions} from 'vuex'
export default {
  computed: mapState({
    currentCity:state => state.city.currentCity.name,
    nearCity:state => state.city.nearCity,
  }),
  methods: {
    ...mapActions({
      changeCity:'city/changeCity'
    })
  },
};
</script>

<style lang="stylus" scoped>
.header-bar-city
  display inline-block
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
</style>