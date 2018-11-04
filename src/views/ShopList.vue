<template>
     <div class="app-shoplist">
         <xm-header></xm-header>
        <div class="">
            <div class="container_title">
                <a href="#">首页 &gt;</a>
                <a href="#">全部结果 &gt;</a>
                <span>净水器</span>
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
                <div class="product-detail">
                    <div class="my-product-list">
                        <img src="http://127.0.0.1:3000/img/pms_jinshuiqi200x200.jpg" alt="">
                        <p class="list-title"><router-link to="/listdetail">小米净水器滤芯 PP棉</router-link></p>
                        <p class="list-price animated swing infinite">59元</p>
                        <p class="list-img"><a href="http://127.0.0.1:3000/listdetail.html"><img src="http://127.0.0.1:3000/img/pms_reshuqi!34x34.jpg" alt=""></a></p>
                        <div class="like-cart">
                            <a href="#" style="float:left" class="my_a_color my_display">
                                <img src="http://127.0.0.1:3000/img/like.png" alt="" class="like-cart_img"> 喜欢
                            </a>
                            <a href="#" style="float:right" class="my_a_color  my_display ">详情
                                <img src="http://127.0.0.1:3000/img/shopcar.png" alt="" class="mr20 like-cart_img">
                            </a>
                        </div>
                    </div>
                    <div class="my-product-list">
                            <img src="http://127.0.0.1:3000/img/pms_jinshuiqi200x200.jpg" alt="">
                            <p class="list-title"><a href="#">小米净水器滤芯 PP棉</a></p>
                            <p class="list-price">59元</p>
                            <p class="list-img"><a href="#"><img src="http://127.0.0.1:3000/img/pms_reshuqi!34x34.jpg" alt=""></a></p>
                            <div class="like-cart">
                                <a href="#" style="float:left" class="my_a_color my_display">
                                    <img src="http://127.0.0.1:3000/img/like.png" alt="" class="like-cart_img"> 喜欢
                                </a>
                                <a href="#" style="float:right" class="my_a_color  my_display ">详情
                                    <img src="http://127.0.0.1:3000/img/shopcar.png" alt="" class="mr20 like-cart_img">
                                </a>
                            </div>
                    </div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
                    <div class="my-product-list"></div>
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
        return{}
    },
    mounted(){
        this.product();
    },
    methods:{
        product(){
             $('.my-product-list').mouseenter(function(){
                var li = $(this);
                li.children('.like-cart').children().addClass("animated swing infinite").removeClass("my_display")
              }).mouseleave(function(){
                var li = $(this);
                li.children('.like-cart').children().removeClass("animated swing infinite").addClass("my_display")
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

</style>


