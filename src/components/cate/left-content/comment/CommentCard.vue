<template>
  <div class="comment-card">
    <div class="user-photo">
      <img :src="avatarUrl" class="image" />
    </div>
    <div class="content">
      <div class="comment-des">
        <div class="user-info">
          <span class="user-name">{{comment.userName}}</span>
          <img v-if="comment.userLevel" :src="levelUrl" class="user-level" />
        </div>
        <div class="deal-name">
          <router-link :to="`/deal/${comment.did}`">{{comment.menu}}</router-link>
        </div>
        <div class="comment-info">
          <rate-star :score="score"></rate-star>
          <router-link :to="`/feedback/f${comment.reviewId}`" 
            class="comment-date">
            {{commentTime}}
          </router-link>
        </div>
        <router-link :to="`/feedback/f${comment.reviewId}`" 
          class="high-quality"
          v-if="comment.quality">
          
        </router-link>
      </div>
      <div class="comment-detail">
        <div class="user-comment">
          <div>
            {{!showTotalComment ? detail : ''}}
            <span v-if="showTotalComment">{{detail}}</span>
            <span v-if="!showTotalComment && totalWords > maxWords" 
                class="read-btn" @click="readMore">
                阅读全文
            </span>
          </div>
        </div>
        <comment-photo :picUrls="comment.picUrls"></comment-photo>
      </div>
    </div>
  </div>
</template>

<script>
import RateStar from "../../../public/RateStar"
import CommentPhoto from '../../../public/CommentPhoto'
import util from '@/assets/util/poi.js'

export default {
  data() {
    return {
      words:110,
      maxWords:118,
      showTotalComment:false
    }
  },
  props: ['comment'],
  computed: {
    avatarUrl() {
      if(this.comment.anonymous){
        return this.comment.userUrl
      }else if(this.comment.userUrl) {
        return this.comment.userUrl + '@75w_75h_1e_1c'
      }else {
        return 'https://p1.meituan.net/mmc/35ad1f9253761ea6ff822b5e659f234f3758.png@75w_75h_1e_1c'
      }
    },
    levelUrl() {
      return require(`@/assets/images/level_${this.comment.userLevel}.svg`)
    },
    score() {
      return this.comment.star / 10;
    },
    commentTime() {
      return util.formatTime(parseInt(this.comment.commentTime))
    },
    totalWords() {
      return this.comment.comment.length
    },
    detail() {
      return !this.showTotalComment && this.totalWords > this.maxWords 
        ? this.comment.comment.substring(0,this.words).concat('...')
        : this.comment.comment
    }
  },
  components: {
    "rate-star": RateStar,
    'comment-photo':CommentPhoto
  },
  methods: {
    readMore() {
      this.showTotalComment = true
    }
  },
};
</script>

<style lang="stylus" scoped>
  .comment-card
    width 100%
    height auto
    overflow hidden
    display flex
    .user-photo
      flex 0 0 60px
      margin-right 20px
      .image
        width 60px
        height 60px
        border-radius 50%
    .content
      flex 1
      min-width 0
      .comment-des
        height 60px
        position relative
        .user-info
          height 22px
          .user-name
            font-size 16px
            color #222
            vertical-align middle
          .user-level
            width 16px
            height 16px
            margin-left 10px
            vertical-align middle
        .deal-name
          height 20px
          font-size 12px
          line-height 20px
          a
            color #666
        .comment-info
          width 100%
          height 16px
          overflow hidden
          line-height 16px
          & >>> .rate-stars
            margin-top -8px
            margin-left -2.5px
          .comment-date
            width auto
            height 17px
            font-size 12px
            color #999
            float right
        .high-quality
          width auto
          height auto
          position absolute
          top 0
          right 0
          font-family 'high-quality'
          font-size 80px
          color rgba(255,102,0,0.7)
      .comment-detail
        height auto
        margin-top 13px
        .user-comment
          width 100%
          font-size 14px
          color #666
          line-height 20px
          overflow hidden
          text-overflow ellipsis
          margin-bottom 12px
          .read-btn
            color #FE8C00
            cursor pointer
</style>