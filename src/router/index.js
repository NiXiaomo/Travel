import Vue from 'vue'
import VueRouter from 'vue-router'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/pages/home/Home') // 异步加载组件
  }, {
    path: '/city',
    name: 'City',
    component: City
  }, {
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  }
]

const router = new VueRouter({
  routes,
  // 让页面切换时，回到最顶部
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
