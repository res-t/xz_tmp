import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '../public/css/public.css'
import '../src/assets/jquery-3.2.1'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
