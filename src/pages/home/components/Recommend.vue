<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in recommendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      recommendList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2003/28/284dafc9676b1e06a3.water.jpg_200x200_1b020636.jpg',
        title: '上海野生动物园',
        desc: '会跳芭蕾的小海狮们~'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1811/7e/7ecbd353174c66b1a3.img.jpg_200x200_f661532a.jpg',
        title: '上海欢乐谷',
        desc: '敢上1200米长的木质过山车吗？'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2003/2b/2b5bd22ea6a3cff9a3.water.jpg_200x200_35882e48.jpg',
        title: '上海海昌海洋公园',
        desc: '这里最近很火哦，好多人都在点评它呢！'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2003/de/de11d542e3f0776da3.water.jpg_200x200_4a7e1531.jpg',
        title: '浦江郊野公园奇迹花园',
        desc: '🔥好评如潮，小伙伴热推景点~'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/2004/6b/6b4d84eaad3486aaa3.img.jpg_200x200_311fb644.jpg',
        title: '安徒生童话乐园',
        desc: '把握安徒生主题，深入结合童话特质'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "../../../assets/styles/mixins.styl"
  .title
    margin-top .2rem
    line-height .6rem
    background #eee
    text-indent .2rem
  .item
    overflow: hidden;
    display flex
    height 1.9rem
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-desc
        line-height .4rem
        color #ccc
        ellipsis()
      .item-button
        line-height .44rem
        margin-top .16rem
        background #ff9300
        padding 0 .1rem
        border-radius .06rem
        color #fff
</style>
