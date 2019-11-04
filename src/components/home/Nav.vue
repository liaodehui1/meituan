<template>
  <nav class="bottom-nav">
    <div class="title">美团导航</div>
    <dl class="b-n-content">
      <div class="b-n-classification" v-for="(classification,i) in classifications" :key="i">
        <dt class="b-n-subtitle">{{classification.theme}}</dt>
        <div class="b-n-sublist">
          <dd class="b-n-list-item" v-for="(item,j) in classification.itemList" :key="j">
            <router-link :to="item.link" class="ellipsis">
              {{item.title}}<span class="nav-promotion" v-if="`${i}-${j}` === hot">HOT</span>
            </router-link>
          </dd>
        </div>
      </div>
    </dl>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      classifications:[
        {
          theme:'热门城市',
          itemList:[ 
            { link: '/', title: '合肥' },
            { link: '/', title: '昆明' },
            { link: '/', title: '哈尔滨' },
            { link: '/', title: '深圳' },
            { link: '/', title: '沈阳' },
            { link: '/', title: '宁波' },
            { link: '/', title: '太原' },
            { link: '/', title: '佛山' },
            { link: '/', title: '天津' },
            { link: '/', title: '武汉' },
            { link: '/', title: '成都' },
            { link: '/', title: '长春' },
            { link: '/', title: '广州' },
            { link: '/', title: '苏州' },
            { link: '/', title: '无锡' },
            { link: '/', title: '大连' },
            { link: '/', title: '杭州' },
            { link: '/', title: '北京' },
            { link: '/', title: '温州' },
            { link: '/', title: '石家庄' }]
        },
        {
          theme:'热门分类',
          itemList:[ 
            { link: '/', title: '酒店' },
            { link: '/', title: '美食' },
            { link: '/', title: '休闲娱乐' },
            { link: '/', title: '运动健身' },
            { link: '/', title: '生活服务' },
            { link: '/', title: '上门服务' },
            { link: '/', title: '购物' },
            { link: '/', title: '时尚购' },
            { link: '/', title: '本地购物' },
            { link: '/', title: '结婚' },
            { link: '/', title: '摄影写真' },
            { link: '/', title: '宴会' },
            { link: '/', title: '丽人' },
            { link: '/', title: '母婴亲子' },
            { link: '/', title: '学习培训' },
            { link: '/', title: '家装' },
            { link: '/', title: '汽车服务' },
            { link: '/', title: '医疗' },
            { link: '/', title: '宠物' } ]
        },
        {
          theme:'周边热门',
          itemList:[ 
            { link: '/', title: '丰城酒店' },
            { link: '/', title: '丰城美食' },
            { link: '/', title: '共青城休闲娱乐' },
            { link: '/', title: '丰城运动健身' },
            { link: '/', title: '奉新生活服务' },
            { link: '/', title: '丰城上门服务' },
            { link: '/', title: '共青城购物' },
            { link: '/', title: '奉新时尚购' },
            { link: '/', title: '丰城本地购物' },
            { link: '/', title: '共青城结婚' },
            { link: '/', title: '奉新摄影写真' },
            { link: '/', title: '奉新宴会' },
            { link: '/', title: '共青城丽人' },
            { link: '/', title: '丰城母婴亲子' },
            { link: '/', title: '共青城学习培训' },
            { link: '/', title: '共青城家装' },
            { link: '/', title: '共青城汽车服务' },
            { link: '/', title: '共青城医疗' },
            { link: '/', title: '丰城宠物' } ]
        }
      ],
      hot:'1-0'
    }
  },
};
</script>

<style lang="stylus" scoped>
  .bottom-nav
    margin 40px auto 0px
    width 1190px
    border-radius 4px
    background-color #fff
    .title
      height 44px
      font-size 16px
      font-weight 500
      color #222
      text-align left
      padding-left 20px
      padding-top 6px
      line-height 44px
      border-top-left-radius 4px
      border-top-right-radius 4px
    .b-n-content
      .b-n-classification
        overflow hidden
        .b-n-subtitle
          width 100px
          padding 10px 0
          height 100%
          float left
          font-size 14px
          font-weight 500
          text-align center
        .b-n-sublist
          width 1090px
          padding-top 12px
          float left
          border-bottom 1px solid #e5e5e5
          overflow hidden
          .b-n-list-item
            width 100px
            height 17px
            font-size 12px
            text-align left
            margin-bottom 12px
            float left
            a
              display block
              width 80px
              cursor pointer
              color #666666
              .nav-promotion
                font-size 12px
                color #ffffff
                background-color #ff4848
                border-radius 10px
                padding 0 6px
                margin 0 5px
                position relative
                top -1px
  @media screen and (max-width 1200px)
    .bottom-nav
      width 950px
      .b-n-content
        .b-n-classification 
          .b-n-sublist
            width 840px
</style>