<template>
    <div class="app-header">
      <header style="width:100%">
          <!--图片-->
          <div class="site-topbar container">
              <div  class="clearfix my_top_title">
                  <div class="topbar-nav">
                      <ul class="clearfix pl0">
                          <li><a href="#">小米商城</a><span>  |</span></li>
                          <li><a href="#">MIUI</a><span>  |</span></li>
                          <li><a href="#">lOT</a><span>  |</span></li>
                          <li><a href="#">云服务</a><span>  |</span></li>
                          <li><a href="#">金融</a><span>  |</span></li>
                          <li><a href="#">有品</a><span>  |</span></li>
                          <li><a href="#">小爱开放平台</a><span>  |</span></li>
                          <li><a href="#">政企服务</a><span>  |</span></li>
                          <li><a href="#">Select Region</a></li>
                      </ul>
                  </div>
                  <div class="posr topbar-nav_right" >
                      <ul class="clearfix">
                            <li id="login">
                                <span  id="name">登录</span>
                                <div class="islogin my_display">
                                    <ul>
                                        <li>
                                            <a href="#">个人中心</a>
                                        </li>
                                        <li>
                                            <a href="#">评论晒单</a>
                                        </li>
                                        <li>
                                            <a href="#">我喜欢</a>
                                        </li>
                                        <li>
                                            <a href="#">小米账户</a>
                                        </li>
                                        <li>
                                            <a href="javascript:" class="Signout">退出登录</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li><span>  |</span><router-link  to="/register" class="zhuce">注册</router-link><span>  |</span></li>
                            <li><a href="#" class="tongzhi">消息通知</a><span>  |</span></li>
                            <li id="l1">
                                <router-link to="/cart" class="car_mini" >
                                    <img src="http://127.0.0.1:3000/img/car1.png" alt="" class="car_mini_img">
                                    <img src="http://127.0.0.1:3000/img/car2.png" alt="" class="car_mini_img my_display" >购物车(0)</router-link>
                                    <div class="my_shopp_car my_display">
                                            <p>购物车中还没有商品，赶紧选购吧！</p>
                                    </div>
                            </li>
                      </ul>
                  </div>
              </div>
          </div>
          <div id="pocducts" class="container bg" >
              <div  class="shopp_title">
                  <div class="my_title">
                      <div class="my_logo">
                          <router-link to="/index"> <img src="http://127.0.0.1:3000/img/logo.png" alt=""></router-link>
                      </div>
                      <div class="my_mini">
                          <a href="#"><img src="http://127.0.0.1:3000/img/mini.gif" alt=""></a>
                          <ul class="my_top_nav ">
                              <li data-target="#phone"><a href="#">小米手机</a></li>
                              <li data-target="#redphone"><a href="#">红米</a></li>
                              <li data-target="#tv"><a href="#">电视</a></li>
                              <li data-target="#loptop"><a href="#">笔记本</a></li>
                              <li data-target="#kongtiao"><a href="#">空调</a></li>
                              <li data-target="#newpcoducts"><a href="#">新品</a></li>
                              <li data-target="#luyouqi"><a href="#">路由器</a></li>
                              <li data-target="#yingjian"><a href="#">智能硬件</a></li>
                              <li><a href="#">社区</a></li>
                              <li><a href="#">服务</a></li>
                          </ul>
                      </div>
                      <div class="my_serch">
                          <input type="text" value=""><button class="d1">
                              <div class="search icon"></div>
                          </button>
                      </div>
                      <a href="#" class="my_resou1 my_resou">小米8</a>
                      <a href="#" class="myresou2 my_resou">小米MIX 2S</a>
                      <div class="my_p_input my_display">
                          <ul>
                              <li id="xiaomi6"><a href="#">小米6x <span>约有6件</span></a></li>
                              <li><a href="#">小米6x <span>约有6件</span></a></li>
                              <li><a href="#">小米MIX2 <span>约有5件</span></a></li>
                              <li><a href="#">黑鲨游戏手机 <span>约有3件</span></a></li>
                              <li><a href="#">红米note 5 <span>约有6件</span></a></li>
                              <li><a href="#">红米5A <span>约有6件</span></a></li>
                              <li><a href="#">小米电视4c <span>约有6件</span></a></li>
                              <li><a href="#">电视32寸 <span>约有6件</span></a></li>
              <li><a href="#">小米电视4c <span>约有6件</span></a></li>
                              <li><a href="#">电视32寸 <span>约有6件</span></a></li>
                          </ul>
                      </div>
                  </div>                
                  <div id="phone" class="hide_list  my_display">
                      <!--小米系列-->
                      <div  class="hide_list_pocgucts">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <router-link to="/mi8youth">
                                      <img src="http://127.0.0.1:3000/img/qingchun1.png" alt=""></router-link>
                                  <a href="http://127.0.0.1:3000/mi8_Youth.html" class="my_pcoducts_name">小米青春版</a> 
                                  <p class="my_price">1399元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <router-link :to="'/shopdetail/'+98"><img src="http://127.0.0.1:3000/img/pingmu2.png" alt=""></router-link>
                                  <a href="#" class="my_pcoducts_name">小米8 屏幕指纹版</a> 
                                  <p class="my_price">3199元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <router-link :to="'/shopdetail/'+98"><img src="http://127.0.0.1:3000/img/qingchun3.png" alt="" class=""></router-link>
                                  <router-link :to="'/shopdetail/'+99" class="my_pcoducts_name">小米8</router-link> 
                                  <p class="my_price">2699元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/1qingchun4.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米8SE</a> 
                                  <p class="my_price">1899元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/qingchun5.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米Max 3</a> 
                                  <p class="my_price">1699元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/qingchun6.png" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">小米MIX 2S</a> 
                                  <p class="my_price">3299元起</p>  
                              </li>
                              
                          </ul>
                      </div>
                  </div>
                  <div id="redphone" class="hide_list  my_display">
                      <!--红米系列-->
                      <div class="hide_list_pocgucts">
                              <ul class="phone_pc clearfix">
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#">
                                          <img src="http://127.0.0.1:3000/img/hongmi1.png" alt=""></a>
                                      <a href="#" class="my_pcoducts_name">红米6 Pro</a> 
                                      <p class="my_price">999元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <router-link :to="'/shopdetail/'+106"><img src="http://127.0.0.1:3000/img/homgmi2.png" alt=""></router-link>
                                      <a href="#" class="my_pcoducts_name">红米6</a> 
                                      <p class="my_price">799元起</p>  
                                  </li>
                                  <li>
                                          <div class="new_pcoducts">新品</div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/homgmi3.png" alt="" class=""></a>
                                      <a href="#" class="my_pcoducts_name">红米6A</a> 
                                      <p class="my_price">599元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts new_pcoducts_bor"></div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/hongmi4-220.png" alt="" class=""></a>
                                      <a href="#" class="my_pcoducts_name">红米Note 5</a> 
                                      <p class="my_price">1099元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts new_pcoducts_bor"></div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/hongmi5.png" alt="" class=""></a>
                                      <a href="#" class="my_pcoducts_name">红米S2</a> 
                                      <p class="my_price">999元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts new_pcoducts_bor"></div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/hongmi6.png" alt="" class="my_none"></a>
                                      <a href="#" class="my_pcoducts_name">红米5 Plus</a> 
                                      <p class="my_price">999元起</p>  
                                  </li>
                              </ul>
                      </div>
                  </div>
                  <div id="tv" class="hide_list  my_display">    
                      <!--小米电视系列-->
                      <div class="hide_list_pocgucts">
                              <ul class="phone_pc clearfix">
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#">
                                          <img src="http://127.0.0.1:3000/img/tv1.png" alt=""></a>
                                      <a href="#" class="my_pcoducts_name">小米电视4 75英寸</a> 
                                      <p class="my_price">8999元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/tv2.png" alt=""></a>
                                      <a href="#" class="my_pcoducts_name">小米电视4A 32英寸</a> 
                                      <p class="my_price">899元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/tv3.png" alt="" class=""></a>
                                      <a href="#" class="my_pcoducts_name">小米电视4A 43英寸青春版</a> 
                                      <p class="my_price">1499元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/tv4.png" alt="" class=""></a>
                                      <a href="#" class="my_pcoducts_name">小米电视4A 50英寸</a> 
                                      <p class="my_price">1999元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts">新品</div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/tv5.png" alt="" class="mr-10"></a>
                                      <a href="#" class="my_pcoducts_name">小米电视4A 55英寸</a> 
                                      <p class="my_price">2499元起</p>  
                                  </li>
                                  <li>
                                      <div class="new_pcoducts new_pcoducts_bor"></div>
                                      <a href="#"><img src="http://127.0.0.1:3000/img/tv6.png" alt="" class="my_none"></a>
                                      <a href="#" class="my_pcoducts_name">查看全部</a> 
                                      <p class="my_price">小米电视</p>  
                                  </li>
                              </ul>
                      </div>
                  </div>
                  <div id="loptop" class="hide_list  my_display">     
                      <!--小米电脑-->
                      <div class="hide_list_pocgucts ">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#">
                                      <img src="http://127.0.0.1:3000/img/computer1.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米平板</a> 
                                  <p class="my_price">1099元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/computer2.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米笔记本 15.6"</a> 
                                  <p class="my_price">4199元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/computer3.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米游戏本 8代</a> 
                                  <p class="my_price">6699元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/computer4.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米笔记本Pro 15.6" GTX版</a> 
                                  <p class="my_price">6299元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/computer5.png" alt="" class="mr-10"></a>
                                  <a href="#" class="my_pcoducts_name">小米笔记本 Pro</a> 
                                  <p class="my_price">5599元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/computer6.5.jpg" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">小米笔记本 Air 系列</a> 
                                  <p class="my_price">3599元起</p>  
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div id="kongtiao" class="hide_list  my_display">
                      <!--小米空调-->
                      <div class="hide_list_pocgucts">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/kongtiao.jpg" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">米家互联网空调</a> 
                                  <p class="my_price">1999元起</p>  
                              </li>
                          </ul>
                      </div> 
                  </div>
                  <div id="newpcoducts" class="hide_list  my_display">   
                      <!--小米新品-->  
                      <div class="hide_list_pocgucts">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#">
                                      <img src="http://127.0.0.1:3000/img/new1.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米手环3</a> 
                                  <p class="my_price">169元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/luyouqi.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器4</a> 
                                  <p class="my_price">199元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/toiuyingyi.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">米家投影仪</a> 
                                  <p class="my_price">3399元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/VR.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米VR 一体机</a> 
                                  <p class="my_price">1499元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/shexiangji.png" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">小米米家智能摄像机 云台版</a> 
                                  <p class="my_price">199元起</p>  
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div id="luyouqi" class="hide_list  my_display">    
                      <!--小米路由器-->
                      <div class="hide_list_pocgucts">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts">双频双核</div>
                                  <a href="#">
                                      <img src="http://127.0.0.1:3000/img/A4.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器 4</a> 
                                  <p class="my_price">199元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/4Q.png" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器 4Q</a> 
                                  <p class="my_price">99元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/3A.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器 3A</a> 
                                  <p class="my_price">129元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">双千兆</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/3G.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器 3G</a> 
                                  <p class="my_price">299元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">大容量</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/PRO.png" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">小米路由器 HD/Pro</a> 
                                  <p class="my_price">499元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/quanbu.png" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">查看全部小米路由器</a>  
                              </li>
                          </ul>
                      </div> 
                  </div>
                  <div id="yingjian" class="hide_list  my_display">
                      <!--硬件智能-->
                      <div class="hide_list_pocgucts">
                          <ul class="phone_pc clearfix">
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <a href="#">
                                      <img src="http://127.0.0.1:3000/img/plane.jpg" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米无人机</a> 
                                  <p class="my_price">2999元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts">新品</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/xiaomijingshuiqi.jpg" alt=""></a>
                                  <a href="#" class="my_pcoducts_name">小米净水器</a> 
                                  <p class="my_price">1999元起</p>  
                              </li>
                              <li>
                                      <div class="new_pcoducts">新品</div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/saodijiqiren320-220.jpg" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">米家扫地机器人</a> 
                                  <p class="my_price">1699元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/dfb.jpg" alt="" class=""></a>
                                  <a href="#" class="my_pcoducts_name">米家压力IH电饭煲</a> 
                                  <p class="my_price">999元起</p>  
                              </li>
                              <li>
                                  <div class="new_pcoducts new_pcoducts_bor"></div>
                                  <a href="#"><img src="http://127.0.0.1:3000/img/air2.jpg" alt="" class="my_none"></a>
                                  <a href="#" class="my_pcoducts_name">查看全部智能硬件</a> 
                                  <p class="my_price"></p>  
                              </li>
                          </ul>
                      </div>
                  </div>
                  <div class="clearfix"></div>
              </div>                     
          </div>
      </header>
    </div>
