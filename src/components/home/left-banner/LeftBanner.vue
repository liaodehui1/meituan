<template>
  <div class="left-banner" @mouseleave="onBlur" >
    <div class="category-nav-container">
    <nav-container @active="onActive" @blur="onBlur"></nav-container>
    <detail-wrapper :current="current"></detail-wrapper>
    </div>
  </div>
</template>

<script>
import NavContainer from './NavContainer'
import DetailWrapper from './DetailWrapper'
export default {
  data() {
    return {
      current:-1
    }
  },
  components:{
    'nav-container':NavContainer,
    'detail-wrapper':DetailWrapper
  },
  methods: {
    onActive(index){
      console.log('active',index)
      this.current = index
    },
    onBlur(){
      console.log('onBlur')
      this.current = -1
    }
  }
}
</script>

<style lang="stylus" scoped>
  .left-banner
    float left
    .category-nav-container
      width 230px
      height 475px
      position relative
      text-align left
      float left
      margin-top -50px
      color #646464
      background-color #fff
      box-sizing border-box
      border 1px solid #e5e5e5
      >>> .iconfontNew:before
        display inline-block
        width 16px
        height 16px
        font-size 16px
</style>