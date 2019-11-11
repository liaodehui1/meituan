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
    .header-content
      padding-bottom 35px
</style>