</template>
<script>
 import '../../public/css/header.css'

export default {
    data(){
        return{
            uname:"",
        }
    },
     mounted(){
    this.serch();
    this.product();
    this.shopCart();
    this.serchIco();
    //this.islogin();
    this.getUname();
    this.getLogin();
    },
    methods:{
        /*商品*/
        product(){
             /**商品**/
            $(".my_top_nav>li").mouseenter(function(){
                var li = $(this)
                if( $(li.attr('data-target')).is('.my_display')){
                $(li.attr('data-target')).removeClass("my_display").siblings(".hide_list").addClass("my_display")
            }
            
            });
            $(".my_title").parent().parent().mouseleave(function(){
                
            $('.hide_list').addClass('my_display')
            
            })
        },
        /**搜索*/
        serch(){
              $(".my_serch>input").click(function(){
                var $input = $(this);
                $input.css("border","1px solid #FF6B00")
                $(".d1").css("border","1px solid #FF6B00")
                .css("border-left","none")
                $(".my_resou").addClass("my_opacity")
                $(".my_p_input").removeClass("my_display")
             })
            $(".my_serch>input").parent().parent().parent().hover(function(){
                $(".my_serch>input").css("border","1px solid rgba(150, 149, 149, 0.212)")
                $(".my_resou").removeClass("my_opacity")
                $(".d1").css("border","1px solid rgba(150, 149, 149, 0.212)")
                $(".my_p_input").addClass("my_display")
            })
        },
        /**购物车 */
        shopCart(){
              $(".car_mini").mouseenter(function(){
                var li = $(this);
                li.children().toggleClass("my_display")
                $(".car_mini").addClass("my_wirte_a")
                $(".my_shopp_car").removeClass("my_display");
                $('.topbar-nav_right>ul>li:last-child>a').css('background','white')
                }).parent().mouseleave(function(){
                    $(".my_shopp_car").addClass("my_display");
                    $(".car_mini").children().toggleClass("my_display");
                    $(".car_mini").removeClass("my_wirte_a")
                    $('.topbar-nav_right>ul>li:last-child>a').css('background',' #424242')
                     .css('color','#b0b0b0')
             })
        },  
        serchIco(){
            /*搜索图标*/
            $('.d1').mouseenter(function(){
                $(".search.icon").css("color","#fff")
            }).mouseleave(function(){
                $(".search.icon").css("color","#000")
            })
        },
        /**状态 */
        islogin(){
            $("#login").mouseenter(function(){
                var li =$(this);
                li.children("div").removeClass("my_display")
                $("#login").addClass("my_wirte").children("a").addClass("my_wirte_a")
                
            }).mouseleave(function(){
                var li =$(this);
                $("#login").removeClass("my_wirte").children("a").removeClass("my_wirte_a")
                $(".islogin").addClass("my_display")
           })
        },
        getUname(){
            var userinfo = JSON.parse( localStorage.getItem('user'));
            if(userinfo){
                for(var key in userinfo){
                   userinfo[key]=this.decodeString(userinfo[key])
                }
                this.uname= userinfo.uname;
                
                $("#name").text(this.uname+" V");
            }
            //var a = localStorage.key;
            //console.log(a);
        },
        getLogin(){
            if(!this.uname){
                $("#name").click(()=>{
                   this.$router.push("/login")
                })
            }else{
                 $("#login").mouseenter(function(){
                    var li =$(this);
                    li.children("div").removeClass("my_display")
                    $("#login").addClass("my_wirte").children("a").addClass("my_wirte_a")
                    
                }).mouseleave(function(){
                    var li =$(this);
                    $("#login").removeClass("my_wirte").children("a").removeClass("my_wirte_a")
                    $(".islogin").addClass("my_display")
                })
                $(".Signout").click(()=>{
                    this.$store.commit("removeUser");
                    window.location.reload();
                })
            }

        }
       
    },
   
}


</script>
<style>

</style>


