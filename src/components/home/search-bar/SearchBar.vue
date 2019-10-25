<template>
  <el-row class="header-content">
    <el-col :span="6">
      <div  class="header-title-module">
        <router-link to="/" >
          <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
        </router-link>
      </div>
    </el-col>
    <el-col :span="12" class="header-search-module">
      <search></search>
    </el-col>
  </el-row>
</template>

<script>
import Search from '../../public/Search'
export default {
  components:{
    search:Search
  }
};
</script>

<style lang="stylus" scoped>
.header-title-module
  padding-top 28px
  padding-right 60px
  padding-bottom 40px
  height 54px
  img 
    width 126px
    height 46px
.header-search-module
  padding-top 28px
@media screen and (max-width 1200px)
  .header-title-module
    padding-right 40px
    min-width 200px
</style>