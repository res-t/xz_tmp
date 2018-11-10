<template>
    <div class="app-shopdetail">
        <xm-header></xm-header>
        <div class="content-detail">
                <div class="title-top" id="titletop">
                    <div class="top_title_detail">
                        <h2 class="title_youth">小米8青春版</h2>
                        <div class="title_rigth">
                            <ul>
                                <li data-target="#Summary">
                                    <router-link  to="/" class="">概述 <span> |</span></router-link>
                                </li>
                                <li data-target="#gallery">
                                    <a href="javascript:">图集 <span>|</span></a>
                                </li>
                                <li data-target="#specs">
                                    <a href="javascript:">参数 <span> |</span></a>
                                </li>
                                <li data-target="#F_code">
                                    <a href="javascript:">F码通道 <span> | </span></a>
                                </li>
                                <li data-target="#Reviewarea">
                                    <a href="javascript:">用户评价</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <!--未登录提示-->
                <div class="alert-login">
                    为方便您购买，请提前登录
                    <a href="http://127.0.0.1:3000/login.html">立即登录</a>
                    <span class="alert-close">X</span>
                </div>
                <!--商品详情-->
                <div class="box clearfix" id="box">
                    <div class="pro-choose-main">
                        <!--轮播图-->
                    <div class="pro-view" id="lunbo">
                        <div class="" id="container_img">
                            <a class="item" href="#" v-for="(Image,i) in imgUrl" :key=i><img :src="Image"></a>
                            <!-- <a class="item" href="#"><img src="http://127.0.0.1:3000/img/pm-deatil1.jpg"/></a>
                            <a class="item" href="#"><img src="http://127.0.0.1:3000/img/pm-deatil2.jpg"/></a>
                            <a class="item" href="#"><img src="http://127.0.0.1:3000/img/pm-deatil3.jpg"/></a>
                            <a class="item" href="#"><img src="http://127.0.0.1:3000/img/pms-detail4.jpg"/></a>-->
                        
                            <div class="btn prev">&lt;</div>
                            <div class="btn next">&gt;</div>
                        
                            <ul id="tabs">
                                <li class="tab-D active"></li>
                                <li class="tab-D"></li>
                                <li class="tab-D"></li>
                                <li class="tab-D"></li>
                                <li class="tab-D"></li>
                            </ul>
                        </div> 
                    </div>
                    <!---规格参数信息-->
                    <div class="pro-info">
                        <h3 class="pro-title">{{detaText.uname}}</h3>
                        <!--提示-->
                        <p class="sale-desc">
                            <span style="color: #f25807">「新品现货在售」</span>
                            {{ detaText.sell_point}}
                        </p>
                        <p class="aftersale font_color">小米自营</p>
                        <!--价格-->
                        <div class="pro-price">
                            <span>{{detaText.price}}</span>
                        </div>
                        <!---赠品-->
                        <div class="flow-wrap">
                            <ul>  
                                <li>
                                    <span class="flow-tag">赠品</span> <span class="flow-name">赠米粉卡，内含100元话费</span> 
                                </li> 
                            </ul>
                        </div>
                        <!---地址-->
                        <div class="J_main">
                            <!--分仓地址-->
                            <div class="address-wrap">
                                <img src="http://127.0.0.1:3000/img/dingwei.png" alt="" class="icon-img">
                                <div class="user-default-address">
                                    <span class="ml5">山东</span>
                                    <span>济南市</span>
                                    <span>历下区</span>
                                    <span>姚家街道</span>
                                        <!--修改按钮-->
                                    <span id="modify">修改</span>
                                    <p class="font_color ml5">有现货</p>
                                </div>
                                    <!--商品规格-->
                                <div class="space-title">
                                    选择版本
                                </div>
                                <ul class="step-list clearfix">
                                    <li class="ml0 step-list-border" v-for="(item,i) in  Edition" :key=i>
                                        <a href="#">
                                            <span class="name step-list-active">{{item[0]}}</span>
                                            <span class="price">{{item[1]}}元</span>
                                        </a>
                                    </li>
                                   <!-- <li>
                                        <a href="#">
                                            <span class="name">4GB+64GB 全网通</span>
                                            <span class="price">1399元</span>
                                        </a>
                                    </li>
                                    <li class="ml0">
                                        <a href="#">
                                            <span class="name">4GB+64GB 全网通</span>
                                            <span class="price">1399元</span>
                                        </a>
                                    </li>-->
                                </ul>
                            </div>
                            <!--选择颜色-->
                            <div class="space-title">选择颜色</div>
                            <div class="step-color clearfix">
                                <ul class="">
                                    <li class="ml0 step-list-border" v-for="(tmp,i) in styleColor" :key=i>
                                        <a href="#" class="font_color">
                                        <img :src=tmp[0] alt="" class="step-color-img">{{tmp[1]}}
                                        </a>
                                    </li> 
                                </ul>
                               <!-- <ul class="">
                                    <li class="ml0 step-list-border">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li> 
                                    <li class="">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li>
                                    <li class="ml0">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li>  
                                </ul>-->
                               <!-- <ul class="">
                                    <li class="ml0 step-list-border">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li> 
                                    <li class="">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li>
                                    <li class="ml0">
                                        <a href="#" class="font_color">
                                            <img src="http://127.0.0.1:3000/img/pm-deatil2.jpg" alt="" class="step-color-img">深灰版
                                        </a>
                                    </li>  
                                </ul>-->
                            </div>
                            <div class="space-title">
                                    选择小米提供的意外保护
                                <a href="#" class="liaojie">了解意外保护 &gt;</a>
                            </div>
                            <ul class="yanchang">
                            <li class="ul-active">
                                <i class="check-box check-box-active">
                                    <em>√</em>
                                </i>
                                <img src="http://127.0.0.1:3000/img/pms_baoxian.jpg" alt="" class="baoxian-img">
                                <span class="name">意外保障服务</span>
                                <p class="desc1">手机意外摔落/进水/碾压等损坏</p>
                                <p class="agreement">
                                    <i class="check-box-active"> <em>√</em></i>
                                        <span class="read">我已阅读</span>
                                        <a href="#" class="font_color">服务条款 |</a>
                                        <a href="#" class="font_color">  常见问题</a>
                                    </p>
                                    <span class="baoxian_price">99元</span>
                            </li>
                            <li>
                                    <i class="check-box check-box-active">
                                        <em>√</em>
                                    </i>
                                    <img src="http://127.0.0.1:3000/img/pms_baoxian.jpg" alt="" class="baoxian-img">
                                    <span class="name">意外保障服务</span>
                                    <p class="desc1">手机意外摔落/进水/碾压等损坏</p>
                                    <p class="agreement">
                                        <i class="check-box-active"> <em>√</em></i>
                                        <span class="read">我已阅读</span>
                                        <a href="#" class="font_color">服务条款 |</a>
                                        <a href="#" class="font_color">  常见问题</a>
                                    </p>
                                    <span class="baoxian_price">99元</span>
                            </li>
                            </ul>
                            <!--延长保修-->
                            <div class="space-title">
                                选择小米提供的延长保修
                                <a href="#" class="liaojie">了解延长保修 &gt;</a>
                            </div>
                            <ul class="yanchang">
                                <li class="ul-active">
                                    <i class="check-box check-box-active">
                                        <em>√</em>
                                    </i>
                                    <img src="http://127.0.0.1:3000/img/pms_baoxian.jpg" alt="" class="baoxian-img">
                                    <span class="name">意外保障服务</span>
                                    <p class="desc1">手机意外摔落/进水/碾压等损坏</p>
                                    <p class="agreement">
                                        <i class="check-box-active"> <em>√</em></i>
                                            <span class="read">我已阅读</span>
                                            <a href="#" class="font_color">服务条款 |</a>
                                            <a href="#" class="font_color">  常见问题</a>
                                        </p>
                                        <span class="baoxian_price">99元</span>
                                </li>
                            </ul>
                            <!--已选择产品-->
                            <div class="pro-list">
                                <ul>
                                    <li>
                                        小米8 青春版 4GB+64GB 深空灰  
                                        <span>1399元</span>
                                    </li>
                                    <li class="totlePrice">   总计   ：1399元  </li>
                                </ul>
                            </div>
                            <!--购买按钮-->
                            <ul class="btn-mai">
                                <li>
                                    <a href="#">立即购买</a>
                                </li>
                                <li>
                                    <a href="#">
                                        ❤喜欢
                                    </a>
                                </li>
                            </ul>
                            <div class="next-xieyi">
                                <a href="#">
                                    <span>
                                        <i class="next-ico">
                                            <em>✔</em>
                                        </i>
                                        小米自营
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="next-ico">
                                            <em>✔</em>
                                        </i>
                                        小米发货
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="next-ico">
                                            <em>✔</em>
                                        </i>
                                        七天无理由退货
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="next-ico">
                                            <em>✔</em>
                                        </i>
                                    运费说明
                                    </span>
                                </a>
                                <a href="#">
                                    <span>
                                        <i class="next-ico">
                                            <em>✔</em>
                                        </i>
                                        售后政策
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <xm-footer></xm-footer>
    </div>
