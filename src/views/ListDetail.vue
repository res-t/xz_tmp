<template>
    <div class="app-listdetail">
        <xm-header></xm-header>
        <div class="content">
            <div class="nav-top">
            <router-link to="/shoplist">首页 /</router-link>
            <a href="javascript:">配件 /</a>
            <a href="javascript:">智能家居 /</a>
            <a href="javascript:">小米净水器滤芯 PP棉</a>
            </div>
            <div class="product-detail">
                <div class="goods-pic-box">
                    <!--goods-big-pic-->
                    <div class="goods-big-pic">
                        <img :src="detatext.big_img" alt="">
                    </div>
                    <!---goods-small-pic clearfix-->
                    <div class="goods-small-pic clearfix">
                        <ul class="goodsPicList">
                            <li class="current">
                                <img :src="detatext.small_img" alt="">
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="goods-info-box">
                    <div class="goodsInfoBlock">
                    <p class="goods-name">{{detatext.title}}</p>
                    <p class="gods-subtitle">
                        <span style="color:#ff6700">【小米11.11狂欢节，11月1日立减4元】</span>
                        {{detatext.point_d}}
                    </p>
                    <p class="goods-info-head-tip">
                        <ul>
                            <li class="other">
                                <i>折扣</i>
                            </li>
                        </ul>
                    </p>
                    <div class="goods-info-address clearfix">
                        <div class="user-default-address-L clearfix">
                            <span class="sale">有货</span>
                            <div class="address-info" style="margin-left: 20px; float: left;">
                                <span class="item-L">济南市</span>
                                <span class="item-L">山东</span>
                                <span class="item-L;">历下区</span>
                                <span class="item-L">姚家街道</span>
                            </div>
                            <span class="xiala">∨</span>
                        </div>
                    </div>
                    <div class="goods-info-head-price clearfix">
                            <b class="mi_goodsPrice">{{detatext.price}}</b><i class="yuan"> 元</i>
                        
                    </div>
                    <div class="goods-info-head-cart">
                            <ul class="btn-mai">
                                <li>
                                    <a href="javascript:" @click="addCart()">立即购买</a>
                                </li>
                                <li>
                                    <a href="#">
                                        ❤喜欢
                                    </a>
                                </li>
                            </ul>
                    </div>
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
                    </div>
                    <div class="goods-info-head-userfaq">
                        <ul>
                            <li>
                                <a href="#">评价 2.6万</a>
                            </li>
                            <li>
                                <a href="#">提问 6</a>
                                </li>
                            <li style="border:none">
                                <a href="#">满意度 80%</a>
                            </li>
                        </ul>
                    </div>
                    <div class="mt10 more">
                        <a href="#">☴ 查看更多智能家居</a>
                    </div>    
                    </div>
                </div>
            </div>
            <div class="goods-detail">
            <div style="width:100%;background:#fff;border-top:1px solid #666">
                    <div class="goods-detail-nav">
                        <ul class="nav-list">
                            <li>
                                <a href="#" class="a-active">概述</a>
                            </li>
                            <li>
                                <a href="#">评价晒单</a>
                            </li>
                            <li>
                                <a href="#">商品提问</a>
                            </li>
                        </ul>
                    </div>
            </div>
            <div class="godds-img-detail">
                <img src="http://127.0.0.1:3000/img/ppro.jpg" alt="">
            </div>
            <div class="goods-img-price">
                    <img src="http://127.0.0.1:3000/img/price.jpg" alt="">
            </div>
            <div class="goods-img-shiyong">
                    <img src="http://127.0.0.1:3000/img/shiyong.jpg" alt="">
            </div>
            <div class="goods-img-zhiliang">
                    <img src="http://127.0.0.1:3000/img/zhiliang.jpg" alt="">
            </div>
            <div class="goods-img-xingjiabi">
                    <img src="http://127.0.0.1:3000/img/xingjiabi.jpg" alt="">
            </div>
            <div class="goods-img-zhuyi">
                    <img src="http://127.0.0.1:3000/img/zhuyishix.jpg" alt="">
            </div>
            <div class="goods-img-lianxi">
                    <img src="http://127.0.0.1:3000/img/lianxi.jpg" alt="" class="lian-img">
            </div>
            </div>
            <div class="nav-title-p">
                评价晒单
            </div>
            <div class="pinglunqu-l">
            <ul>
                    <li class="Review-content" >
                        <!---头像-->
                        <img src="http://127.0.0.1:3000/img/hq_portrait.jpg" alt="" class="portrait">
                        <div class="comment-kuai">
                            <div class="my_comment_top">
                                <!--用户名-->
                                    <a href="#" class="userName">慧 贤 吖??</a>
                                    <p class="fabiao_time">星期二</p>
                                    <div class="chaozan">
                                        <img src="http://127.0.0.1:3000/img/weixiao.png" alt="" class="weixiao">超爱
                                    </div>
                            </div>
                            <a href="#" class="comment-txt">
                                    手机好不好看照片就知道了(∩˃o˂∩)♡ 小米6到小米手环3再到小米8青春版。 忠实米粉哟，客服小姐姐我漂亮吗 
                            </a>
                            <div class="comment-txt_img">
                                <img src="http://127.0.0.1:3000/img/wh_pinglun.jpg" alt="" class="ml0">
                                <img src="http://127.0.0.1:3000/img/pinglunimg.jpg" alt="">
                                <img src="http://127.0.0.1:3000/img/154pinglun.jpg" alt="">
                            </div>
                            <div class="heard_dian">
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/dianzan.png" alt=""> <span class="diancishu">89</span>
                                </a>
                            </div>
                            <input type="text" placeholder="回复楼主" class="comment_input"><a href="#" class="huifu" >回复</a>
                            <div style="width:649px;height:407px;">
                                <div class="comment-anwser">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                                <div class="comment-anwser mt0">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                                <div class="comment-anwser mt0">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
                    <li class="Review-content mt10" >
                        <!---头像-->
                        <img src="http://127.0.0.1:3000/img/hq_portrait.jpg" alt="" class="portrait">
                        <div class="comment-kuai">
                            <div class="my_comment_top">
                            <!--用户名-->
                                <a href="#" class="userName">慧 贤 吖??</a>
                                <p class="fabiao_time">星期二</p>
                                <div class="chaozan">
                                    <img src="http://127.0.0.1:3000/img/weixiao.png" alt="" class="weixiao">超爱
                            </div>
                            </div>
                            <a href="#" class="comment-txt">
                                    手机好不好看照片就知道了(∩˃o˂∩)♡ 小米6到小米手环3再到小米8青春版。 忠实米粉哟，客服小姐姐我漂亮吗 
                            </a>
                            <div class="comment-txt_img">
                                <img src="http://127.0.0.1:3000/img/wh_pinglun.jpg" alt="" class="ml0">
                                <img src="http://127.0.0.1:3000/img/pinglunimg.jpg" alt="">
                                <img src="http://127.0.0.1:3000/img/154pinglun.jpg" alt="">
                            </div>
                            <div class="heard_dian">
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/dianzan.png" alt=""> <span class="diancishu">89</span>
                                </a>
                            </div>
                            <input type="text" placeholder="回复楼主" class="comment_input"><a href="#" class="huifu" >回复</a>
                            <div style="width:649px;height:407px;">
                                <div class="comment-anwser">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                                <div class="comment-anwser mt0">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                                <div class="comment-anwser mt0">
                                    <img src="http://127.0.0.1:3000/img/logo.png" alt="" class="answer-img">
                                    <h3 class="official-name">官方回复</h3>
                                    <p class="answer-p"> 
                                        小轩窗，正梳妆，柔光自拍好漂亮~~如果谁能送我一个小米8，我就，    我就。。跟他一起拍照(✿◡‿◡)感谢您对小米的支持。
                                        <a href="#">
                                        <img src="http://127.0.0.1:3000/img/dianzan.png" alt="" class="xiaoshou"> <span class="diancishu">89</span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                            
                        </div>
                    </li>
            </ul>
            <div class="now-pingjia">
                <ul>
                    <li class="mt40">
                        <div class="ml40 pt20">
                                <h4 class="time">12小时前</h4>
                                <p class="mt10"> <a href="#" class="pinglun-content">安装简单容易</a></p>
                                <div class="yonghu mt10">
                                    <span class="left">来自于 863527378</span>
                                    <span class="right">是否有帮助?</span>
                                </div>
                        </div>
                    </li>
                    <li class="">
                            <div class="ml40 pt40">
                                <h4 class="time">12小时前</h4>
                                <p class="mt10"> <a href="#" class="pinglun-content">安装简单容易</a></p>
                                <div class="yonghu mt10">
                                    <span class="left">来自于 863527378</span>
                                    <span class="right">是否有帮助?</span>
                                </div>
                            </div>
                    </li>
                    <li class="">
                            <div class="ml40 pt40">
                                <h4 class="time">12小时前</h4>
                                <p class="mt10"> <a href="#" class="pinglun-content">安装简单容易</a></p>
                                <div class="yonghu mt10">
                                    <span class="left">来自于 863527378</span>
                                    <span class="right">是否有帮助?</span>
                                </div>
                            </div>
                    </li>
                    <li class="">
                            <div class="ml40 pt40">
                                <h4 class="time">12小时前</h4>
                                <p class="mt10"> <a href="#" class="pinglun-content">安装简单容易</a></p>
                                <div class="yonghu mt10">
                                    <span class="left">来自于 863527378</span>
                                    <span class="right">是否有帮助?</span>
                                </div>
                            </div>
                    </li>
                </ul>
            </div>
            </div>
        </div>
        <xm-footer></xm-footer>
    </div>
