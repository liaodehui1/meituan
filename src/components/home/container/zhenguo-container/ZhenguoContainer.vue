<template>
  <div>
    <m-nav :nav="nav" :styl="styl" @fetchData="fetchData" :link="link"></m-nav>
    <panel :className="className">
      <minsu-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></minsu-card>
    </panel>
  </div>
</template>

<script>
import Nav from '../Nav'
import Panel from '../Panel'
import MinsuCard from './MinsuCard'
import api from '@/api/home'

export default {
  data() {
    return {
      className:'minsu-panel',
      nav:{
        theme:'推荐民宿',
        navList:null
      },
      link:'/zhenguo',
      cardList:[],
      itemList:null,
      activeTab:[],
      styl:'background: linear-gradient(to right, rgb(243, 182, 74) 2%, rgb(242, 197, 69) 97%) rgb(243, 182, 74);'
    }
  },
  components:{
    'm-nav':Nav,
    Panel,
    MinsuCard
  },
  created() {
    this.fetchCitys()
  },
  methods: {
    fetchCitys(){
      let params = {
        fetchSize:10
      }
      api.minsuCitys(params)
        .then(res => {
          if(res.status === 0){
            // console.log(res)
            this.nav.navList = res.cityList
            this.fetchData(res.cityList[0].cityId)
          }
        })
    },
    fetchData(cityId){
      if(this.activeTab.includes(cityId)){
        this.itemList = this.getItemList(cityId)
        return
      }else{
        this.activeTab.push(cityId)
      }
      let params = {
        cityId
      }
      api.minsu(params)
        .then(res => {
          // console.log(res)
          if(res.status === 0){
            res.cityId = cityId
            this.cardList.push(res)
            this.itemList = res.productList
          }
        })
    },
    getItemList(cityId){
      let card = this.cardList.find(item => {
        return item.cityId === cityId
      })
      return card.productList
    }
  },
}
</script>

<style>

</style>