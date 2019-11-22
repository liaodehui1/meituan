<template>
  <div class="main" v-if="cateInfo">
    <com-header :type="cateInfo.poiInfo.crumbs[0].title"></com-header>
    <com-content :cateInfo="cateInfo"></com-content>
    <com-footer></com-footer>
  </div>
</template>

<script>
import header from '@/components/cate/Header'
import content from '@/components/cate/Content'
import footer from '@/components/public/Footer'
import api from '@/api/detail'

export default {
  data() {
    return {
      cateInfo:null
    }
  },
  components:{
    'com-header':header,
    'com-content':content,
    'com-footer':footer
  },
  created() {
    // console.log(this.$route)
    let id = this.$route.params.id
    api.cate(id)
      .then(res => {
        // console.log(res)
        this.cateInfo = res
      })
  }
}
</script>

<style>

</style>