</template>
<script>
import '../../public/css/listdetail.css'
import xmHeader from '@/components/header.vue'
import xmFooter from '@/components/footer.vue'
export default {
    data(){
        return{
            detatext:"",
            uname:""
        }
    },
    mounted(){
        this.getList();
         this.getUname();
    },
    methods:{
        getList(){
            var url = "http://127.0.0.1:3000/listdetail?id=";
                url+=this.$route.params.id;
            this.$http.get(url).then(result=>{
                console.log(result);
                this.detatext=result.data[0];
             
                //console.log(this.detatext.title);

               // console.log(result.data[0].title)
            })
        },
        getUname(){
            var userinfo = JSON.parse( localStorage.getItem('user'));
            if(userinfo){
                for(var key in userinfo){
                   userinfo[key]=this.decodeString(userinfo[key])
                }
                this.uname= userinfo.uname;
                //console.log(this.uname);
            }
        },
        addCart(){
                var url = "http://127.0.0.1:3000/addcart"
                    var params = new URLSearchParams();
                    params.append('name',this.uname);
                    params.append('title',this.detatext.title);
                    params.append('price',this.detatext.price);
                    params.append('img',this.detatext.big_img);
                    //console.log(this.uname,(this.detaText.uname+this.banben),(parseInt(this.total)+parseInt(this.detaText.price)),this.imgUrl[0])
                    this.$http({
                    method:'post',
                    url:url,
                    data:params
                }).then(result=>{
                     console.log(result);
                })
        }
    },
    components:{
        xmHeader,
        xmFooter
    }
}
</script>
<style>

</style>


<!--


-->