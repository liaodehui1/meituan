<template>
  <footer class="com-footer">
    <div class="footer-content">
      <div class="footer-link">
        <div class="footer-column" v-for="(column,i) in columns" :key="i">
          <dl v-for="(dl,j) in column" :key="j">
            <dt v-if="!(i === 4 && j === 3)">{{dl.dt}}</dt>
            <dt v-else>
              <a :href="dl.link">{{dl.dt}}</a>
            </dt>
            <dd v-for="(dd,k) in dl.dds" :key="k">
              {{dd.title.substring(0,dd.title.indexOf('：')+1)}}
              <a
                :href="dd.link"
              >{{dd.title.substring(dd.title.indexOf('：')+1)}}</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="footer-copyright clearfix">
        <div class="footer-copyright-left">
          <p>
            ©美团网团购 meituan.com
            <a href="http://www.beian.miit.gov.cn/" style="margin-left: 20px;">京ICP证070791号</a>
            <a
              href="http://www.beianbeian.com/beianxinxi/b00ef42627c62ae577c8e4a086b322a0.html"
            >京ICP备10211739号</a>
          </p>
          <p>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/tv"
              target="_blank"
            >广播电视节目制作经营许可证（京）字第03889号</a>
          </p>
          <p>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/foodlicense"
              target="_blank"
            >食品经营许可证</a>
            <a
              href="https://portal-portm.meituan.com/webpc/protocolmanage/medicalcertificate"
              target="_blank"
            >互联网药品信息服务资格证</a>
          </p>
          <p>
            <a
              href="http://portal-portm.meituan.com/webpc/protocolmanage/medicalapparatus"
              target="_blank"
            >医疗器械网络交易服务第三方平台备案：（京）网械平台备字[2018]第00004号</a>
          </p>
        </div>
        <div class="footer-copyright-right">
          <a
            href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010502025545"
            target="_blank"
          >京公网安备11010502025545号</a>
          <div class="footer-copyright-cert">
            <a
              class="bus-license"
              href="https://zzlz.gsxt.gov.cn/businessCheck/verifKey.do?showType=p&amp;serial=11000020190617184241000003572274-SAIC_SHOW_10002020190618102726868&amp;signData=MEQCIMo7nivRikGQc6WsX/jx0IcZ46irhkjszdhhg4kv17uBAiD78duadRu3XX5WyuE+duSrhPmdVUFgr7cN1iV/WSv4uw=="
              title="营业执照"
              target="_blank"
            >
              <img
                src="https://p1.meituan.net/travelcube/3e7f8a17e55bace814166b667618b459366061.png@76h_76w_2e"
              />
              <p>北京三快科技有限公司</p>
            </a>
            <a
              class="sp-ft sp-ft--record"
              href="https://portal-portm.meituan.com/webpc/protocolmanage/comment/license/sankuai"
              title="备案信息"
              target="_blank"
            >备案信息</a>
            <a
              class="sp-ft sp-ft--knet"
              href="http://t.knet.cn/index_new.jsp"
              title="可信网站认证"
              target="_blank"
            >可信网站</a>
            <a
              class="sp-ft sp-ft--12315"
              href="http://www.bj315.org/xfwq/lstd/201209/t20120910_3344.shtml?dnrpluojqxbceiqq"
              title="12315消费争议"
              target="_blank"
            >12315消费争议</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        [
          {
            dt: "用户帮助",
            dds: [
              {
                link: "http://www.meituan.com/help/selfservice",
                title: "申请退款"
              },
              {
                link: "http://www.meituan.com/help/selfservice?tab=2",
                title: "查看美团券密码"
              },
              { link: "http://www.meituan.com/help/faq", title: "常见问题" },
              {
                link: "https://rules-center.meituan.com/rules-detail/4",
                title: "用户协议"
              },
              {
                link: "https://rules-center.meituan.com/rules-detail/2",
                title: "隐私政策"
              },
              {
                link: "http://www.meituan.com/about/anticheat",
                title: "反诈骗公告"
              },
              {
                link: "https://rules-center.meituan.com/customer-rights",
                title: "消费者权益保障"
              }
            ]
          },
          {
            dt: "美团服务",
            dds: [
              { link: "http://waimai.meituan.com/", title: "美团外卖" },
              { link: "http://hotel.meituan.com/", title: "美团酒店" },
              { link: "http://maoyan.com/", title: "猫眼电影" },
              { link: "https://peisong.meituan.com/", title: "美团配送" },
              { link: "https://www.mtyun.com/", title: "美团云" },
              { link: "http://www.dianping.com/", title: "大众点评" },
              { link: "https://phoenix.meituan.com/", title: "榛果民宿" },
              { link: "https://mad.meituan.com", title: "无人配送" }
            ]
          }
        ],
        [
          {
            dt: "商家合作",
            dds: [
              {
                link:
                  "https://ecom.meituan.com/bizsettle/settle?utm_source=mt_C_my",
                title: "美食商家入驻(非外卖)"
              },
              { link: "https://kd.meituan.com/", title: "美团外卖开店申请" },
              {
                link:
                  "http://shouyin.meituan.com?utm_source=inner&utm_medium=mtpc",
                title: "美团收银官网"
              },
              {
                link: "http://page.peisong.meituan.com/apply/join",
                title: "外卖配送加盟申请"
              },
              {
                link: "https://xue.meituan.com/?from=mtpc",
                title: "美团点评餐饮学院"
              },
              {
                link: "https://ruzhu.meituan.com/settle/pc/epassport.html",
                title: "酒店商家入驻"
              },
              {
                link: "https://ruzhu.meituan.com/settle/trip/pc.html",
                title: "境内度假商家入驻"
              },
              {
                link: "https://e.dianping.com/claimcpc/page/index?source=mt",
                title: "综合商家入驻"
              },
              {
                link: "https://phoenix.meituan.com/about/",
                title: "榛果民宿房东商家入驻"
              },
              {
                link: "http://pc.meituan.com/?activity_code=mtpcdb",
                title: "商家开票申请"
              },
              {
                link:
                  "https://h5.youzan.com/v2/feature/nALm22bkFF?dc_ps=2039811416638097413.200001",
                title: "美团点评智能收银机"
              },
              {
                link: "https://developer.meituan.com/?from=mtpcsw",
                title: "美团点评餐饮开放平台"
              },
              {
                link: "https://recommend-zc.meituan.com/opportunity?channel=1",
                title: "美团点评收单"
              },
              {
                link: "https://paidui.meituan.com/?activity_code=167_00038050",
                title: "免费使用美团排队"
              },
              {
                link:
                  "https://i.meituan.com/awp/hfe/block/6c4bec785dce/11188/index.html",
                title: "快驴进货商家合作"
              },
              {
                link: "https://shangou.meituan.com/joinin",
                title: "美团闪购商家入驻"
              }
            ]
          }
        ],
        [
          {
            dt: "代理商加盟",
            dds: [
              {
                link: "https://mfe.waimai.meituan.com/mfepro/client-h5/#/login",
                title: "美团外卖代理商招募"
              },
              {
                link: "https://daili.meituan.com/?comeFrom=mtwebBusinesscoopd",
                title: "到店餐饮代理商招募"
              },
              {
                link: "http://www.dianping.com/apollo/agent/index?source=mtpcd",
                title: "非餐饮代理商招募"
              },
              { link: "http://union.meituan.com/", title: "美团联盟" },
              {
                link: "https://store.meituan.com/distribution/broadcast",
                title: "美团收银招募线上分销商"
              },
              {
                link: "https://agent.meituan.com/zhaoshang?entry=5",
                title: "美团点评5S服务商招募"
              },
              {
                link: "https://zf.meituan.com?partnerSource=3",
                title: "美团收单渠道代理商招募"
              }
            ]
          },
          {
            dt: "美团规则",
            dds: [
              { link: "https://rules-center.meituan.com/", title: "规则中心" },
              {
                link: "https://rules-center.meituan.com/rules",
                title: "规则目录"
              },
              {
                link: "https://rules-center.meituan.com/advices",
                title: "规则评议院"
              }
            ]
          }
        ],
        [
          {
            dt: "关注美团",
            dds: [{ link: "http://weibo.com/meituan", title: "美团新浪微博" }]
          },
          {
            dt: "公司信息",
            dds: [
              { link: "https://about.meituan.com/", title: "关于我们" },
              {
                link: "https://about.meituan.com/investor.html",
                title: "投资者关系"
              },
              { link: "http://zhaopin.meituan.com/", title: "加入我们" },
              {
                link:
                  "https://dpapp-appeal.meituan.com/#/shopCreditRegulationPC",
                title: "商户诚信公约及管理办法"
              },
              {
                link:
                  "https://i.meituan.com/awp/ffe/insurance-website/index.html#/",
                title: "保险经纪资质"
              }
            ]
          },
          {
            dt: "廉正举报",
            dds: [{ link: "mailto:lianzheng@meituan.com", title: "廉政邮箱" }]
          }
        ],
        [
          {
            dt: "消费者服务热线",
            dds: [
              { link: "tel:10109777", title: "外卖消费者：10109777" },
              { link: "tel:10105335", title: "猫眼消费者：10105335" },
              { link: "tel:10107888", title: "其他消费者：10107888" }
            ]
          },
          {
            dt: "商家服务热线",
            dds: [
              { link: "tel:10105557", title: "外卖&餐饮商家：10105557" },
              {
                link: "tel:10100107",
                title:
                  "休闲娱乐、丽人、ktv、教育、结婚、亲子、家装等商家：10100107"
              }
            ]
          },
          {
            dt: "投诉举报热线",
            dds: [
              {
                link: "tel:4006018900",
                title: "违法和不良信息举报电话：4006018900"
              },
              {
                link: "mailto:tousujubao@meituan.com",
                title: "举报邮箱：tousujubao@meituan.com"
              }
            ]
          },
          {
            link: "https://ecom.meituan.com/bizsettle/settle/merchantsSettle",
            dt: "商家自助入驻美团入口",
            dds: []
          }
        ]
      ]
    };
  }
};
</script>

