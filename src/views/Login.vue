<template>
  <div class="app-login">
     <div class="header">
        <router-link to="/index" class="logo">
        <img src="http://127.0.0.1:3000/img/logo12.png" alt="">
        </router-link>
    </div>
    <div class="bod">
        <div class="layout" id="layout">
        <div>
            <div class="layout-div" id="log1">
            <a href="#" class="now" id="zh">账号登陆</a>
            <span>|</span>
            <a href="#" id="sm">扫码登陆</a>
            </div>
        </div>
        <!--账号登陆-->
        <div class="inpu" id="inpu">
             <form method="post">
                <div>
                    <input type="text" placeholder="邮箱/手机号码/小米ID" id="uphone" v-model="uphone">
                </div>
                <div>
                <input type="password" autocomplete="ffo" placeholder="密码" name="upwd" v-model="upwd" class="myupwd">
                </div>
                <div>
                    <input type="button" id="btn_login" @click="islog()" class="login" value="登陆">
                </div>
             </form>
            <div class="fle mt10">
                <router-link to='/register' v-show='codeStaic==400'>{{alertText}}</router-link>
                <router-link to='/index' v-show='codeStaic==200'>{{alertText}}</router-link>
                <router-link to='/index' v-show='codeStaic==401'>{{alertText}}</router-link>
                <router-link to='/index' v-show='codeStaic==402'>{{alertText}}</router-link>
                <router-link to='/index' v-show='codeStaic==403'>{{alertText}}</router-link>
            <div style="float:right">
                <a href="#">立即注册</a>
                <span>|</span>
                <a href="#">忘记密码?</a>
            </div>
            </div>
            <!--其他登陆方式-->
            <fieldset class="bor">
            <legend>其他方式登陆</legend>
            </fieldset>
            <div class="ico">
            <a href="#">
                <i></i>
            </a>
            <a href="#">
                <i></i>
            </a>
            <a href="#">
                <i></i>
            </a>
            <a href="#">
                <i></i>
            </a>
            </div>
        </div>
        <!--扫码登陆-->
        <div class="sma dis" id="sma">
            <img src="http://127.0.0.1:3000/img/sma.jpg" alt="">
            <p>
            使用<span>小米商城APP</span>扫一扫
            </p>
            <p>
            小米手机可打开「设置」>「小米帐号」扫码登录
            </p>
        </div>
        </div>
    </div>
    <div class="foot">
        <div style="text-align: center;">
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
  </div>
</template>
<script>
import '../../public/css/login.css'
export default {
    data(){
        return{
            uphone:'',
            upwd:'',
            alertText:'',
            codeStaic:""
        }
    },
    mounted(){
        this.logIn()
        console.log(this.$store.getters.getnum)
        localStorage.setItem('num',123)
        
    },
    methods:{
        logIn(){
            $("#zh").click(function(e){
            e.preventDefault();
            $("#inpu").removeClass("dis");
            $("#sma").addClass("dis")
            $(this).addClass("now");
            $("#sm").removeClass("now");
            })
            $("#sm").click(function(e){
            e.preventDefault();
            $("#sma").removeClass("dis");
            $("#inpu").addClass("dis");
            $(this).addClass("now");
            $("#zh").removeClass("now");
            })
            $(".ico>a").click(function(e){
            e.preventDefault();
            })
        },
        /**登录请求 */
        islog(){
            var url ="http://127.0.0.1:3000/login"
             var params = new URLSearchParams();
                params.append('uphone', this.uphone);       //你要传给后台的参数值 key/value
                params.append('upwd',this.upwd);
               // console.log(this.uphone,this.upwd);
            this.$http({
                method:"post",
                url:url,
                data:params
            }).then(result=>{
                this.codeStaic=result.data.code;
                //console.log(this.codeStaic);
                //console.log(result.data.code)
                this.alertText=result.data.msg;
                console.log(result.data.data[0]);
                if(result.data.code==200){
                    var SaveData = result.data.data[0];
                    for(var key in SaveData){
                        SaveData[key] = this.encryptString(SaveData[key]);
                    }
                    this.$store.commit("setUser",SaveData);
                    //console.log(JSON.parse( localStorage.getItem('user')));
                    this.$router.push("/index");
                }
            })
        },
        /**保存用户*/
     
    }
}
</script>
<style>

</style>


