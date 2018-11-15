<template>
     <div class="app-shoplist">
         <xm-header></xm-header>
        <div class="">
            <div class="container_title">
                <router-link to="/index">首页 &gt;</router-link>
                <a href="#">全部结果 &gt;</a>
                <span></span>
            </div>
            <!--fenlei-->
            <div class="filter-box ">
                <ul class="filter-list">
                    <li class="classification">分类：</li>
                    <li>
                        <a href="#" class="active">全部</a>
                    </li>
                    <li>
                        <a href="#">净水器</a>
                    </li>
                    <li>
                        <a href="#">配件优惠套装</a>
                    </li>
                    <li>
                        <a href="#">智能家居</a>
                    </li>
                    <li>
                        <a href="#">滤水壶</a>
                    </li>
                </ul>   
            </div>
            <!--shangpin-->
            <div class="product-content">
                <div class="order-list-box">
                <ul class="product-left">
                    <li style="text-align:left; border:none;"><a href="#" class="active">推荐</a></li>
                    <li><a href="#">新品</a></li>
                    <li><a href="#">价格 <span class="jiantou"> ↑</span></a></li>
                    <li><a href="#">评论最多</a></li>
                </ul>
                <ul class="product-right">
                    <li>
                        <a href="#"><span></span> 查看评论</a>
                    </li>
                    <li>
                        <a href="#"><span></span> 仅显示特惠商品</a>
                    </li>
                    <li>
                    <a href="#"><span></span> 仅显示特惠商品</a>
                    </li>
                </ul>
                </div>
                <div class="product-detail-list clearfix">
                    <div class="my-product-list"  v-for="(product,i) in products" :key="product.id" @mouseenter="xuanting(i)" @mouseleave='yichu(i)'>
                        <img :src="product.img_url" alt="">
                        <p class="list-title"><router-link :to="'/listdetail/'+products.id">{{product.title}}</router-link></p>
                        <p class="list-price animated swing infinite">{{product.price}}元</p>
                        <p class="list-img">
                            <router-link :to="'/shopdetail/'+product.parent_id">
                                <img :src="product.img_url" alt="">
                            </router-link>
                        </p>
                        <div class="like-cart">
                            <router-link :to="'/shopdetail/'+product.parent_id" style="float:left" :class="[{'my_a_color':true},{'animated':true},{'swing':true}, {'my_display':index!=i }]">
                                <img src="http://127.0.0.1:3000/img/like.png" alt="" class="like-cart_img"> 喜欢
                            </router-link>
                            <router-link :to="'/shopdetail/'+product.parent_id" style="float:right" :class="[{'my_a_color':true},{'animated':true},{'swing':true}, {'my_display':index!=i }]">详情
                                <img src="http://127.0.0.1:3000/img/shopcar.png" alt="" class="mr20 like-cart_img">
                            </router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <xmFooter></xmFooter>
    </div>
</template>
<script>
 import '../../public/css/shoplist.css'
  import '../../public/css/animate.css'
  import xmHeader from '@/components/header.vue'
  import xmFooter from '@/components/footer.vue'
export default {
    data(){
        return{
            productlist:'',
            index: -1,
            products:[],
        }
    },
    mounted(){
      // this.product();
       //this.getProduct();
       this.search();
   
    },
    methods:{
        xuanting(i){
            this.index=i       
        },
        yichu(i){
            this.index=-1
        },
        /**请求 */
        search(){
           // this.$router.push("/search")
          // console.log(this.title);
           var url="http://127.0.0.1:3000/search?name="
               url+=this.$route.params.id;
               this.$http.get(url).then(result=>{
                    console.log(result);
                    this.products =result.data;
                  
               })
        }
    },
    components:{
        xmHeader,
        xmFooter,
    }
}
</script>
<style>
    .my-product-list:hover{
         box-shadow: 0 6px 20px rgba(0,0,0,.25);
         transform: scale(1.01);
         transition: .2s all linear;
    }
</style>


