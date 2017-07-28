import Vue from 'vue'
import Router from 'vue-router'
import Homepage from '@/components/homepage/Homepage'
import Buy from '@/components/buy/Buy'
import Refund from '@/components/refund/Refund'
import Change from '@/components/change/Change'
import Mine from '@/components/mine/Mine'
import Login from '@/components/login/Login'
import Gywom from '@/components/homepage/Gywom'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Homepage',
      component: Homepage
    },
    {
      path: '/Gywom',
      name: 'Gywom',
      component: Gywom
    },
    {
      path: '/buy',
      name: 'buy',
      component: Buy
    },
    {
      path: '/change',
      name: 'change',
      component: Change
    },
    {
      path: '/refund',
      name: 'refund',
      component: Refund
    },
    {
      path: '/mine',
      name: 'mine',
      component: Mine
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})
