<template>
  <div class="seller-view">
    <div class="piv">
      <div class="piv-preview bg-prs">
        <div class="now-img  bg-prs" 
          :style="`background-image:url(${album[nowImgIndex].url})`">
        </div>
        <div class="zoom-in" @click="openZoom">
          <i class="iconfont icon-zoom_icon"></i>
        </div>
        <div class="btn-next" @click="now_next">
          <i class="iconfont icon-btn_right"></i>
        </div>
        <div class="btn-pre" @click="now_pre">
          <i class="iconfont icon-btn_left"></i>
        </div>
      </div>
      <div class="piv-album" v-show="showAlbum">
        <div class="btn-next" @click="now_album_next">
          <i class="iconfont icon-btn_right"></i>
        </div>
        <div class="btn-pre" @click="now_album_pre">
          <i class="iconfont icon-btn_left"></i>
        </div>
        <div class="album-ls">
          <div class="album-ul" 
            :style="`width:${now_ls_width}px; left: ${now_ls_left}px; transition: left 0.5s ease 0s;`">
            <div class="img-item" 
              v-for="(item,index) in album" 
              :key="index"
              :style="`background-image:url(${item.url})`"
              @mouseenter="setnowImgIndex(index)"></div>
          </div>
        </div>
      </div>
      <div class="zoom" v-show="showZoom">
        <div class="zoom-bg" @click="closeZoom"></div>
        <div class="zoom-view">
          <div class="zoom-box">
            <img :src="album[zoomImgIndex].url">
            <div class="img-desc">
              <span>{{zoomImgIndex + 1}} / {{total}}：{{album[zoomImgIndex].imgDesc}}</span>
            </div>
          </div>
          <div class="btn-close" @click="closeZoom">
            <i class="iconfont icon-close_icon"></i>
          </div>
          <div class="btn btn-next" @click="zoom_next">
            <i class="iconfont icon-btn_right"></i>
          </div>
          <div class="btn btn-pre" @click="zoom_pre">
            <i class="iconfont icon-btn_left"></i>
          </div>
        </div>
        <div class="album-ls">
          <routerLink :to="`/photo/${id}`" class="link album-link">
            查看全部
            <i class="iconfont icon-btn_right"></i>
          </routerLink>
          <div class="btn-next" @click="zoom_album_next">
            <i class="iconfont icon-btn_right"></i>
          </div>
          <div class="btn-pre" @click="zoom_album_pre">
            <i class="iconfont icon-btn_left"></i>
          </div>
          <div class="album-ul"
            :style="`width:${zoom_ls_width}px; left: ${zoom_ls_left}px; transition: left 0.5s ease 0s;`">
            <div class="img-item bg-prs" 
              v-for="(item,index) in album" 
              :key="index"
              :style="`background-image:url(${item.url});${border(index)}`"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['album','id','support'],
  data() {
    return {
      nowImgItemWidth:97,
      zoomImgItemWidth:147,
      nowAlbumUlWidth:388,
      zoomAlbumUlWidth:882,
      nowImgIndex:0,
      zoomImgIndex:0,
      nowPageIndex:0,
      zoomPageIndex:0,
      showZoom:false
    }
  },
  computed: {
    total() {
      return this.album.length
    },
    showAlbum() {
      return this.album.length > 0 && this.support
    },
    now_ls_width() {
      return this.nowImgItemWidth * this.album.length
    },
    zoom_ls_width() {
      return this.zoomImgItemWidth * this.album.length
    },
    now_ls_left() {
      return this.ls_left('now',4)
    },
    zoom_ls_left() {
      return this.ls_left('zoom',6)
    }
  },
  methods: {
    border(index) {
      return this.zoomImgIndex === index ? 'border: 1px solid rgb(255, 255, 255)' 
        : 'border: 1px solid rgb(99, 99, 99)'
    },
    openZoom() {
      this.showZoom = true
    },
    closeZoom() {
      this.showZoom = false
    },
    setnowImgIndex(index) {
      this.nowImgIndex = index
    },
    maxIndex(size) {
      return Math.ceil(this.album.length / size) - 1
    },
    lastPageSize(size) {
      return this.album.length % size
    },
    ls_left(type,size) {
      if(this[`${type}PageIndex`] === 0) {
        return 0
      }
      if(this[`${type}PageIndex`] === this.maxIndex(size)) {
        console.log(-this[`${type}AlbumUlWidth`] * (this[`${type}PageIndex`] - 1) - this[`${type}ImgItemWidth`] * this.lastPageSize(size))
        return -this[`${type}AlbumUlWidth`] * (this[`${type}PageIndex`] - 1) - this[`${type}ImgItemWidth`] * this.lastPageSize(size)
      }else {
        return - (this[`${type}AlbumUlWidth`] * this[`${type}PageIndex`])
      }
    },
    next(type) {
      let nextIndex = this[`${type}ImgIndex`] + 1
      if(nextIndex >= this.album.length) {
        this[`${type}ImgIndex`] = 0
      }else {
        this[`${type}ImgIndex`] = nextIndex
      }
    },
    pre(type) {
      let preIndex = this[`${type}ImgIndex`] - 1
      if(preIndex < 0) {
        this[`${type}ImgIndex`] = this.album.length - 1
      }else {
        this[`${type}ImgIndex`] = preIndex
      }
    },
    album_next(type,size) {
      if(this[`${type}PageIndex`] + 1 > this.maxIndex(size)) {
        return
      }else {
        this[`${type}PageIndex`] ++
      }
    },
    album_pre(type,size) {
      if(this[`${type}PageIndex`] - 1 < 0) {
        return
      }else {
        this[`${type}PageIndex`] --
      }
    },
    now_next() {
      this.next('now')
    },
    now_pre() {
      this.pre('now')
    },
    now_album_next() {
      this.album_next('now',4)
    },
    now_album_pre() {
      this.album_pre('now',4)
    },
    zoom_next() {
      this.next('zoom')
    },
    zoom_pre() {
      this.pre('zoom')
    },
    zoom_album_next() {
      this.album_next('zoom',6)
    },
    zoom_album_pre() {
      this.album_pre('zoom',6)
    },
  },
  watch: {
    nowImgIndex(newVal) {
      this.zoomImgIndex = newVal
      this.nowPageIndex = Math.floor(this.nowImgIndex / 4)
    },
    zoomImgIndex(newVal) {
      if(this.showZoom) {
        this.zoomPageIndex = Math.floor(this.zoomImgIndex / 6)
      }
    }
  },
};
</script>

