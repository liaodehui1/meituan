<template>
  <div class="login-container">
    <div class="default" v-if="!user">
      <div class="head-img-row"><img :src="defaultImg" alt=""></div>
      <p class="user-name">Hi！你好</p>
      <router-link to="/register" class="btn-login">注册</router-link>
      <router-link to="/login" class="btn-login">立即登录</router-link>
    </div>
    <div class="default" v-else>
      <div class="setting">
        <router-link to="/userinfo/settings">
          <div class="icon">
            <i class="iconfont icon-setting_iconx"></i>
          </div>
        </router-link>
      </div>
      <div class="head-img-row link" @click="enter"><img :src="user.avatarUrl" alt=""></div>
      <div class="nickname-row">
        <p class="user-name link" @click="enter">{{user.username}}</p>
      </div>
      <div class="fn-row">
        <div class="fn-item" v-for="(item,index) in itemList" :key="index">
          <router-link :to="item.link">
            <div class="icon"><i class="iconfont" :class="item.iconClass"></i></div>
            <p class="fn-name">{{item.title}}</p>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      defaultImg:require('@/assets/images/avatar.jpg'),
      itemList:[
        {
          link:'/orders',
          iconClass:'icon-order_iconx',
          title:'我的订单'
        },
        {
          link:'/collections',
          iconClass:'icon-collection_iconx',
          title:'我的收藏'
        },
        {
          link:'/vouchers',
          iconClass:'icon-ticket_iconx',
          title:'抵用卷'
        },
        {
          link:'/account/userinfo',
          iconClass:'icon-money_iconx',
          title:'余额'
        },
        {
          link:'/account/userinfo',
          iconClass:'icon-more_iconx',
          title:'更多'
        },
      ]
    }
  },
  computed: {
    ...mapState({
      user:state => state.user.userinfo
    })
  },
  methods: {
    enter(){
      this.$router.push('/account/userinfo')
    }
  },
}
</script>

<style lang="stylus" scoped>
  .login-container
    background-color #fff
    border 1px solid #e5e5e5
    height 100%
    .default
      padding-top 30px
      position relative
      .head-img-row
        margin-bottom 4px
        img
          width 47px
          height 47px
          border-radius 50%
          border 4px solid #e5e5e5
      .user-name
        font-size 16px
        color #222222
        font-weight 500
        white-space nowrap
        text-overflow ellipsis
        overflow hidden
        text-align center
        margin 0 auto
        width 6em
      .btn-login
        width 118px
        text-align center
        margin 10px auto 15px auto
        background-color #fff
        border 1px solid #e5e5e5
        border-radius 40px
        font-size 14px
        color #333
        transition background-color .5s
        display block
        line-height 38px
        &:hover
          background-color #f6f6f6
      .setting
        position absolute
        top 5%
        right 5px
        .icon
          margin-right 5px
          .iconfont
            color #666666
      .link
        cursor pointer
      .nickname-row
        height 30px
      .fn-row
        padding 0 15px
        text-align left
        .fn-item
          width calc(100% / 3)
          display inline-block
          text-align center
          .iconfont
            font-size 20px
          .fn-name
            margin 5px 0
            font-size 12px
            color #222222
</style>