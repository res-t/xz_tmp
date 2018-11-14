<template>
    <div class="app-Settlement">
        <div class="Settlement">
            <div class="set-hander">
                <div class="set-container">
                    <!--logo-->
                    <div class="set-logo">
                        <router-link to="/index">
                            <img src="http://127.0.0.1:3000/img/zclogo.png" alt="">
                        </router-link>
                    </div>
                    <div class="set-title">
                        <h3>我的购物车</h3>
                    </div>
                    <!--没有用过登录-->
                    <div :class="[{'set-topbar-info':true},{'my_display':setActive}]">
                        <router-link to="/login">登录</router-link>
                        <span class="sep">|</span>
                        <router-link to="/register">注册</router-link>
                    </div>
                    <!--用户已登录-->
                    <div :class="[{'set-topbar-info':true},{'my_display':!setActive}]">
                        <a href="#" id="topbar-uname">用户名</a>
                        <span class="sep ml10">|</span>
                        <a href="#">我的订单</a>
                    </div>
                </div>
            </div>
            <div>
                <!--无购物-->
                <div :class="[{'cart-empty':true},{'my_display':!cart}]">
                    <div class="cart-img">
                            <h2>您的购物车还是空的！</h2>
                            <p class="loginDesc">登录后将显示您之前加入的商品</p>
                            <router-link to="/login" class="loginGO">立即登录</router-link>
                            <router-link to="/register" class="go-shop">马上去购物</router-link>
                    </div>
                </div>
                <!--有物品-->
                <div :class="[{'cart-Commodity':true},{'my_display':cart}]">
                    <div class="list-head clearfix">
                        <div class="col-check">
                            <i class="icon-quan" @click="selection()" :class="{'icon_color':ceshi.length==products.length}">✔</i> 全选
                        </div>
                        <div class="col col-img">&nbsp;</div>
                        <div class="col col-name">商品名称</div>
                        <div class="col col-price">单价</div>
                        <div class="col col-num">数量</div>
                        <div class="col col-total">小计</div>
                        <div class="col col-action">操作</div>
                    </div>
                    <div :class="[{'list-body':true},{'my_display':cart}]">
                        <div class="body-item">
                            <div class="item-table" v-for="(item,i) in products" :key="item.id" @click="massage3(i)">
                                <div class="item-row clearfix">
                                    <div class="col col-check">
                                        <i :class=" [{'i_icon-i':true},{'icon_color':ceshi.indexOf(i)>=0}]" @click="setClick(i)" >✔</i>
                                    </div>
                                    <div class="col col-img">
                                        <a href="#">
                                            <img :src="item.product_img" alt="" style="width:80px;height:80px">
                                        </a>
                                    </div>
                                    <div class="col col-name">
                                        <h3 class="product-name">
                                            <a href="#">{{item.product_title}}</a>
                                        </h3>
                                    </div>
                                    <div class="col col-price mt30"> {{item.product_price}}元 </div>
                                    <div class="col col-num">
                                        <div class="change-goods-num clearfix mt20">
                                            <a href="javascript:" @click="numsub(i)">-</a>
                                            <input type="text"  v-model="item.num">
                                            <a href="javascript:" @click="numSum(i)" >+</a>
                                        </div>
                                    </div>
                                    <div class="col col-total mt30 zongjia">{{danjia}}元<p class="pre-info">  </p> 
                                    </div>
                                    <div class="col col-action shanchu-p">
                                        <div class="shanchu" @click=" shanchu(item.id)">✖</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="cart-bar clearfix mt20">
                        <div class="section-left">
                            <a href="#" class="back-shopping">继续购物</a>
                            <span class="cart-total">共 
                                <span class="numbuter-cart">1</span> 件商品，已选择 
                                    <span class="numbuter-cart">1</span>  件</span>
                        </div>
                        <span class="total-price-cart">
                            合计： <em >{{total}}</em>元
                        </span>
                        <a href="#" class="jiesuan-price">去结算</a>
                    </div>
                </div>
            </div>
            <div class="tuijian">
                    <h2 class="xm-recommend-title"><span>为您推荐</span></h2>
            </div>
            <div class="tuijian-product">
                <ul class="clearfix t-product">
                    <li style="overflow: hidden;" class="mb15" v-for="phone in Onefloor" :key="phone.id">
                            <div class="qcontainer">
                                <div class="film">
                                    <router-link :to="'/shopdetail/'+phone.parent_id" class="face front" style="display: block ;text-align:center;width:234px;   height:300px">
                                          <div :class="[{'flg_new':true},{'my_display':phone.sale}]">新品</div>
                                          <div class="my_kill" v-show="phone.sale">减{{phone.old_price-phone.price}}元</div>
                                        <img :src="phone.img_url" class="xuanzhuan_img">
                                        <p class="foot-p">{{phone.title}}</p>
                                        <span class="xiaotitle">{{phone.point_d}}</span>
                                         <div class="my_money">{{phone.price}}元<del> {{phone.old_price}}</del></div>
                                    </router-link>
                                    <div class="face back">
                                        <router-link :to="'/shopdetail/'+phone.parent_id" style="display: block ;text-align:center;width:234px;height:250px">
                                            <img :src="phone.img_url" class="xuanzhuan_img">
                                            <p class="foot-p">{{phone.title}}</p>
                                            <span class="xiaotitle">{{phone.point_d}}</span>
                                            <div class="my_money mt10">{{phone.price}}元</div>
                                        </router-link>
                                        <a href="#" class="evaluate">
                                            <p style=" white-space:nowrap; text-overflow:ellipsis;overflow:hidden;">评价:{{phone.comment}}</p>
                                            <p  class="mt10">来自：{{phone.user_name}}的评价</p>
                                        </a>
                                    </div>
                                </div>
                            </div> 
                    </li>
                </ul>
            </div>
            <xm-footer></xm-footer>
        </div>
    </div>
