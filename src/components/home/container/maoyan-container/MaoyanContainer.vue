<template>
  <div>
    <m-nav :nav="nav" :styl="styl" @fetchData="fetchData" :link="link"></m-nav>
    <panel :className="className">
      <scroll-wrapper v-show="activeTab === 'hot'" ref="hotWrapper">
        <movie-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></movie-card>
      </scroll-wrapper>
      <scroll-wrapper v-show="activeTab === 'coming'" ref="comingWrapper">
        <movie-card v-for="(item,index) in itemList" :key="index" :cardInfo="item"></movie-card>
      </scroll-wrapper>
    </panel>
  </div>
</template>

<script>
import Nav from '../Nav'
import Panel from '../Panel'
import ScrollWrapper from './ScrollWrapper'
import MovieCard from './MovieCard'
export default {
  data() {
    return {
      className:'maoyan-panel',
      nav:{
        theme:'猫眼电影',
        navList:[
          {
            tab:'hot',
            text:'正在热映'
          },
          {
            tab:'coming',
            text:'即将上映'
          }
        ]
      },
      link:'/maoyan',
      scrollList:[],
      itemList:null,
      activeTab:'hot',
      styl:'background: linear-gradient(to right, rgb(250, 60, 104) 2%, rgb(254, 70, 77) 97%) rgb(250, 60, 104);'
    }
  },
  components:{
    'm-nav':Nav,
    Panel,
    ScrollWrapper,
    MovieCard
  },
  created() {
    Promise.all([this.getFilms('hot'),this.getFilms('coming')])
      .then(res => {
        // console.log(res)
        this.scrollList = res
        this.itemList = res[0].data.hot
        // 不要放在外面
        this.$nextTick(() => {
          this.$refs.hotWrapper.setSliderWidth()
        })
      })

  },
  methods: {
    getFilms(tab){
      return new Promise((resolve,reject) => {
        fetch(`http://127.0.0.1:8080/static/json/maoyan/${tab}.json`)
        .then(res => res.json())
        .then(res => {
          // console.log(res)
          if(res){
            res.data[`${tab}`] = res.data[`${tab}`].map(item => {
              if(item.img.indexOf('w.h/') !== -1){
                item.img = item.img.replace('w.h/','')
                item.img += '@294w_408h_1e_1c'
              }
              return item
            })
            resolve(res)
          }else{
            resolve(null)
          }
        }).catch(err => {
          reject(err)
        })
      })
    },
    fetchData(tab){
      let index = this.scrollList.findIndex(item => {
        return item.data[`${tab}`].length !== 0
      })
      this.itemList = this.scrollList[index].data[`${tab}`]
      this.activeTab = tab
      this.$nextTick(() => {
        this.$refs.comingWrapper.setSliderWidth()
      })
    }
  },
}
</script>

<style>

</style>