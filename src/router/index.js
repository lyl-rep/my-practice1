import Vue from 'vue'
import VueRouter from 'vue-router'
import fangDou from '@/views/fangDou.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: '/fangDou',
    component: fangDou
  },
  {
    path: '/second',
    name: 'Second',
    component: () => import('@/views/fangdouSecond.vue'),
    meta:{keepAlive:true}
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
