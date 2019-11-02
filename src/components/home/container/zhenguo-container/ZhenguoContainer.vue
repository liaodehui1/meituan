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
    this.fetchData('420100')
  },
  methods: {
    fetchCitys(){
      fetch(`http://127.0.0.1:8080/static/json/minsu/citys.json`)
        .then(res => res.json())
        .then(res => {
          if(res.status === 0){
            // console.log(res)
            this.nav.navList = res.cityList
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
      fetch(`http://127.0.0.1:8080/static/json/minsu/${cityId}.json`)
        .then(res => res.json())
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