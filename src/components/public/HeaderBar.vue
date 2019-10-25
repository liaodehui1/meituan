<template>
  <div class="header-bar">
    <div class="header-content">
      <el-row type="flex" justify="space-between" align="middle">
        <el-col :span="12">
          <geo />
          <user />
        </el-col>
        <el-col :span="8">
          <m-nav />
        </el-col>
      </el-row>
    </div>
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
</style>