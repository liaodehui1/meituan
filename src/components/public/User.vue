<template>
  <div class="user-entry">
    <template v-if="user">
      <router-link to="/account/userinfo" class="growth-entry user-up">{{user.username}}</router-link>
      <router-link to="/exit" class="extra-entry">退出</router-link>
    </template>
    <template v-else>
      <router-link to="/login" class="growth-entry user-up">立即登录</router-link>
      <router-link to="/register" class="extra-entry">注册</router-link>
    </template>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  computed: mapState({
    user:state => state.user.userinfo
  })
}
</script>

<style lang="stylus" scoped>
.user-entry
  margin-left 15px
  display inline-block
  a
    margin-left 10px
  .user-up
    color #FE8C00
</style>