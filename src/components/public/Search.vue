<template>
  <div class="Search">
    <div class="header-search-block">
      <input 
        type="text" 
        class="header-search-input" 
        placeholder="搜索商家或地点" 
        @blur="focus = false"
        @focus="focus = true"
        v-model="searchVal"/>
      <button class="el-button el-button--primary">
        <i class="header-icon icon-search-new" />
      </button>
    </div>
    <div class="header-search-suggest" v-show="focus">
      <div class="header-search-noinput" v-show="!searchVal">
        <h6>热门搜索</h6>
        <div class="header-search-hotword">
          <a href="https://www.meituan.com/s/%E8%80%81%E4%B8%89%E6%A0%B7">老三样</a>
          <a href="https://www.meituan.com/s/%E6%96%B9%E7%B3%96KTV">方糖KTV</a>
          <a
            href="https://www.meituan.com/s/%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%8E%AF%E7%90%83%E6%B5%B7%E9%B2%9C%E5%A7%BF%E9%80%A0"
          >亚马逊环球海鲜姿造</a>
          <a href="https://www.meituan.com/s/%E5%A5%88%E9%9B%AA%E3%81%AE%E8%8C%B6">奈雪の茶</a>
          <a href="https://www.meituan.com/s/%E6%BB%95%E7%8E%8B%E9%98%81">滕王阁</a>
          <a
            href="https://www.meituan.com/s/%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%8E%AF%E7%90%83%E7%BE%8E%E9%A3%9F%E7%99%BE%E6%B1%87"
          >亚马逊环球美食百汇</a>
          <a
            href="https://www.meituan.com/s/%E5%8D%97%E6%98%8C%E4%B9%8B%E6%98%9F%E6%B8%B8%E4%B9%90%E5%9C%BA"
          >南昌之星游乐场</a>
          <a
            href="https://www.meituan.com/s/%E9%87%91%E6%BB%8F%E5%B1%B1%E6%B5%B7%E9%B2%9C%E7%83%A4%E8%82%89%E8%87%AA%E5%8A%A9%E7%81%AB%E9%94%85"
          >金滏山海鲜烤肉自助火锅</a>
        </div>
      </div>
      <div class="header-search-hasinput" v-show="suggestItems">
        <ul>
          <li v-for="(item,index) in suggestItems" :key="index">
            <router-link :to="item.url">{{item.editorWord}}</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div class="header-search-hotword">
      <a href="https://www.meituan.com/s/%E8%80%81%E4%B8%89%E6%A0%B7">老三样</a>
      <a href="https://www.meituan.com/s/%E6%96%B9%E7%B3%96KTV">方糖KTV</a>
      <a
        href="https://www.meituan.com/s/%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%8E%AF%E7%90%83%E6%B5%B7%E9%B2%9C%E5%A7%BF%E9%80%A0"
      >亚马逊环球海鲜姿造</a>
      <a href="https://www.meituan.com/s/%E5%A5%88%E9%9B%AA%E3%81%AE%E8%8C%B6">奈雪の茶</a>
      <a href="https://www.meituan.com/s/%E6%BB%95%E7%8E%8B%E9%98%81">滕王阁</a>
      <a
        href="https://www.meituan.com/s/%E4%BA%9A%E9%A9%AC%E9%80%8A%E7%8E%AF%E7%90%83%E7%BE%8E%E9%A3%9F%E7%99%BE%E6%B1%87"
      >亚马逊环球美食百汇</a>
      <a
        href="https://www.meituan.com/s/%E5%8D%97%E6%98%8C%E4%B9%8B%E6%98%9F%E6%B8%B8%E4%B9%90%E5%9C%BA"
      >南昌之星游乐场</a>
      <a
        href="https://www.meituan.com/s/%E9%87%91%E6%BB%8F%E5%B1%B1%E6%B5%B7%E9%B2%9C%E7%83%A4%E8%82%89%E8%87%AA%E5%8A%A9%E7%81%AB%E9%94%85"
      >金滏山海鲜烤肉自助火锅</a>
    </div>
  </div>
</template>

<script>
import api from '@/api/public'

export default {
  data() {
    return {
      searchVal:'',
      suggestItems:null,
      focus:false
    }
  },
  watch: {
    searchVal(newVal,oldVal){
      if(newVal === ''){
        this.suggestItems = null
      }
      clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.suggest(newVal)
      },100)
    }
  },
  methods: {
    suggest(keyword) {
      api.suggest({keyword})
        .then(res => {
          if(res.code === 0) {
            // console.log(res)
            this.suggestItems = res.data.suggestItems.map(item => {
              item.url = `/s/${item.query}`
              return item
            })
          }
        })
    }
  },
}
</script>

<style lang="stylus" scoped>
.Search 
  position relative

  .header-search-block 
    white-space nowrap
    font-size 0
    height 40px

    .header-search-input 
      outline none
      border 1px solid #e5e5e5
      border-right none
      border-radius 4px 0 0 4px
      padding 15px
      height 100%
      font-size 14px
      background-color transparent
      width 86%
      box-sizing border-box
      vertical-align top
    
    .el-button--primary 
      background-color #FFC300
      border-top-left-radius 0
      border-bottom-left-radius 0
      border none
      color #222222
      width 14%
      height 100%

      i 
        font-weight bold
        font-size 18px

  .header-search-suggest 
    width 86%
    box-sizing border-box
    border 1px solid #e5e5e5
    border-top none
    position absolute
    z-index 999
    background-color #fff
    box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
    border-bottom-left-radius 4px
    border-bottom-right-radius 4px
    color #999999
    font-size 12px
    text-align left
    .header-search-noinput 
      display block
      padding 10px

      h6 
        margin 0
        padding-bottom 5px
        font-size 1em
      
      .header-search-hotword 
        width auto
        padding-top 8px
        margin-bottom 5px
        padding-left 0
        a 
          color #666
          &:hover
            color #FE8C00
        
  .header-search-hasinput
    display block  
    a
      padding 3px 10px
      color #333333
      &:hover
        background-color #F8F8F8
        color #FF8C00
  .header-search-hotword 
    padding-top 8px
    padding-left 12px
    box-sizing border-box
    font-size 12px
    overflow hidden
    height 25px
    text-align left

    a 
      color #999999
      margin-right 10px
      margin-bottom 4px
      display inline-block
      &:hover
        color #FE8C00
    
  ul
    a
      line-height 1.6
      display block

</style>