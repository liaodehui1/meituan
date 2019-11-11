<template>
  <div>
    <m-nav :nav="nav" :styl="styl" @fetchData="fetchData"></m-nav>
    <panel :className="className">
      <cheap-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></cheap-card>
    </panel>
  </div>
</template>

<script>
import Nav from '../Nav'
import Panel from '../Panel'
import CheapCard from './CheapCard'
import api from '@/api/home'

export default {
  data() {
    return {
      className:'cheap-panel',
      nav:{
        theme:'狠优惠',
        navList:null
      },
      cardList:[],
      itemList:null,
      activeTab:[],
      styl:'background-color: rgb(190, 164, 116); background-image: linear-gradient(to right, rgb(255, 113, 74) 2%, rgb(252, 66, 66) 97%);'
    }
  },
  components:{
    'm-nav':Nav,
    Panel,
    CheapCard
  },
  created() {
    this.fetchData('all')
  },
  methods: {
    fetchData(tab){
      if(this.activeTab.includes(tab)){
        this.itemList = this.getItemList(tab)
        return
      }else{
        this.activeTab.push(tab)
      }
      // https://nc.meituan.com/ptapi/getScenesList?theme=quality&tab=all&ci=83&limit=12
      let params = {
        theme:'cheap',
        tab,
        ci:this.$store.state.city.currentCity.id,
        limit:20
      }
      api.getScenesList(params)
        .then(res => {
          // console.log(res)
          if(res.code === 0){
            this.nav.navList = res.tabs
            res.data = res.data.map(item => {
              if(item.imgUrl.indexOf('w.h/') !== -1){
                item.imgUrl = item.imgUrl.replace('w.h/','')
              }
              return item
            })
            this.cardList.push(res)
            this.itemList = res.data
          }
        })
    },
    getItemList(tab){
      let card = this.cardList.find(item => {
        return item.tab.tab === tab
      })
      return card.data
    }
  },
}
</script>

<style>

</style>