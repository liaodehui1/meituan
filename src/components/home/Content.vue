<template>
  <div class="page index">
    <div class="index-container">
      <left-banner></left-banner>
    </div>
  </div>
</template>

<script>
import LeftBanner from './left-banner/LeftBanner'
export default {
  components:{
    'left-banner':LeftBanner
  }
}
</script>

<style lang="stylus" scoped>
  .page.index
    text-align center
    .index-container
      margin 0 auto
      width 1190px
    @media screen and (max-width 1200px)
      .index-container
        width 940px
</style>