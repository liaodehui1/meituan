<template>
  <div class="home">
    <com-header></com-header>
    <com-content></com-content>
    <com-nav></com-nav>
    <com-footer></com-footer>
  </div>
</template>

<script>
import header from '@/components/home/Header'
import content from '@/components/home/Content'
import footer from '@/components/public/Footer'
import nav from '@/components/home/Nav'
export default {
  components:{
    'com-header':header,
    'com-content':content,
    'com-nav':nav,
    'com-footer':footer
  }
}
</script>

<style>

</style>