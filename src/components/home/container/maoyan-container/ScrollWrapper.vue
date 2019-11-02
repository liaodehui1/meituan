<template>
  <div class="wrapper">
    <div class="slider" ref="slider">
      <div class="slider-content" :style="`left:${left}px;margin:0px 12px;`">
        <ul ref="ul">
          <slot></slot>
        </ul>
      </div>
      <div class="btn btn-next" style="right:0px" @click="next">
        <i class="iconfont icon-btn_right"></i>
      </div>
      <div class="btn btn-pre" style="left:0px" @click="pre">
        <i class="iconfont icon-btn_left"></i>
      </div>
    </div>
    <div class="slider-pagination">
      <div class="pagination" 
        v-for="item in paginationCount" 
        :key="item"
        :style="item === activeIndex ? 'opacity:0.9;' : 'opacity:0.2;'"></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sliderWidth:0,
      ulWidth:0,
      left:0,
      mwidth:1200,
      paginationCount:2,
      activeIndex:1
    }
  },
  created() {
    window.addEventListener('resize',()=>{
      // console.log('resize')
      if(this.$refs.ul.clientWidth=== 0 || this.$refs.slider.clientWidth === 0) return;
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        // console.log(this.$refs.ul.clientWidth , this.$refs.slider.clientWidth)
        this.ulWidth = this.$refs.ul.clientWidth
        this.sliderWidth = this.$refs.slider.clientWidth
        if(Math.ceil(this.$refs.ul.clientWidth / this.$refs.slider.clientWidth) !== this.paginationCount){
          this.paginationCount = Math.ceil(this.$refs.ul.clientWidth / this.$refs.slider.clientWidth)
        }
      },300)
    })
  },
  methods: {
    // 初始化
    setSliderWidth(){
      if(this.ulWidth && this.sliderWidth) return;
      // 固定
      // console.log("sliderWidth",this.$refs.slider.clientWidth)
      // 所有li宽度之和
      // console.log("ulWidth",this.$refs.ul.clientWidth)
      this.sliderWidth = this.$refs.slider.clientWidth
      this.ulWidth = this.$refs.ul.clientWidth
      // console.log(Math.ceil(this.$refs.ul.clientWidth / this.$refs.slider.clientWidth))
      this.paginationCount = Math.ceil(this.$refs.ul.clientWidth / this.$refs.slider.clientWidth)
    },
    next(){
      // 最多只能向左滑动 this.ulWidth - this.sliderWidth
      if(this.left - this.sliderWidth + (this.ulWidth - this.sliderWidth) <0){
        this.left = this.left - (this.ulWidth + this.left - this.sliderWidth)
      }else{
        this.left -= this.sliderWidth
      }
      if(this.activeIndex < this.paginationCount){
        this.activeIndex += 1
      }else if(this.activeIndex > this.paginationCount){
        this.activeIndex = Math.ceil(this.$refs.ul.clientWidth / this.$refs.slider.clientWidth)
      }
    },
    pre(){
      if(this.left + this.sliderWidth > 0){
        this.left = 0
      }else{
        this.left += this.sliderWidth
      }
      if(this.activeIndex <= this.paginationCount + 1 && this.activeIndex >1){
        this.activeIndex -= 1
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.wrapper
  height 100%
  width 100%
  .slider
    width 100%
    height 100%
    overflow hidden
    position relative
    .slider-content
      width 10000000px
      height 100%
      transition left .5s
      transition-timing-function ease-out
      position relative //相对于自身
      text-align left
      ul
        display inline-block
    .btn
      width 40px
      height 40px
      border-radius 40px
      background-color #333
      position absolute
      top 43%
      opacity 0
      transition opacity .5s
      transform scale(0.95)
      text-align center
      cursor pointer
      .iconfont
        font-size 20px
        text-align center
        color #ffffff
        line-height 40px
    &:hover
      .btn
        opacity 0.8
        transition opacity .5s 
  .slider-pagination
    position absolute
    bottom 8px
    left 50%
    transform translateX(-50%)
    .pagination
      width 10px
      height 2px
      background-color #333
      transition opacity .5s
      float left
      margin-right 10px
</style>