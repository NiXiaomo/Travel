<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe743;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe7b3;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        <!--{{this.$store.state.city}}-->
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe60a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    /* 把 city 映射到同名计算属性之中,方便调用 */
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .header
    display: flex
    line-height: $headerHeight
    background: $bgColor
    color: #fff

    .header-left
      width: .64rem
      float: left
      .back-icon
        text-align: center
        font-size: .7rem

    .header-input
      flex: 1
      height: .64rem
      line-height: .64rem
      margin-top: .12rem
      margin-left: .2rem
      padding-left: .2rem
      background: #fff
      border-radius: .1rem
      color: #ccc

    .header-right
      min-width: 1.04rem
      padding 0 .1rem
      float: right
      text-align: center
      color #fff
      .arrow-icon
        margin-left: -.04rem
        font-size: .2rem
</style>
