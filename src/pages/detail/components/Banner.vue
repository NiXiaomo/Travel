<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="//img1.qunarzz.com/sight/p0/2003/28/284dafc9676b1e06a3.water.jpg_600x330_541c1117.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          上海野生动物园(AAAAA景区)
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>
          187
        </div>
      </div>
    </div>
    <components-gallery :imgs="imgs" v-show="showGallery" @close="handleGalleryClose"></components-gallery>
  </div>
</template>

<script>
import ComponentsGallery from 'components/gallery/Gallery'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false,
      imgs: [
        'http://img1.qunarzz.com/sight/p0/1909/8b/8b57639446a9b694a3.water.jpg_r_800x800_873ede39.jpg',
        'http://img1.qunarzz.com/sight/p0/1909/af/afad321d16e4cf34a3.water.jpg_r_800x800_5129b3d5.jpg'
      ]
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallery = true
    },
    handleGalleryClose () {
      this.showGallery = false
    }
  },
  components: {
    ComponentsGallery
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position: relative;
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        height .32rem
        line-height .32rem
        margin-top .14rem
        padding 0 .4rem
        border-radius .2rem
        background rgba(0, 0, 0, .8)
        font-size .24rem
        .banner-icon
          font-size .24rem
</style>
