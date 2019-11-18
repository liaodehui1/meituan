<template>
  <router-link :to="`/meishi/${cardInfo.itemId}`" class="link recommend-item">
    <div class="card-container">
      <recommend-card :cardInfo="cardInfo"></recommend-card>
    </div>
  </router-link>
</template>

<script>
import RecommendCard from '../../../public/RecommendCard'
export default {
  props:['cardInfo'],
  components:{
    'recommend-card':RecommendCard
  }
};
</script>

<style lang="stylus" scoped>
  .recommend-item
    width 20%
    .card-container
      padding 10px
      &:hover
        background-color #f4f4f4
        transition background-color .5s
        border-radius 4px
  @media screen and (max-width 1200px)
    .recommend-item
      width 25%
</style>