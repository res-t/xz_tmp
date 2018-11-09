<template>
    <div class="app-register">
        <div class="register_block">
            <div class="logo_img">
                <router-link to="/index">
                      <img src="http://127.0.0.1:3000/img/logo.png" alt="">
                </router-link>
            </div>
            <h4 class="register_title">注册小米账号</h4>
            <form method="post">
                <div class="register_input_block">
                    <h4 class="input_title">国家/地区</h4>
                    <div class="my_Country">
                        <input type="text" id="Country" name="myCountry" value="  中国" readonly >
                        <a href="javascript:"><img src="http://127.0.0.1:3000/img/xiala.png" alt="" class="xiala_btn"></a>
                        <div class="Country_detail my_display">
                            <input type="text" class="search">
                            <div class="pl10 my_Country_header" >常用</div>
                            <ul class="Country_list">
                                <li>中国</li>
                                <li>中国台湾</li>
                                <li>中国香港</li>
                                <li>Brazil</li>
                                <li>India</li>
                                <li>Indonesia</li>
                                <li>MalaySia</li>
                                <li>日本</li>
                                <li>英国</li>
                                <li>韩国</li>
                            </ul>
                    </div>
                </div>
                <div class="region_tip_text">成功注册帐号后，国家/地区将不能被修改</div>
                        <div class="phone_block">
                            <h4 class="input_title mt20">用户名</h4>
                            <input type="phone" name="uname" id="uname" autocomplete="off" placeholder="请输入用户名" v-model="uname">
                            <h4 class="input_title mt20 pt20">手机号码</h4>
                            <input type="phone" name="myphone" autocomplete="off" id="phone_input" placeholder="请输入手机号码"  v-model="tele">
                            <h4 class="input_title mt40 pt20">密码</h4>
                            <input type="password" name="upwd" autocomplete="off" class="upwd"  placeholder="请输入密码至少6位" v-model="upwd">
                            <p class="input_title mt40 pt20" style="color:red; font-size:16px;">{{alertText}}</p>
                            <input type='button'  @click='register' id="btn" value="注册">
                        </div>
                </div>
           </form>
            <div class="xieyi">
                <img src="" alt="">
                <img src="http://127.0.0.1:3000/img/zct.png" alt="" style=" vertical-align: middle">
                注册帐号即表示您同意并愿意遵守小米 <a href="#"><b>用户协议</b></a> 和 <a href="#"><b>隐私政策 </b></a>
            </div>
        </div>
        <div class="my_footer-R">
                <ul>
                <li>
                    <a href="#" class="anow">简体</a>
                    |
                </li>
                <li>
                    <a href="#">繁体</a>
                    |
                </li>
                <li>
                    <a href="#">English</a>
                    |
                </li>
                <li>
                    <a href="#">常见问题</a>
                    |
                </li>
                <li>
                    <a href="#">隐私政策</a>
                </li>
                </ul>
        </div>
        <div>
            <p class="beianhao">
                小米公司版权所有-京ICP备10046444-
                <a href="#" class="c">
                    <span>
                    <img src="http://127.0.0.1:3000/img/bq.png" alt="">
                    </span>
                    京公网安备11010802020134号
                </a>
                -京ICP证110507号
            </p>
        </div>
        <div class="tiao_block  my_display">
             <div class="tiaozhuan animated rotateIn">
                 <p> <span style="color:#ff6700">恭喜</span><br>
                     {{uname}} 注册成功，成为米粉</p>
                 <img src="http://127.0.0.1:3000/img/more-miui.jpg" alt="" class="mt10 animated zoomInUp"><br>
                 <router-link to="/login" class="tiao_btn">{{as}}秒后跳转到登录页面</router-link>
             </div>
        </div>
    </div>
</template>
<script>
import '../../public/css/register.css'
export default {
    data(){
        return{
            uname:'哈哈哈',
            tele:'',
            upwd:'',
            alertText:'',
            as:5,
            timer:{},
        }
    },
    mounted(){
        this.Regin();
    },
    methods:{
        Regin(){
            //国家
            $("#Country").mousedown(function(){
                $('.Country_detail').removeClass("my_display")
            })
            $('.xiala_btn').mousedown(function(){
                $('.Country_detail').removeClass("my_display")
            })
            $(".Country_list>li").click(function(){
                var li =$(this);
                $('#Country').val(li.text())
                $('.Country_detail').addClass("my_display")
            })
        },
        /**注册请求 */
        register(){
            var china=$('#Country').val()
            var url='http://127.0.0.1:3000/reg'
            //var params={
             //   myCountry:china,
             //   uname:this.uname,
             //   phone:this.tele,
            //    upwd:this.upwd
            //}
             var params = new URLSearchParams();
                params.append('myCountry', china);       //你要传给后台的参数值 key/value
                params.append('uname', this.uname);
                params.append('myphone', this.tele);
                params.append('upwd', this.upwd);

                 console.log(china,this.uname,this.tele,this.upwd)
            this.$http({
                method:'post',
                url:url,
                data:params
            }).then(result=>{
                this.alertText=result.data.msg;
                console.log(result.data.msg);
                this.code=result.data.code;
                console.log(this.code);
                if(this.code==404){
                   setInterval(()=>{
                       this.as--;
                       if(this.as<0){this.as=0}
                   },1000)
                   setTimeout(function(){
                        $(".tiao_block").removeClass("my_display");
                   },0)
                   setTimeout(()=>{
                       this.$router.push("/login")
                   },5000)
                }
               
          })
        }
    },
    beforeDestroy(){
        clearInterval(timer);
    }
}
</script>
<style>
    input:-webkit-autofill,input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
        background: #ffff !important;
    }
    .tiao_block{
        width:100%;
        height:100%;
        background:rgba(0, 0, 0, .4);;
        position: fixed;
        top: 0;
        z-index: 10;
    }
    .tiaozhuan{
        width: 600px;
        height: 300px;
        margin: 0 auto;
        margin-top: 190px;
        background: #fff;
        text-align: center;
    }
    .tiaozhuan>p{
        padding-top: 20px;
        font-size: 20px;
    }
    .tiao_btn{
        display: inline-block;
        width: 140px;
        height: 40px;
        background: #ff6700;
        color:#fff;
        line-height: 3;
        border-radius: 5%;
    }
</style>