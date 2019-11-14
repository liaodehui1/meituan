<template>
  <div class="crumbs">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item><router-link to="/">{{currentCity}}美团</router-link></el-breadcrumb-item>
      <el-breadcrumb-item v-for="(crumb,index) in crumbs" :key="index">
        <router-link :to="crumbUrl(index)">{{currentCity}}{{crumb.title}}</router-link>
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  props:['crumbs'],
  computed: mapState({
    currentCity:state => state.city.currentCity.name
  }),
  methods: {
    crumbUrl(index) {
      let path = this.crumbs[index].path
      let py = this.crumbs[0].py
      let id = this.crumbs[index].id
      if(index === 0) {
        return path || `/${py}`
      }else {
        return path || `/${py}/c${id}`
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
  .crumbs
    margin 10px auto 20px
    color #222222
    .el-breadcrumb__item
      font-size 12px
      .el-breadcrumb__inner
        a
          color #222
          cursor pointer
          font-weight normal
          &:hover
            color #FE8C00
</style>