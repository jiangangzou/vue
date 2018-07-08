import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import login from '@/pages/login'
const home = () => import('@/pages/home')
const city = () => import ('@/pages/city')
const msite = () => import ('@/pages/msite')
// import Home from '@/page/home'
// lazyload


Vue.use(Router)

export default new Router({

  routes: [
    {
      path: '/',
      redirect: '/home'
      
    },{
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
      
    },
    {
      path: '/city/:cityid',
      component: city
    },
    {
      path: '/msite',
      component: msite
    }
  ]
})
