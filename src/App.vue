<template>
  <div id="app">
     <xm-header></xm-header>
      <router-view></router-view>
      <xm-footer></xm-footer>
  </div>
</template>
 <script>
 import xmHeader from '@/components/header.vue'
 import xmFooter from '@/components/footer.vue'
 export default {
     data(){
       return{}
     },
     methods:{},
     components:{
       xmHeader,
       xmFooter
     }
 }
 </script>

 
<style>

</style>
