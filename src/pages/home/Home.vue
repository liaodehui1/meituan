<template>
  <div class="home">
    <com-header></com-header>
    <com-content></com-content>
    <com-footer></com-footer>
  </div>
</template>

<script>
import header from '@/components/home/Header'
import content from '@/components/home/Content'
import footer from '@/components/public/Footer'
export default {
  components:{
    'com-header':header,
    'com-content':content,
    'com-footer':footer
  }
}
</script>

<style>

</style>