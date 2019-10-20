<template>
  <div class="com-header">
    <header-bar></header-bar>
  </div>
</template>

<script>
import HeaderBar from '../public/HeaderBar'
export default {
  components:{
    'header-bar':HeaderBar,
  }
}
</script>

<style lang="stylus" scoped>
  .com-header
    background-color #fff
    box-shadow 0 2px 27px 0 rgba(0,0,0,.1)
</style>