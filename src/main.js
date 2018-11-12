import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Base64} from 'js-base64'
import '../public/css/public.css'
import '../src/assets/jquery-3.2.1'
import '../public/css/animate.css'
import axios from 'axios'
Vue.prototype.$http = axios;
Vue.config.productionTip = false
/***加密 */
let salting = 'admin-authority'

// 加密
const encryptString = (name) => {
    return Base64.encode(name + salting)
  }
//解密
const decodeString = (name) => {
    let decodeName = Base64.decode(name) || ''

    if (decodeName && decodeName.split && decodeName.split(salting) && decodeName.split(salting)[0]) {
        return decodeName.split(salting)[0]
    } else {
        return ''
    }
}

Vue.prototype.encryptString = encryptString
Vue.prototype.decodeString = decodeString
/**end */

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
  })
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