</template>
<script>
 import xmFooter from '@/components/footer.vue'
import '../../public/css/Settlement.css'
export default {
    data(){
        return{
            uname:'',
            loginState:true,
            products:{},
            Onefloor:'',
            setActive:[],
            cart: false,
            ceshi:[],
            number:0
            
        }
    },
    mounted(){
        this.getUname();
        this.islogIn();
        this.shopCart();
        this. firstFloor()
    },
    methods:{
         getUname(){
            var userinfo = JSON.parse( localStorage.getItem('user'));
            if(userinfo){
                for(var key in userinfo){
                   userinfo[key]=this.decodeString(userinfo[key])
                }
                this.uname= userinfo.uname;
                //console.log(this.uname);
                $("#topbar-uname").text("用户名：  "+this.uname)
            }
        },
        islogIn(){
           if(this.uname){
            this.loginState=true;
           }else{
                this.loginState= false;
           }
        },
        shopCart(){
            var url ="http://127.0.0.1:3000/shopcart?name=";
                url+=this.uname;
            this.$http.get(url).then(result=>{
                console.log(result.data);
                this.products=result.data;
                if(this.products.length!=0){
                      this.cart=false;
                   //   console.log(1234434)
                }else{
                    this.cart=true
                }
                console.log("cart",this.cart)
             })
        },
        
        massage3: function(i) {
           //获取点击对象      
           //var el = event.currentTarget;
         //  console.log(el.innerText);
        
       //   this.ceshi2.push(this.products[i].product_price);
          
        },
        
        setClick:function(i){
            //console.log(this.ceshi)
            //    console.log(i)
            if(this.ceshi.indexOf(i)==-1){
            this.ceshi.push(i);

            }else{
            //    console.log(this.ceshi)
            //    console.log(i)
            this.ceshi.splice(this.ceshi.indexOf(i),1)
            }
        },
        selection:function(){
            if(this.ceshi.length<1){
                for(var i=0;i<this.products.length;i++){          
                        this.ceshi.push(i);
                }
            }else{
                this.ceshi=[];
            }
            
           // 
        },
        firstFloor(){
            var url ="http://127.0.0.1:3000/phonefloor";
            this.$http.get(url).then(result=>{
                //console.log(result);
                this.Onefloor = result.data;
                //console.log(this.Onefloor);
            })
        },
        shanchu(i){

          // console.log(i);
            confirm("是否删除？")
            if(!confirm) {
                return
            }else{
                  var url ="http://127.0.0.1:3000/del?id="
                  url+=i;
                  this.$http.get(url).then(result=>{
                 // console.log(result);
                })
            }
        },  
        numSum:function(i){
            this.products[i].num++;
        },
        numsub(i){
             this.products[i].num--;
             if(this.products[i].num==0){
                 this.products[i].num==1;
             }
        }
    },
    components:{
        xmFooter
    },
    computed:{
          total:function(){            
            var sum = 0     
              for(var i= 0;i<this.ceshi.length;i++){
                  sum+=this.products[this.ceshi[i]].product_price* this.products[this.ceshi[i]].num;
              }
              return sum;        
          },
          danjia:function(){
               var xiaoji =0
                for(var i= 0;i<this.ceshi.length;i++){
                xiaoji+=this.products[i].product_price *this.products[i].num;
                }
            return xiaoji; 
            //return this.products[1].product_price *this.products[1].num;
          }
        
    }
}
</script>
<style>
    .icon_color{
        background: #ff6700;
    }
</style>


