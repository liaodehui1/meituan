<template>
  <ul :class="className">
    <slot></slot>
  </ul>
</template>

<script>
export default {
  props:['className']
}
</script>

<style lang="stylus" scoped>
  .quality-panel,.cheap-panel,.minsu-panel,.recommend-panel
    background-color #fff
    border 1px solid #e5e5e5
    border-top 0
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    box-sizing border-box
    display flex
    flex-wrap wrap
  .quality-panel,.cheap-panel
    padding 11px 10px 10px
  .maoyan-panel
    padding 20px 10px
    background-color #fff
    border 1px solid #e5e5e5
    border-top 0px
    position relative
  .minsu-panel
    padding 20px
    padding-right 0
    padding-bottom 0
  .recommend-panel
    padding 10px 10px 20px
    text-align left
  @media screen and (max-width 1200px)
    .cheap-panel
      max-height 561px
      overflow hidden
    .recommend-panel
      max-height 753px
      overflow-y hidden
</style>