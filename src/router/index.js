import Vue from 'vue'
import Router from 'vue-router'
import begin from '@/components/begin'
import info from '@/components/info'
import result from '@/components/result'
import form from '@/components/form'


Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: begin
    // },
    {
      path: '/',
      component: begin
    },
    {
      path: '/begin',
      component: begin
    },
    {
      path: '/info',
      component: info
    },
    {
      path: '/result',
      component: result
    },
    {
      path: '/form',
      component: form
    }
  ]
})
