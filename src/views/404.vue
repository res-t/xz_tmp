<template>
     <div class="app-404">
         <div class="app-404-btn">
              <router-link to="/index">返回首页</router-link>
         </div>
     </div>
</template>
<script>
export default {
    
}
</script>
<style>
  .app-404{
       background: url('http://127.0.0.1:3000/detail/404.png') 50% 100% no-repeat;
       width: 100%;
      height: 700px;
      position: relative;
  }
  .app-404-btn{
      width: 100px;
      height: 100px;
      position: absolute;
      bottom: 130px;
      left: 50%;
      margin-left: -215px;
      text-align: center;
  }
  .app-404-btn>a{
       display: block;
       width: 100px;
       height: 40px;
       color: #fff;
       line-height: 3;
       border-radius: 10px;
       background: #C04C55;
       
  }
</style>