<style lang="stylus" scoped>
  .com-footer 
    background-color #f8f8f8
    margin-top 40px
    .footer-content 
      width 1190px
      margin 0 auto
      color #333333
      font-size 12px
      line-height 2
      box-sizing border-box
      text-align left
      .footer-link 
        padding 40px 45px
        border-top 1px solid #e5e5e5
        border-bottom 1px solid #e5e5e5
        display flex
        .footer-column 
          flex 1
          dl 
            padding-top 20px
            color #666
            dt 
              color #333
              font-size 14px
              font-weight 500
            a 
              color #666
              &:hover 
                color #fe8c00
      .footer-copyright
        color #999
        padding-left 20px
        padding-top 15px
        padding-bottom 30px
        line-height 1.6
        &-left
          float left
          a
            margin-right 20px
        a
          color #999
        &-right
          float right
          text-align right
          .footer-copyright-cert
            text-align left
            padding-top 6px
            font-size 0
            .bus-license
              img
                float left
                width 38px
                height 38px
              p
                float left
                line-height 38px
                padding 0 5px
                font-size 12px
            a.sp-ft
              display inline-block
              overflow hidden
              text-indent -1000px // 用图片带提文字
              height 38px
              background-image url(../../assets/images/footer.png)
              background-repeat no-repeat
              margin-right 2px
            .sp-ft--record
              width 109px
              background-position 0 -167px
            .sp-ft--knet
              width 107px
              background-position 0 -127px
            .sp-ft--12315
              width 107px
              background-position 0 -40px
    @media screen and (max-width 1200px) 
      .footer-content 
        width 960px
</style>