import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/XmIndex.vue'
import Mi8Youth from './views/Mi8Youth.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import ShopList from './views/ShopList.vue'
import ShopDetail from './views/ShopDetail.vue'
import ListDetail from './views/ListDetail.vue'
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
    },
    {
      path:'/mi8youth',
      component:Mi8Youth
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/register',
      component:Register
    },
    {
      path:'/shoplist',
      component:ShopList
    },
    {
      path:'/shopdetail/:id',
      component:ShopDetail
    },
    {
      path:'/listdetail',
      component:ListDetail
    }
  ]
})
