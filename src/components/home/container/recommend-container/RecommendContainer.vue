<template>
  <div>
    <m-nav :nav="nav" :styl="styl"></m-nav>
    <panel :className="className">
      <recommend-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></recommend-card>
    </panel>
  </div>
</template>

<script>
import Nav from '../Nav'
import Panel from '../Panel'
import RecommendCard from './RecommendCard'
import api from '@/api/home'

export default {
  data() {
    return {
      className:'recommend-panel',
      nav:{
        theme:'猜你喜欢',
        navList:[{
          text:'为你甄选最适合的'
        }]
      },
      itemList:null,
      styl:'background: linear-gradient(to right, rgb(88, 174, 221) 2%, rgb(66, 191, 205) 97%) rgb(88, 174, 221);'
    }
  },
  components:{
    'm-nav':Nav,
    Panel,
    RecommendCard
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData(){
      api.recommends()
        .then(res => {
          // console.log(res)
          if(res.length){
            res = res.map(item => {
              if(item.imgUrl.indexOf('w.h/') !== -1){
                item.imgUrl = item.imgUrl.replace('w.h/','')
                item.imgUrl = item.imgUrl + '@294w_165h_1e_1c'
              }
              return item
            })
            this.itemList = res
          }
        })
    }
  }
}
</script>

<style>

</style>