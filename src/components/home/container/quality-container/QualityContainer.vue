<template>
  <div>
    <m-nav :nav="nav" :styl="styl" @fetchData="fetchData"></m-nav>
    <panel :className="className">
      <quality-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></quality-card>
    </panel>
  </div>
</template>

<script>
import Nav from '../Nav'
import Panel from '../Panel'
import QualityCard from './QualityCard'
export default {
  data() {
    return {
      className:'quality-panel',
      nav:{
        theme:'有格调',
        navList:null
      },
      cardList:[],
      itemList:null,
      activeTab:[],
      styl:'background-color: rgb(190, 164, 116); background-image: linear-gradient(to right, rgb(194, 176, 142) 3%, rgb(190, 164, 116) 100%);'
    }
  },
  components:{
    'm-nav':Nav,
    Panel,
    QualityCard
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
      fetch(`http://127.0.0.1:8080/static/json/quality/${tab}.json`)
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          if(res.code === 0){
            this.nav.navList = res.tabs
            if(res.tab.tab !== 'spa'){
              res.data = res.data.map(item => {
                if(item.imgUrl.indexOf('w.h/') !== -1){
                  item.imgUrl = item.imgUrl.replace('w.h/','')
                  item.imgUrl += '@506w_286h_1e_1c'
                }
                return item
              })
            }
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