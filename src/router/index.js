import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import TimeEntries from '@/components/TimeEntries'
import LogTime from '@/components/LogTime'
import Notfound from '@/components/404'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home
    },{
      path: '/home',
      component: Home
    },
    {
      path: '/time-entries',
      component: TimeEntries,
      children: [
        {
          path: 'log-time',
          component: LogTime
        }
      ]
    },{
      path: '*',
      component: Notfound
    }
  ]
})
