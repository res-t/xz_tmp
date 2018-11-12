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
      component: Index,
      meta: {
        title: '小米商城'
      }
    },
    {
      path:'/',
      name:'redirect',
      redirect:'/index',
      meta: {
        title: '小米商城'
      }
    },
    {
      path:'/mi8youth',
      component:Mi8Youth,
      meta: {
        title: '小米8--青春版'
      }
    },
    {
      path:'/login',
      component:Login,
      meta: {
        title: '小米商城--登录'
      }
    },
    {
      path:'/register',
      component:Register,
      meta: {
        title: '小米商城--注册'
      }
    },
    {
      path:'/shoplist/:id',
      component:ShopList,
      meta: {
        title: '商品列表'
      }
    },
    {
      path:'/shopdetail/:id',
      component:ShopDetail,
      meta: {
        title: '商品详情'
      }
    },
    {
      path:'/listdetail/:id',
      component:ListDetail,
      meta: {
        title: '小米商城--列表详情'
      }
    }
  ]
})
