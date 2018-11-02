import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/XmIndex.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/index',
      name: 'index',
      component: Index
    },
    {
      path:'/',
      name:'redirect',
      redirect:'/index'
    }
  ]
})
