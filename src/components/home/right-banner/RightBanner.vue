<template>
  <div class="right-banner">
    <el-row class="home-header-links" type="flex">
      <el-col :span="4" v-for="(item,index) in headerLinks" :key="index">
        <router-link :to="item.link" class="link" :class="item.class">{{item.title}}</router-link>
      </el-col>
    </el-row>
    <el-row type="flex">
      <el-col :span="lspan" class="banner-slider">
        <el-carousel height="240px">
          <el-carousel-item v-for="(item,index) in sliderImgs" :key="index">
            <router-link :to="item.link" class="link">
              <div class="slider-img-div" :style="`background-image:url(${item.imgUrl})`"></div>
            </router-link>
          </el-carousel-item>
        </el-carousel>
      </el-col>
      <el-col :span="mspan" class="mlr10">
        <router-link to="/xiuxianyule" class="link">
          <div class="pic-1" :style="`background-image:url(${pic1Url})`"></div>
        </router-link>
      </el-col>
      <el-col :span="rspan">
        <login-card></login-card>
      </el-col>
    </el-row>
    <el-row type="flex" class="mt10">
      <el-col :span="lspan" class="df-jsb-ac">
        <router-link to="/hotel" class="link">
          <div class="pic-2" :style="`background-image:url(${pic2Url})`"></div>
        </router-link>
        <router-link to="/jiaoyupeixun" class="link">
          <div class="pic-3" :style="`background-image:url(${pic3Url})`"></div>
        </router-link>
      </el-col>
      <el-col :span="mspan" class="mlr10">
        <router-link to="/meishi" class="link">
          <div class="pic-4" :style="`background-image:url(${pic4Url})`"></div>
        </router-link>
      </el-col>
      <el-col :span="rspan">
        <div class="download-app">
          <div class="qrcode-box"><img :src="downloadQrUrl"></div>
          <p class="app-name">美团APP手机版</p>
          <p class="sl">
            <span class="red">1元起</span>
            <span class="gary">吃喝玩乐</span>
          </p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import LoginCard from './LoginCard'
export default {
  data() {
    return {
      headerLinks:[
        {
          title:'美团外卖',
          link:'/waimai',
          class:'waimai-link'
        },
        {
          title:'猫眼电影',
          link:'/maoyan',
          class:'maoyan-link'
        },
        {
          title:'美团酒店',
          link:'/hotel',
          class:'hotel-link'
        },
        {
          title:'民宿／公寓',
          link:'/zhenguo',
          class:'homestay-link'
        },
        {
          title:'商家入驻',
          link:'/ecom',
          class:'merchant-link'
        },
        {
          title:'美团公益',
          link:'/gongyi',
          class:'gongyi-link'
        },
      ],
      sliderImgs:[
        {
          link:'/hotel',
          imgUrl:require('@/assets/images/daa73310c9e57454dc97f0146640fd9f69772.jpg')
        },
        {
          link:'/meishi',
          imgUrl:require('@/assets/images/826a5ed09dab49af658c34624d75491861404.jpg')
        },
        {
          link:'/waimai',
          imgUrl:require('@/assets/images/a97baf515235f4c5a2b1323a741e577185048.jpg')
        },
        {
          link:'/maoyan',
          imgUrl:require('@/assets/images/33ff80dc00f832d697f3e20fc030799560495.jpg')
        },
        {
          link:'/paidui',
          imgUrl:require('@/assets/images/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png')
        },
      ],
      pic1Url:require('@/assets/images/e473bb428f070321269b23370ff02ba956209.jpg'),
      pic2Url:require('@/assets/images/8cce56c467a17e04f3094d1e455462a0132772.png'),
      pic3Url:require('@/assets/images/16442c19da1f1c4544f794e29d99c92051716.jpg'),
      pic4Url:require('@/assets/images/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg'),
      downloadQrUrl:require('@/assets/images/download-qr.png'),
      lspan:14,
      mspan:4,
      rspan:6,
      mwidth:1200
    }
  },
  components:{
    LoginCard
  },
  mounted() {
    const that = this
    that.mwidth = window.innerWidth
    this.auto(window.innerWidth)
    window.addEventListener('resize',()=>{
      // console.log('resize')
      that.mwidth = window.innerWidth // 包含滚动条
      // console.log(window.innerWidth)
      // console.log(document.body.clientWidth) //不包含滚动条
    })
  },
  watch: {
    mwidth(newVal){
      // console.log('watch')
      clearTimeout(this.timer)
      this.timer = setTimeout(()=>{
        // console.log('执行')
        this.auto(newVal)
      },300)
    }
  },
  methods: {
    auto(mwidth){
      if(mwidth <= 1200){
        this.lspan = 16
        this.mspan = 0
        this.rspan = 8
      }else{
        this.lspan = 14
        this.mspan = 4
        this.rspan = 6
      }
    }
  },
}
</script>

<style lang="stylus" scoped>
  .right-banner
    float left
    margin-left 10px
    margin-top 10px
    position relative
    width 950px
    a
      div
        display inline-block
        font-size 0
    .home-header-links
      width 640px
      position absolute
      top -45px
      left 20px
      a
        color #222
        font-weight 700
        font-size 16px
        cursor pointer
      .waimai-link:hover,.homestay-link:hover,.merchant-link:hover
        color #fbc700
      .maoyan-link:hover,.hotel-link:hover,.gongyi-link:hover
        color #ed1e24
    .slider-img-div
      width 100%
      height 100%
      display inline-block
      background-repeat no-repeat
      background-position 50%
      background-size cover
    .mlr10
      margin 0 10px
    .mt10
      margin-top 10px
    .df-jsb-ac
      .link
        flex 1
        &:first-child
          margin-right 10px
    .pic-1,.pic-2,.pic-3,.pic-4
      background-size cover
      background-position 50%
      background-repeat no-repeat
    .pic-1
      width 100%
      height 100%
    .pic-2,.pic-3,.pic-4
      width 100%
      height 165px
    
    .download-app
      height 100%
      background-color #fff
      overflow hidden
      .qrcode-box
        margin 10px auto 0 auto
        img
          width 95px
          height 95%
      .app-name
        font-size 16px
        color #222222
        font-weight 500
      .sl
        font-weight 500
        font-size 12px
        margin-top 5px
        .red
          color #EC5330
          margin-right 5px
        .gary
          color #3f3f3f
    @media screen and (max-width 1200px)
      .banner-slider
        margin-right 10px
      .mlr10
        display none
      .df-jsb-ac
        margin-right 10px
      .pic-2,.pic-3
        background-position 0 0
@media screen and (max-width 1200px)
  .right-banner
    width 710px 
</style>