</template>
<script>
 import '../../public/css/shopdetail.css'
  import xmHeader from '@/components/header.vue'
  import xmFooter from '@/components/footer.vue'
export default {
    data(){
        return{
             detaText:"",
             Edition:"",
             styleColor:"",
             imgUrl:"",
        }
    },
    mounted(){
        this.SwipImg();
        this.MouseG();
        //console.log(this.$route.params)
        this.getProduct();
    },
    methods:{
        SwipImg(){
            $(document).ready(function(){
                var i = 0 ;
                var timer;
            
            //用jquery方法设置第一张图片显示，其余隐藏
            $('.item').eq(0).show().siblings('.item').hide();
                
            //调用showTime()函数（轮播函数）
            showTime();
                
            //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
            $('.tab-D').hover(function(){
                //获取当前i的值，并显示，同时还要清除定时器
                i = $(this).index();
                Show();
                clearInterval(timer);
            },function(){
                //
                showTime();
            });
                
            //鼠标点击左侧的箭头
            $('.prev').click(function(){
                clearInterval(timer);
                if(i == 0){
                i = 5;//注意此时i的值
                }
                i--;
                Show();
                showTime();
            });
                
            //鼠标点击右侧的箭头
            $('.next').click(function(){
                clearInterval(timer);
                if(i == 4){
                i = -1;//注意此时i的值
                }
                i++;
                Show();
                showTime();
            });
            
                
            //创建一个showTime函数
            function showTime(){
            //定时器
            timer = setInterval(function(){
                //调用一个Show()函数
                Show();
                i++;
                //当图片是最后一张的后面时，设置图片为第一张
                if(i==5){
                i=0;
                }
            },5000);
            }
            
            
            //创建一个Show函数
            function Show(){
            //在这里可以用其他jquery的动画
            $('.item').eq(i).fadeIn(300).siblings('.item').fadeOut(300);
                
            //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
            $('.tab-D').eq(i).addClass('active').siblings('.tab-D').removeClass('active');
                
            }
            
            });
        },
        MouseG(){
            /**鼠标事件 */
                window.onscroll = function(){
                // console.log(window.scrollTop);
                var docScroll = document.documentElement.scrollTop;
                //console.log(docScroll);
                var lunboOffset = lunbo.offsetTop+560;
                var boxOffset =box.offsetTop+1200;
                //console.log(window.innerHeight)
                //console.log(docScroll,lunboOffset)
                if(docScroll>=lunboOffset/2){
                    container_img.className="container_img";
                    titletop.className = "title-top2"
                }else{
                    container_img.classList.remove("container_img")
                    titletop.classList.remove("title-top2")
                    titletop.className = "title-top"
                }
                if(docScroll>=boxOffset*2-1580){
                    //box.className="my_display" 、
                    container_img.classList.remove("container_img")
                    container_img.className="container_img2"
                }
                }
                /***alert-close */
                $('.alert-close').click(function(){
                    var span = $(this);
                $('.alert-login').addClass("my_display")
                })
        }, 
        getProduct(){
            var url ='http://127.0.0.1:3000/detail/?id='
            url+=this.$route.params.id;
            this.$http.get(url).then(result=>{
                //console.log(result.data.detail[0]);
                this.detaText = result.data.detail[0];
                //console.log(this.detaText)
                var banben = result.data.detail[0].versions;
                banben = JSON.parse(banben)
                //console.log(banben);
                this.Edition = banben;
                var color = result.data.detail[0].color;
                color = JSON.parse(color);
                //console.log(color);
                this.styleColor = color;
                console.log(result.data.img[0].img_url)
                var str = result.data.img[0].img_url;
                var arr = str.split(",")
                console.log(arr);
                this.imgUrl = arr
                console.log( this.imgUrl)
               })
        },
    },
    components:{
        xmHeader,
        xmFooter
    },
   
    
}
</script>
<style>

</style>


