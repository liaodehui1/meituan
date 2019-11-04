<template>
  <header class="com-header">
    <header-bar></header-bar>
    <search-bar></search-bar>
  </header>
</template>

<script>
import HeaderBar from '../public/HeaderBar'
import SearchBar from './search-bar/SearchBar'
export default {
  components:{
    'header-bar':HeaderBar,
    'search-bar':SearchBar
  }
}
</script>

<style lang="stylus" scoped>
  .com-header
    background-color #fff
    box-shadow 0 2px 27px 0 rgba(0,0,0,.1)
</style>