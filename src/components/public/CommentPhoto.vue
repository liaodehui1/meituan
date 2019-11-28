<template>
  <div class="comment-photo">
    <div class="comment-photo-list-box" 
      @mouseenter="showBtn"
      @mouseleave="hiddenBtn"
      ref="wrapper">
      <span class="list-pre-btn" 
        v-show="show"
        @click="pre">
        <i class="iconfont icon-btn_left"></i>
      </span>
      <div class="comment-photo-list"
        :style="`width:${photoListWidth}px;left:${left}px`">
        <div :class="`comment-photo-box ${preview && index === activeIndex ? 'active' : ''}`"
          v-for="(item,index) in picUrls"
          :key="index"
          @click="openPreview(index)"
          ref="photoBox">
          <img :src="`${item.url}@140w_140h_1e_1c`" class="image" />
        </div>
      </div>
      <span class="list-back-btn" 
        v-show="show"
        @click="next">
        <i class="iconfont icon-btn_right"></i>
      </span>
    </div>
    <div class="comment-photo-preview-box" v-show="preview">
      <div class="comment-photo-preview">
        <span class="preview-pre-btn" 
          @click="prePic" 
          v-show="activeIndex !== 0"></span>
        <img :src="activeImgUrl" @click="closePreview">
        <span class="preview-back-btn" 
        @click="nextPic"
        v-show="activeIndex !== picUrls.length -1"></span>
      </div>
    </div>
  </div>
</template>

<script>
import debounce from '@/assets/util/debounce.js'
export default {
  data() {
    return {
      preview:false,
      show:false,
      activeIndex: -1,
      photoBoxWidth:160,
      wrapperWidth:828,
      canCount:5,
      left:0
    }
  },
  mounted() {
    let debounceResize = debounce.call(this,this.resize)
    this.debounceResize = debounceResize
    this.resize()
    window.addEventListener('resize',debounceResize)
  },
  beforeDestroy() {
    window.removeEventListener('resize',this.debounceResize)
  },
  props:['picUrls'],
  computed: {
    photoListWidth() {
      return this.picUrls.length * this.photoBoxWidth
    },
    activeImgUrl() {
      return this.activeIndex === -1 ? '' : `${this.picUrls[this.activeIndex].url}@460h_460w_0e`
    },
    maxPageSize() {
      return Math.floor(this.picUrls.length / (this.canCount + 1))
    },
    totalLength() {
      return this.photoBoxWidth * this.picUrls.length
    }
  },
  methods: {
    showBtn() {
      if(this.totalLength <= this.wrapperWidth) return
      this.show = true
    },
    hiddenBtn() {
      this.show = false
    },
    openPreview(index) {
      this.preview = !this.preview
      if(index !== this.activeIndex){
          this.preview = true
      }
      this.$nextTick(() => {
        if(this.preview) {
          this.activeIndex = index
        }else {
          this.activeIndex = -1
        }
      })
    },
    closePreview() {
      this.preview = false
      this.activeIndex = -1
    },
    next() {
      if(this.left === -this.totalLength) return
      // 剩余长度
      let surplus = this.totalLength - this.wrapperWidth + this.left
      if(surplus < this.wrapperWidth) {
        this.left -= surplus
      }else {
        this.left -=this.wrapperWidth
      }
    },
    pre() {
      if(this.left === 0) return
      let surplus = -this.left
      if(surplus < this.wrapperWidth) {
        this.left = 0
      }else {
        this.left += this.wrapperWidth
      }
    },
    nextPic() {
      let nextIndex = this.activeIndex + 1
      this.changeLeft(nextIndex)
      this.activeIndex ++
    },
    prePic() {
      let preIndex = this.activeIndex - 1
      this.changeLeft(preIndex)
      this.activeIndex --
    },
    changeLeft(activeIndex) {
      // 判断
      let activeLeft = activeIndex * this.photoBoxWidth
      if(activeLeft < -this.left) { // 响应图片作为显示区第一个
        this.left = -activeLeft
      }else if(activeLeft - (this.wrapperWidth - this.photoBoxWidth) > -this.left){ // 响应图片作为显示区最后一个
        this.left = -(activeLeft - (this.wrapperWidth - this.photoBoxWidth))
      }
    },
    resize() {
      // console.log(this.$refs.wrapper.clientWidth)
      this.wrapperWidth = this.$refs.wrapper.clientWidth
    }
  },
};
</script>

<style lang="stylus" scoped>
  .comment-photo
    margin-top -6px
    width 100%
    &-list-box
      width 100%
      overflow hidden
      position relative
      span
        width 30px
        height 140px
        position absolute
        top 10px
        line-height 140px
        text-align center
        transition background-image .3s ease 
        cursor pointer
        z-index 1
        user-select none
        .iconfont
          color #ffffff
          font-size 18px
      .list-pre-btn
        left 0
        background-image linear-gradient(-90deg,rgba(0,0,0,0), rgba(0,0,0,0.4))
      .list-back-btn
        right 0
        background-image linear-gradient(90deg,rgba(0,0,0,0), rgba(0,0,0,0.4))
      .comment-photo-list
        position relative
        transition left .3s ease
        overflow hidden
        .comment-photo-box
          width 160px
          height 160px
          border-radius 4px
          float left
          .image
            width 140px
            height 140px
            margin 10px
            border-radius 4px
            background-color #f4f4f4
        .active
          background-color #f4f4f4
          cursor url(../../assets/images/comment-close-icon.cur),auto
    &-preview-box
      margin-top 10px
      .comment-photo-preview
        position relative
        display inline-block
        .preview-pre-btn,.preview-back-btn
          width 33%
          height 100%
          position absolute
          top 0
          z-index 3
        .preview-pre-btn
          left 0
          cursor url(../../assets/images/left-arrow.cur),auto
        .preview-back-btn
          right 0
          cursor url(../../assets/images/right-arrow.cur),auto
        img 
          max-width 460px
          max-height 460px
          cursor url(../../assets/images/comment-close-icon.cur),auto       
</style>