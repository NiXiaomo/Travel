<template>
  <ul class="list">
    <li class="item" v-for="item of letters" :key="item" :ref="item"
        @click="handleLetterClick" @touchstart.prevent="handleTouchStart"
        @touchmove="handleTouchMove" @touchend="handleTouchEnd"
    >
      {{item}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  data () {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  updated () { // 页面渲染完成以及数据更新后触发
    // 获取A字母距离顶部的距离
    this.startY = this.$refs['A'][0].offsetTop
  },
  methods: {
    handleLetterClick (e) {
      // 获取当前点击的字母, 抛给父组件
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        // 如果程序还没执行完就被再次调用, 清除上一次的操作
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 延迟16毫秒执行
        this.timer = setTimeout(() => {
          // 当前手指距离顶部的距离
          const touchY = e.touches[0].clientY - 79
          // 当前是第几个字母
          const index = Math.floor((touchY - this.startY) / 20)
          // 抛给父组件
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import "~styles/varibles.styl"
  .list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem
    .item
      line-height .4rem
      text-align center
      color $bgColor
</style>
