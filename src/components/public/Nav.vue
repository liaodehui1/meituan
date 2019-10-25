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
        商家中心
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
        美团规则
        <dl class="header-nav-my header-nav-second">
          <dd>
            <router-link to>规则中心</router-link>
          </dd>
          <dd>
            <router-link to>规则目录</router-link>
          </dd>
          <dd>
            <router-link to>规则评议院</router-link>
          </dd>
        </dl>
      </li>
      <li class="has-child">
        网站导航
        <div class="header-nav-site header-nav-second">
          <dl class="header-jiulv header-nav-third">
            <dt>酒店旅游</dt>
            <dd>
              <router-link to="https//www.meituan.com/iflight/">国际机票</router-link>
            </dd>
            <dd>
              <router-link to="https//www.meituan.com/train/">火车票</router-link>
            </dd>
            <dd>
              <router-link to="https//phoenix.meituan.com/">榛果民宿</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20036/">经济型酒店</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20037/">主题酒店</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20038/">商务酒店</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20039/">公寓</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20040/">豪华酒店</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20041/">客栈</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20042/">青年旅社</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20043/">度假酒店</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20044/">别墅</router-link>
            </dd>
            <dd>
              <router-link to="https//hotel.meituan.com/nanchang/c20045/">农家院</router-link>
            </dd>
          </dl>
          <dl class="header-meishi header-nav-third">
            <dt>吃美食</dt>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c20004/" >烤鱼</router-link>
            </dd>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c36/" >特色小吃</router-link>
            </dd>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c54/" >烧烤</router-link>
            </dd>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c40/" >自助餐</router-link>
            </dd>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c17/" >火锅</router-link>
            </dd>
            <dd>
              <router-link to="https//nc.meituan.com/meishi/c393/" >代金券</router-link>
            </dd>
          </dl>
          <dl class="header-movie header-nav-third">
            <dt>看电影</dt>
            <dd>
              <router-link to="https//maoyan.com/films" >热映电影</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/cinemas" >热门影院</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/board" >热映电影口碑榜</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/board/6" >最受期待电影</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/board/1" >国内票房榜</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/board/2" >北美票房榜</router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/board/4" >电影排行榜</router-link>
            </dd>
          </dl>
          <dl class="header-app header-nav-third">
            <dt>手机应用</dt>
            <dd>
              <router-link to="https//i.meituan.com/mobile/down/meituan" >
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/2d53095/img/appicons/meituan.png"
                  title="美团app"
                  alt="美团app"
                />
              </router-link>
            </dd>
            <dd>
              <router-link to="https//waimai.meituan.com/mobile/download/default" >
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png"
                  title="外卖app"
                  alt="外卖app"
                />
              </router-link>
            </dd>
            <dd>
              <router-link to="https//phoenix.meituan.com/app/" >
                <img
                  class="appicon"
                  src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png"
                  title="榛果app"
                  alt="榛果app"
                />
              </router-link>
            </dd>
            <dd>
              <router-link to="https//www.dianping.com/events/m/index.htm" >
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png"
                  title="点评app"
                  alt="点评app"
                />
              </router-link>
            </dd>
            <dd>
              <router-link to="https//maoyan.com/app" >
                <img
                  class="appicon"
                  src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png"
                  title="猫眼app"
                  alt="猫眼app"
                />
              </router-link>
            </dd>
          </dl>
        </div>
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
    box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
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
      box-shadow 0 3px 5px 0 rgba(0, 0, 0, 0.1)
      border-bottom-left-radius 4px
      border-bottom-right-radius 4px
    .header-nav-third
      float left
      margin-right 47px
      
      dt
        margin-bottom 26px
        font-size 14px
        color #222222
        font-weight 500

    .header-nav-merchant 
      width 140%
      border-top-left-radius 4px

    .header-nav-my 
      width 100%
    

    .header-nav-site 
      width 1200px
      box-sizing border-box
      padding 30px 36px 36px 47px
      border-top-left-radius 4px

      .header-jiulv
        width 234px
        dd
          width 33%
          text-align center
          float left
      .header-meishi
        width 156px
        dd
          width 50%
          text-align center
          float left
      .header-movie
        width 90px
      .header-app
        float right
        dd
          display inline-block
          margin 0 8px
          a
            display block
            padding 5px 0
          .appicon
            width 60px
            height 60px
            border 0
    @media screen and (max-width 1200px)
      .header-nav-site
        width 960px
        .header-app
          width 250px
          margin-right 0
</style>