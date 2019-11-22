<template>
  <div class="comment">
    <div class="comment-title-bar df-jsb-ac">
      <span class="comment-count">网友评论</span>
      <div class="comment-sort">
        <span :class="sortType === 1 ? 'active' : ''"
          @click="getDataBySortType(1)">默认排序</span>
        <span :class="sortType === 0 ? 'active' : ''"
          @click="getDataBySortType(0)">时间排序</span>
      </div>
    </div>
    <div class="comment-box">
      <div class="labels-box">
        <tag v-for="(item,index) in tags"
          :key="index"
          :active="activeTagIndex === index"
          :tag="item.tag"
          :count="item.count"
          @click="getDataByTag"></tag>
      </div>
      <div class="comment-options">
        <comment-option :active="mode" 
          :text="`只看有图片的评论`"
          @click="getDataByMode"></comment-option>
        <comment-option :active="starRange" 
          :text="`只看低分`"
          @click="getDataByStarRange"></comment-option>
      </div>
      <div class="comment-main">
        <div class="comment-item" :key="index"
            v-for="(item,index) in comments">
          <comment-card :comment="item"></comment-card>
          <div class="user-operations">
            <div class="reply-btn">
              <span class="reply-icon"></span>
              <span class="reply-txt">回应({{item.replyCnt}})</span>
            </div>
            <div class="like-btn">
              <span class="op-icon"></span>
              <span class="op-txt">赞({{item.zanCnt}})</span>
            </div>
          </div>
          <div class="separator-line"></div>
        </div>
      </div>
      <nav class="mt-pagination">
        <el-pagination
          layout="prev, pager, next"
          background
          :page-count="pageCount"
          :pager-count="5"
          :current-page="currentPage"
          @current-change="currentChange">
        </el-pagination>
      </nav>
      <router-link :to="`/feedback/${this.id}/`" 
        class="link feedback-entry">
        查看全部评论({{total}})
      </router-link>
    </div>
  </div>
</template>

<script>
import Tag from '../../../public/Tag'
import CommentOption from '../../../public/CommentOption'
import CommentCard from './CommentCard'
import api from '@/api/public'

export default {
  data() {
    return {
      comments:[],
      tags:[],
      total:0,
      currentPage:1,
      pageSize:10,
      mode:0,
      sortType:1,
      starRange:'',
      userId:'',
      tag:'',
      activeTagIndex:0
    }
  },
  props:['id'],
  created() {
    this.getData()
  },
  computed: {
    pageCount() {
      return Math.ceil(this.total / this.pageSize)
    }
  },
  components:{
    'tag':Tag,
    'comment-option':CommentOption,
    'comment-card':CommentCard
  },
  methods: {
    getData() {
      let params = {
        id:this.id,
        offset:(this.currentPage - 1) * this.pageSize,
        pageSize:this.pageSize,
        mode:this.mode,
        sortType:this.sortType,
        starRange:this.starRange,
        userId:this.userId,
        tag:this.tag
      }
      api.getcomment(params)
        .then(res => {
          console.log(res)
          this.comments = res.comments
          this.total = res.total
          this.tags = [{count:res.total,tag:'全部'}].concat(res.tags)
        })
    },
    getDataBySortType(sortType) {
      this.currentPage = 1
      this.sortType = sortType
      this.$nextTick(() => {
        this.getData()
      })
    },
    getDataByTag(tag) {
      this.activeTagIndex = this.tags.findIndex(item => {
        return item.tag === tag
      })
      this.currentPage = 1
      this.tag = tag
      this.mode = 0
      this.starRange = ''
      this.$nextTick(() => {
        this.getData()
      })
    },
    getDataByMode() {
      this.activeTagIndex = -1
      this.currentPage = 1
      this.mode = 1
      this.starRange = ''
      this.tag = ''
      this.$nextTick(() => {
        this.getData()
      })
    },
    getDataByStarRange() {
      this.activeTagIndex = -1
      this.currentPage = 1
      this.mode = 0
      this.tag = ''
      this.starRange = '10,20'
      this.$nextTick(() => {
        this.getData()
      })
    },
    currentChange(currentPage) {
      // console.log(currentPage)
      this.currentPage = currentPage
      this.$nextTick(() => {
        this.getData()
      })
    }
  },
};
</script>

<style lang="stylus" scoped>
  .comment
    width 950px
    margin-top 34px
    .comment-title-bar
      height 26px
      padding 8px 0
      flex-flow row nowrap
      overflow hidden
      .comment-count
        width auto
        height 100%
        font-size 20px
        font-weight 500
        color #222222
        line-height 26px
      .comment-sort
        width 120px
        height 100%
        display inline-block
        overflow hidden
        span 
          font-size 12px
          color #999999
          cursor pointer
          padding-top 10px
          margin-right 10px
          &:last-child
            margin-right 0
        .active
          font-weight 500
          color #FE8C00
    .comment-box
      width 100%
      padding 15px 20px
      box-sizing border-box
      background-color #fff
      border 1px solid #e5e5e5
      border-radius 4px
      overflow hidden
      .comment-options
        margin 10px 0
        -webkit-tap-highlight-color transparent /*ios点击链接或自定以可点击元素会使背景变灰*/
      .comment-main
        margin-top 20px
        .comment-item
          padding-top 20px
          .user-operations
            margin-top 5px
            overflow hidden
            user-select none
            .reply-btn,.like-btn
              float right
              font-size 0
              color #666666
              height 24px
              line-height 24px
              cursor pointer
            .reply-btn
              margin-left 24px
              .reply-icon
                background-image url(../../../../assets/images/comment_icon.png)
            .like-btn
              .op-icon
                background-image url(../../../../assets/images/like_gray.png)
            .reply-icon,.op-icon
              width 24px
              height 24px
              vertical-align middle
              display inline-block
              background-repeat no-repeat
              background-size cover
            .reply-txt,.op-txt
              display inline-block
              vertical-align middle
              padding-top 4px
              line-height 20px
              font-size 12px
          .separator-line
            max-width 100%
            height 1px
            background-color #e5e5e5
            margin-left 80px
            margin-top 20px
      .mt-pagination
        text-align center
        margin 40px 0 25px
        /deep/ .el-pagination.is-background
          li,.btn-next,.btn-prev
            color #999
            min-width 40px
            min-height 40px
            border-radius 50%
            line-height 40px
            background-color #fff
            border 1px solid #e5e5e5
            font-size 16px
            font-weight normal
        /deep/ li:not(.disabled).active
          color #222
          background-color #FFD000
          border 1px solid #FFD000
        /deep/ .el-pager
          li.btn-quicknext,li.btn-quickprev
            border 0
      .feedback-entry
        font-size 14px
        color #666666
        float right
@media screen and (max-width 1200px)
  .comment
    width 700px
</style>