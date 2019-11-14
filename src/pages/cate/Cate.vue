<template>
  <div class="main" v-if="cateInfo">
    <com-header :type="cateInfo.poiInfo.crumbs[0].title"></com-header>
    <com-content :cateInfo="cateInfo"></com-content>
  </div>
</template>

<script>
import header from '@/components/cate/Header'
import content from '@/components/cate/Content'
import api from '@/api/detail'
export default {
  data() {
    return {
      cateInfo:null
    }
  },
  components:{
    'com-header':header,
    'com-content':content
  },
  created() {
    // console.log(this.$route)
    let id = this.$route.params.id
    api.cate(id)
      .then(res => {
        console.log(res)
        this.cateInfo = res
      })
  }
}
</script>

<style>

</style>