<style lang="stylus" scoped>
  .piv
    .piv-preview
      position relative
      height 214px
      width 383px
      background-image url(../../../assets/images/album-placeholder.png)
      border-radius 4px
      &:hover
        .zoom-in,.btn-next,.btn-pre
          opacity 0.5
          transition opacity 0.4s
      .now-img
        width 100%
        height 100%
        display inline-block
        border-radius 4px
      .zoom-in
        background-color #000
        opacity 0
        transition opacity 0.4s
        height 48px
        width 48px
        position absolute
        bottom 83px
        left 166px
        border-radius 50%
        .iconfont
          color #ffffff
          font-size 24px
          position relative
          left 12px
          top 11px
      .btn-next,.btn-pre
        position absolute
        top 0
        bottom 0
        line-height 209px
        border-bottom-right-radius 4px
        border-top-right-radius 4px
        opacity 0
        transition opacity 0.4s
        cursor pointer
        width 40px
      .btn-next
        background linear-gradient(-90deg,#222 0%,rgba(0,0,0,0) 100%)
        right 0
        text-align right
        .iconfont
          color #ffffff
          font-size 18px
          margin-right 10px
      .btn-pre
        background linear-gradient(90deg,#222 0%,rgba(0,0,0,0) 100%)
        left 0
        text-align left
        .iconfont
          color #ffffff
          font-size 18px
          margin-left 10px
    .piv-album
      margin-top 10px
      position relative
      width 384px
      &:hover
        .btn-next,.btn-pre
          opacity 0.4
      .btn-next,.btn-pre
        position absolute
        line-height 50px
        border-radius 4px
        transition opacity 0.4s
        cursor pointer
        z-index 9
        width 40px
        height 50px
        opacity 0
        .iconfont
          color #ffffff
          font-size 20px
      .btn-next
        background linear-gradient(-90deg,#222 0%,rgba(0,0,0,0) 100%)
        bottom 1px
        right 2px
        text-align right
      .btn-pre
        background linear-gradient(90deg, #222 0%, rgba(0, 0, 0, 0.00) 100%)
        top 1px
        left 1px
        text-align left
      .album-ls
        width 100%
        overflow hidden
        .album-ul
          width 99999px
          position relative
          .img-item
            width 90px
            height 50px
            float left
            margin-right 5px
            background-position 100%
            background-size 100%
            border-radius 4px
            border 1px solid #ffffff
    .zoom
      animation fadeInAni 0.2s ease
      position fixed
      left 0
      top 0
      width 100%
      height 100%
      transition opacity 0.5s
      z-index 9999
      .zoom-bg
        background-color #000
        position absolute
        top 0
        left 0
        bottom 0
        right 0
        opacity 0.8
        z-index 2
        transition opacity 0.6s
      .zoom-view
        .zoom-box
          position absolute
          z-index 999
          left 50%
          top 50%
          transform translate(-50%,-322px)
        img
          max-height 500px
          width  auto 
        .img-desc
          color #ffffff
          background-color #000
          opacity 0.7
          width 100%
          font-size 14px
          position relative
          top -29px
          line-height 27px
          span 
            margin-left 10px
        .btn-close
          position absolute
          right 30px
          top 20px 
          height 30px
          width 30px
          opacity 0.6
          transition opacity 0.5s
          z-index 10
          &:hover
            opacity 1
            transition opacity 0.5s
          .iconfont
            font-size 30px
            line-height 30px
            text-align center
            color #ffffff
        .btn
          height 50px
          width 50px
          border-radius 50%
          background-color #000
          position absolute
          opacity 0.8
          z-index 10
          top 33%
          .icon-btn_left,.icon-btn_right
            color #ffffff
            font-size 20px
            line-height 52px
            text-align center
            display inline-block
            width 50px
            z-index 10
        .btn-next
          right 40px
        .btn-pre
          left 40px
      .album-ls
        position absolute
        bottom 0
        z-index 10
        overflow hidden
        width 877px
        left 50%
        transform translateX(-50%)
        margin-bottom 10px
        a.album-link
          color #ffffff
          font-size 14px
          height 24px
          display block
          text-align right
        .btn-next,.btn-pre
          position absolute
          line-height 83px
          border-radius 4px
          transition opacity 0.4s
          cursor pointer
          z-index 9
          width 40px
          height 80px
          opacity 0.8
          text-align right
          .iconfont
            color #ffffff
            font-size 25px
            position relative
            right 10px
        .btn-next
          background linear-gradient(-90deg,#222 0%,rgba(0,0,0,0) 100%)
          bottom 1px
          right 0px
        .btn-pre
          background linear-gradient(90deg, #222 0%, rgba(0, 0, 0, 0.00) 100%)
          bottom 0px
          left 0px
        .album-ul
          position relative
          width 9999px
          .img-item
            width 140px
            height 79px
            border-radius 4px
            margin-right 5px
            float left
</style>