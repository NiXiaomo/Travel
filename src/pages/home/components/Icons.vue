<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item in page" :key="item.id">
          <div class="icon-img">
            <img class="icon-img-content" :src="item.imgUrl" alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
        desc: '踏青赏花'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/47/c2b659e048b11602.png',
        desc: '上海野生动物园'
      }, {
        id: '0004',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1810/50/26ffa31b56646402.png',
        desc: '上海海昌'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '上海欢乐谷'
      }, {
        id: '0006',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20194/209908a8fc21779b485ab05f01835eaa.png',
        desc: '辰山植物园'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '自然博物馆'
      }, {
        id: '0008',
        imgUrl: 'http://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/201912/9480e99a101564a22dfff0c4b9d0861c.png',
        desc: '上海杜莎'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        desc: '东方绿舟'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        desc: '上海科技馆'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/varibles.styl"
  @import "../../../assets/styles/mixins.styl"
  .icons >>> .swiper-container
    height 0
    padding-bottom 50%
  .icons
    margin-top .1rem
    .icon
      position: relative;
      overflow hidden
      float left
      width 25%
      height 0
      padding-bottom 25%
      text-align center
      .icon-img
        position absolute
        top 0
        left 0
        right 0
        bottom .44rem
        padding .1rem
        .icon-img-content
          height 100%
      .icon-desc
        position absolute
        left 0
        right 0
        bottom 0
        height .44rem
        line-height .44rem
        color $darkTextColor
        ellipsis()
</style>
