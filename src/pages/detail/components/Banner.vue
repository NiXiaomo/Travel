<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" :src="bannerImg" alt="">
      <div class="banner-info">
        <div class="banner-title">
          {{this.sightName}}
        </div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe643;</span>
          {{this.galleryImgs.length}}
        </div>
      </div>
    </div>
    <components-fade>
      <components-gallery :imgs="galleryImgs" v-show="showGallery" @close="handleGalleryClose"></components-gallery>
    </components-fade>
  </div>
</template>

<script>
import ComponentsGallery from 'components/gallery/Gallery'
import ComponentsFade from 'components/fade/Fade'
export default {
  name: 'DetailBanner',
  data () {
    return {
      showGallery: false
    }
  },
  props: {
    sightName: String,
    bannerImg: String,
    galleryImgs: Array
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
    ComponentsGallery,
    ComponentsFade
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
