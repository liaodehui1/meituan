<template>
  <div class="com-header">
    <header-bar></header-bar>
    <search-bar :type="type"></search-bar>
  </div>
</template>

<script>
import HeaderBar from '../public/HeaderBar'
import SearchBar from '../public/SearchBar'
export default {
  props:['type'],
  components:{
    'header-bar':HeaderBar,
    'search-bar':SearchBar
  }
}
</script>

<style>

</style>