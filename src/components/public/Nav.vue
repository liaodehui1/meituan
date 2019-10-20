<template>
  <div class="header-bar-nav">
    <ul class="header-nav-first df-jsc-ac">
      <li class="has-child">
        <router-link to="/userinfo">我的美团</router-link>
        <dl class="header-nav-my header-nav-second">
          <dd>
            <router-link to="/userinfo">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">抵用卷</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link to="/userinfo">手机APP</router-link>
      </li>
      <li class="has-child">
        <router-link to="/userinfo">商家中心</router-link>
        <dl class="header-nav-merchant header-nav-second">
          <dd>
            <router-link to="/userinfo">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/userinfo">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li class="has-child">
        <router-link to="/userinfo">美团规则</router-link>
      </li>
      <li class="has-child">
        <router-link to="/userinfo">网站导航</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="stylus" scoped>
  .header-nav-first
    height 40px
    .has-child:hover
      color #fe8c00
      background-color #fff
      border-color #e5e5e5
      box-shadow 0 3px 5px 0 rgba(0,0,0,.1)
      .header-nav-second
        display block
    li
      flex 1
      line-height 40px
      text-align center
      position relative
      .header-nav-second
        display none
        position absolute
        top 95%
        right 0
        background-color #fff
        z-index 1000
        box-shadow 0 3px 5px 0 rgba(0,0,0,.1)
      .header-nav-merchant
        width 140%
      .header-nav-my
        width 100%
</style>