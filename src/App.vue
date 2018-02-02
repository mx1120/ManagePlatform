<template>
  <div id="app">
      <transition  name="el-zoom-in-top">
          <router-view/>
      </transition>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style rel="stylesheet/scss" lang="scss">
  @import "assets/scss/reset.scss";
  @import "assets/icon/iconfont.css";
</style>
