import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.use(Vuex)
const key='user'
export default new Vuex.Store({
  state(){
    return{
      user:null,
    }   
  },
  mutations: {
    setUser(state,value){
      state.user=value
      localStorage.setItem(key,JSON.stringify(value))
    },
    removeUser(state){
      state.user=null
      localStorage.removeItem(key)
    }
  },
  actions: {
    
  },
  getters:{
    getStorage:function(state){
      if(!state.user){
        state.user=JSON.parse(localStorage.getItem(key))
      }
    },

  }
})
