<template>
  <el-row class="header-content">
    <el-col :span="6">
      <div  class="header-title-module">
        <div class="header-title">
          <router-link to="/" >
            <img src="//s0.meituan.net/bs/fe-web-meituan/fa5f0f0/img/logo.png" alt="美团" />
          </router-link>
        </div>
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

</style>