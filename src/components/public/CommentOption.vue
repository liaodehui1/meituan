<template>
  <label>
    <span :class="active ? 'checked' : 'select'" 
      @click="select">{{active ? `&check;` : ''}}</span><!--
    --><span class="des-text">{{text}}</span>
  </label>
</template>

<script>
export default {
  props:['active','text'],
  methods: {
    select() {
      this.$emit('click')
    }
  },
};
</script>

<style lang="stylus" scoped>
  label 
    width auto
    height 20px
    color #666
    font-size 14px
    display inline-block
    margin-right 23px
    cursor pointer
    user-select none
    span 
      margin-right 4px
      position relative
    .select,.checked
      width 14px
      height 14px
      text-align center
      line-height 14px
      display inline-block
      border 1px solid #aaa
      border-radius 2px
      transition all .3s ease
      vertical-align text-bottom
    .checked
      background-color #ffc300
      border-color #ffc300
      color #000
    .des-text
      width auto
      height 100%
      display inline-block
      vertical-align baseline
</style>