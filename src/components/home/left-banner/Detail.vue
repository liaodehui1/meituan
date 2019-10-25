<template>
  <div class="category-nav-detail" 
    :class="active">
    <div class="detail-area" v-for="(item,index) in desc" :key="index">
      <div class="detail-title-wrapper">
        <h2>
          <router-link :to="item.link" class="link detail-title">{{item.title}}</router-link>
        </h2>
        <router-link :to="item.link" class="link detail-more">
          更多
          <i class="detail-right-arrow"></i>
        </router-link>
      </div>
      <div class="detail-content" v-for="(lab,index) in item.content" :key="index">
        <router-link :to="item.link" class="link detail-text">{{lab}}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['desc','index','current'],
  computed: {
    active(){
      // && (current === -2 || current !== -1)
      return this.current === this.index ? 'active' : ''
    }
  },
};
</script>

<style lang="stylus" scoped>
  .category-nav-detail
    display none
    &.active
      display block
    .detail-area
      padding 0 30px
      .detail-title-wrapper
        margin-top 24px
        height 22px
        line-height 22px
        padding-bottom 10px
        border-bottom 1px solid #e5e5e5
        .detail-title
          font-size 16px
          font-weight 500
          color #222
          cursor pointer
          float left
        .detail-more
          font-size 12px
          color #999
          font-weight 400
          float right
          margin-right 6px
          position relative
          cursor pointer
        .detail-right-arrow
          width 4px
          height 4px
          border-bottom 1px solid #999
          border-right 1px solid #999
          transform rotate(-45deg)
          display block
          position absolute
          top 0
          bottom 0
          right -6px
          margin auto
      .detail-content
        display inline-block
        .detail-text
          color #999
          font-size 12px
          line-height 15px
          display inline-block
          margin-right 16px
          margin-top 10px
          cursor pointer
          &:hover
            color #FE8C00  
</style>