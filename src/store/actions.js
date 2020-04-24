export default {
  // 接收被组件调用时传递的参数, 并传递给mutations中的方法
  changeCity (ctx, city) {
    ctx.commit('changeCity', city)
  }
}
