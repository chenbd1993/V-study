import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home.vue'
import vip from '@/components/vip.vue'
import shopping from '@/components/shopping.vue'
import search from '@/components/search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/vip',
      component: vip
    },
    {
      path: '/shopping',
      component: shopping
    },
    {
      path: '/search',
      component: search
    },
    {
      path: '*',
      redirect: home
    },
  ],
  linkActiveClass: 'mui-active'
})
