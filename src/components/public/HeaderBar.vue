<template>
  <div class="header-bar">
    <el-row type="flex" justify="space-between" align="middle" class="header-content">
    <el-col :span="12">
      <geo />
      <user />
    </el-col>
    <el-col :span="8">
      <m-nav />
    </el-col>
  </el-row>
  </div>
</template>

<script>
import Geo from './Geo'
import User from './User'
import Nav from './Nav'
export default {
  components:{
    geo:Geo,
    user:User,
    'm-nav':Nav
  }
};
</script>

<style lang="stylus" scoped>
.header-bar
  height 40px
  background-color #f8f8f8
  font-size 12px
  color #999999
  >>> a
    color #999999
    &:hover
      color #fe8c00
.header-content
  width 1190px
  height 100%
  margin 0 auto
@media screen and (max-width: 1200px)
  .header-content
    width 960px 
</style>