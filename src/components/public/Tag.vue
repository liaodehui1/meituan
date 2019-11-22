<template>
  <div :class="active ? 'label-active' : ''" @click="select">
    {{tag}}({{count}})
  </div>
</template>

<script>
export default {
  props:['active','tag','count'],
  methods: {
    select() {
      this.$emit('click',this.tag)
    }
  },
}
</script>

<style lang="stylus" scoped>
  .label-active
    color #222
    font-weight 500
    border 1px solid #FFC700
    background-color rgba(255,150,0,0.04)
  div
    width auto
    height 22px
    display inline-block
    padding 7px 10px
    font-size 14px
    color #666
    border 1px solid #e5e5e5
    border-radius 2px
    margin 0 10px 10px 0
    cursor pointer
</style>