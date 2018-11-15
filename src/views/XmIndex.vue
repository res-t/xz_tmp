<template>
    <div class="app-index">
        <div class="hot_banner">
            <a href="#" class="hot_banner_link"></a>
        </div>
        <xm-header></xm-header>
        <div class="my_swipe">
            <div id="container_img-index">
                <a class="item-index" href="#"  v-for="item in imgList" :key="item.id"><img :src="item"></a>
               
        
                <div class="btn-index prev-index">&lt;</div>
                <div class="btn-index next-index">&gt;</div>
        
                <ul id="tabs-index">
                    <li class="tab-index active-index"></li>
                    <li class="tab-index"></li>
                    <li class="tab-index"></li>
                    <li class="tab-index"></li>
                    <li class="tab-index"></li>
                </ul>
                <div class="my_swipe_href">
                    <ul>
                         <li  v-for="title in shoptitle" :key="title.id" id="title" :data-target="'#product'+title.id">
                             <a href="#">{{title.name}} <span>&gt;</span></a>
                         </li>
                    </ul>
                    <div class="my_swipe_href_xq">
                        <!--phone_detail-->
                        <div id="product1" class="my_display">
                            <ul v-for="(item,i) in navlist" :key="i">
                                <li v-for="(tmp) in item" :key="tmp.id">
                                    <router-link :to="'/shopdetail/'+tmp.id">
                                        <img :src='tmp.image' alt="" class="my_swipe_href_img">
                                        {{tmp.name}}
                                    </router-link>
                                </li>
                            </ul>
                        </div>
                        <!--TV box-->
                        <div id="product2" class="my_display">
                                <ul v-for="(tv,i) in boxlist" :key="i">
                                    <li v-for="tvbox in tv" :key="tvbox.id">
                                        <router-link :to="'/shopdetail/'+tvbox.id">
                                            <img :src='tvbox.image' alt="" class="my_swipe_href_img">
                                        {{tvbox.name}}
                                        </router-link>
                                    </li>
                                </ul>
        
                        </div>
                        <!--Notebooktablet-->
                        <div id="product3" style="width: 510px" class="my_display">
                                <ul v-for="(computer,i) in  loptoplist" :key="i">
                                    <li v-for="loptop in computer" :key="loptop.id">
                                        <a href="#">
                                            <img :src='loptop.image' alt="" class="my_swipe_href_img">
                                           {{loptop.name}}
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <!--Appliance wiring board-->
                        <div id="product4" style="width:758px" class="my_display">
                                <ul v-for="(patch,i) in patchlist" :key="i">
                                    <li v-for="pth in patch" :key="pth.id">
                                        <router-link :to="'/shoplist/'+pth.id">
                                            <img :src='pth.image' alt="" class="my_swipe_href_img">
                                            {{pth.name}}
                                        </router-link>
                                    </li>
                                </ul>
                        </div>
                        <!--Travel wear-->
                        <div id="product5" style="width: 510px" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shouhuan3.jpg" alt="" class="my_swipe_href_img">
                                            手环手表
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/VRyitiji80.jpg" alt="" class="my_swipe_href_img">
                                            VR
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/scooter-80.jpg" alt="" class="my_swipe_href_img">
                                            平衡车
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/scooter2-80.jpg" alt="" class="my_swipe_href_img">
                                            滑板车
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/zxc80-80.jpg" alt="" class="my_swipe_href_img">
                                            自行车
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/chezainibianqi80.jpg" alt="" class="my_swipe_href_img">
                                            车载逆变器
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/peijian80.jpg" alt="" class="my_swipe_href_img">
                                            平衡车配件
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/mirror-80.jpg" alt="" class="my_swipe_href_img">
                                            智能后视镜
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/chezaikongjing.jpg" alt="" class="my_swipe_href_img">
                                            车载空气净化器
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <!--Intelligent router-->
                        <div id="product6" style="width: 265px" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/luyouqi4_80.jpg" alt="" class="my_swipe_href_img">
                                            路由器
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/duijiangji.jpg" alt="" class="my_swipe_href_img">
                                            对讲机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/zhinengjiating80.jpg" alt="" class="my_swipe_href_img">
                                            智能家庭
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/wurenji80.jpg" alt="" class="my_swipe_href_img">
                                            无人机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/camera-head-80.jpg" alt="" class="my_swipe_href_img">
                                            摄像机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/camera-small-80.jpg" alt="" class="my_swipe_href_img">
                                            照相机
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <!--Power supply accessories-->
                        <div id="product7" style="width: 758px" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/dianyuan2.100080.jpg" alt="" class="my_swipe_href_img">
                                            移动电源
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shujuxian-80.jpg" alt="" class="my_swipe_href_img">
                                            数据线
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/chezaichongdianqi80.jpg" alt="" class="my_swipe_href_img">
                                            车充
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/chongdianqi-80.jpg" alt="" class="my_swipe_href_img">
                                            充电器
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/wuxianchong80.jpg" alt="" class="my_swipe_href_img">
                                        无线充
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/7Battery1.jpg" alt="" class="my_swipe_href_img">
                                            电池
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/zipaigan80.jpg" alt="" class="my_swipe_href_img">
                                            自拍杆
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/cunchu80x80.jpg" alt="" class="my_swipe_href_img">
                                            存储卡
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/baohu.jpg" alt="" class="my_swipe_href_img">
                                            手机壳
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/tiemo.jpg" alt="" class="my_swipe_href_img">
                                            手机贴膜
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shoujizhijia80.jpg" alt="" class="my_swipe_href_img">
                                            手机支架
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/pingban80.jpg" alt="" class="my_swipe_href_img">
                                            平板配件
                                        </a>
                                    </li>   
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/heishashoubing80.jpg" alt="" class="my_swipe_href_img">
                                            黑鲨配件
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/qitapeijian80.jpg" alt="" class="my_swipe_href_img">
                                            其他配件
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <!--Healthy children-->
                        <div id="product8" style="width: 758px" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/xishouji.jpg" alt="" class="my_swipe_href_img">
                                            洗衣机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/tixvdao80.jpg" alt="" class="my_swipe_href_img">
                                            剃须刀
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/yashua80.jpg" alt="" class="my_swipe_href_img">
                                            牙刷
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/scale.jpg" alt="" class="my_swipe_href_img">
                                            体重秤
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/xueyaji80.jpg" alt="" class="my_swipe_href_img">
                                        血压计
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/tiwenji80.jpg" alt="" class="my_swipe_href_img">
                                            体温计
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/mitugushi-80.jpg" alt="" class="my_swipe_href_img">
                                            早教启智
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/XIAOFEIJIBASHI.jpg" alt="" class="my_swipe_href_img">
                                            遥控电动
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/toyblock2-80.jpg" alt="" class="my_swipe_href_img">
                                            益智积木
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shoubiao280.jpg" alt="" class="my_swipe_href_img">
                                            儿童手表
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/huabanche80.jpg" alt="" class="my_swipe_href_img">
                                            儿童滑板车
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/ertongshubao.80.jpg" alt="" class="my_swipe_href_img">
                                            儿童书包
                                        </a>
                                    </li>   
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/laganxiang.jpg" alt="" class="my_swipe_href_img">
                                        米兔拉杆箱
                                        </a>
                                    </li>    
                                </ul>
                        </div>
                        <!--Earphone sound-->
                        <div id="product9" style="width: 265px" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/erji80.jpg" alt="" class="my_swipe_href_img">
                                            线控耳机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/80xiangquan.jpg" alt="" class="my_swipe_href_img">
                                            蓝牙耳机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/toudai80.jpg" alt="" class="my_swipe_href_img">
                                            头戴耳机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/pinpai80.jpg" alt="" class="my_swipe_href_img">
                                            品牌耳机
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/xiaogangpao2-hei-80.jpg" alt="" class="my_swipe_href_img">
                                            蓝牙音箱
                                        </a>
                                    </li>
                                </ul>
                        </div>
                        <!--Life bag-->
                        <div id="product10" class="my_display">
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/xiangbao-80.jpg" alt="" class="my_swipe_href_img">
                                            双肩包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/qianbao-80.jpg" alt="" class="my_swipe_href_img">
                                            钱包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/kouzhaofenlei.jpg" alt="" class="my_swipe_href_img">
                                            钱包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shounabao-80.jpg" alt="" class="my_swipe_href_img">
                                            收纳包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/lvxingxiang.jpg" alt="" class="my_swipe_href_img">
                                            旅行包
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shenhuahui80.jpg" alt="" class="my_swipe_href_img">
                                            运动鞋
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/txv80.jpg" alt="" class="my_swipe_href_img">
                                            服饰
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/tyj80.jpg" alt="" class="my_swipe_href_img">
                                            眼镜
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/chuangdian-80-80.jpg" alt="" class="my_swipe_href_img">
                                            床垫
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/zhent.ou80.png" alt="" class="my_swipe_href_img">
                                            枕头
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/beizi8.0..png" alt="" class="my_swipe_href_img">
                                            被子
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/shafa.80.png" alt="" class="my_swipe_href_img">
                                        沙发
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/sijiantao-80-80.jpg" alt="" class="my_swipe_href_img">
                                            针织件套
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/jinmitu.jpg" alt="" class="my_swipe_href_img">
                                            首饰
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/luosidao-80.jpg" alt="" class="my_swipe_href_img">
                                            螺丝刀
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/bbbbei.jpg" alt="" class="my_swipe_href_img">
                                            保温杯
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/umbrella.jpg" alt="" class="my_swipe_href_img">
                                            伞
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/quwenqi.jpg" alt="" class="my_swipe_href_img">
                                            驱蚊器
                                        </a>
                                    </li>
                                </ul>
                                <ul>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/ukelele.jpg" alt="" class="my_swipe_href_img">
                                            尤克里里
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/maojinmaojin.jpg" alt="" class="my_swipe_href_img">
                                            毛巾/浴巾
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/mitu-80.jpg" alt="" class="my_swipe_href_img">
                                        米兔
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/qianzibi-80.jpg" alt="" class="my_swipe_href_img">
                                            签字笔
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <img src="http://127.0.0.1:3000/img/duoyongbijiben-80.jpg" alt="" class="my_swipe_href_img">
                                            笔记本
                                        </a>
                                    </li>
                                </ul>
        
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!--start-->
        <div class="my_homehero clearfix">
            <div class="my_homehero_ico">
                <div class="my_homehero_list">
                    <ul>
                        <li>
                            <a href="#">
                            <img src="http://127.0.0.1:3000/img/shouji.png" alt="" class="my_homehero_list_img">
                            <p>选购手机</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/lipin.png" alt="" class="my_homehero_list_img">
                                    <p>企业团购</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/fma.png" alt="" class="my_homehero_list_img">
                                    <p>F码通道</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/shoujika.png" alt="" class="my_homehero_list_img">
                                    <p>选购手机</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/huanxin.png" alt="" class="my_homehero_list_img">
                                    <p>以旧换新</p>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chongzhi.png" alt="" class="my_homehero_list_img">
                                    <p>充值话费</p>
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="my_ul_img_li ">
                        <ul>
                        <li class="">
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xiao8.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/hong6.jpg" alt="">
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jingshuiqi.jpg" alt="">
                            </a>
                        </li>
                        </ul>
                    </div>
            </div>
        </div>
        <!--end-->
        <!--start-->
        <div class="my_remai">
            <div class="my_remai_title">
                <h3>小米闪购</h3>
                <a href="javascript:" data-target="#remai2">&gt;</a><a href="javascript:" data-target="#remai1">&lt;</a>
            </div>
            <div class="my_remai_product">
                <div class="xm-flashPurchase-countdown">
                    <p class="time-title">20:00 场</p>
                    <img src="http://127.0.0.1:3000/img/shangou.png" alt="">
                    <p class="sub">距离开始还有</p>
                    <div class="countdown">
                        <span class="box lf">00</span>
                        <span class="dosh lf">:</span>
                        <span class="box lf minutes">00</span>
                        <span class="dosh lf">:</span>
                        <span class="box lf seconds">00</span>
                    </div>
                </div>
                
                <div id="remai1" class="my_Special_procduct ">
                    <div class="my_chezai">
                        <div class="my_kill">1元秒杀</div>
                        <a href="#">
                                <img src="http://127.0.0.1:3000/img/chezai.png" alt="">
                                <p>小米车载充电器快充班 银色</p>
                                <span>让爱车成为移动充电站</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>69元</del>
                                </div>
                        </a>

                    </div>
                    <div class="my_zipaigan">
                        <div class="my_kill">1元秒杀</div>
                        <a href="#">
                                <img src="http://127.0.0.1:3000/img/zipai.png" alt="">
                                <p>小米支架式自拍杆 灰色</p>
                                <span>解放双手，定格最美的镜头</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>89元</del>
                                </div>
                        </a>
                    </div>
                    <div class="my_maojin">
                        <div class="my_kill">1元秒杀</div>
                        <a href="#">
                                <img src="http://127.0.0.1:3000/img/maojin.png" alt="">
                                <p>最生活毛巾 青春系列 白色</p>
                                <span>三秒吸水，杀菌无刺激</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>49.9元</del>
                                </div>
                        </a>
                    </div>
                    <div class="my_deng">
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/deng.png" alt="" class="mt20">
                            <p>飞利浦智睿床头灯 白色</p>
                                <span>无极旋转掉光色调</span>
                                <div class="kill_price">
                                    <span>266元</span> 
                                    <del>299元</del>
                                </div>
                        </a>
                    </div>
                
                </div>
                <div id="remai2" class="my_Special_procduct my_display">
                    <div class="my_zipaigan">
                        <div class="my_kill">1元秒杀</div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/zipai.png" alt="">
                            <p>小米支架式自拍杆 灰色</p>
                            <span>解放双手，定格最美的镜头</span>
                            <div class="kill_price">
                                <span>1 元</span> 
                                <del>89元</del>
                            </div>
                        </a>
                    </div>
                    <div class="my_maojin">
                        <div class="my_kill">1元秒杀</div>
                        <a href="#">
                                <img src="http://127.0.0.1:3000/img/maojin.png" alt="">
                                <p>最生活毛巾 青春系列 白色</p>
                                <span>三秒吸水，杀菌无刺激</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>49.9元</del>
                                </div>
                        </a>
                    </div>
                    <div class="my_chezai">
                            <div class="my_kill">1元秒杀</div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
        
                    </div>
                </div>
            </div>
        </div>
        <!--手机楼层-->
        <div class="my_bgmi">
            <div>
                <a href="#"><img src="http://127.0.0.1:3000/img/bgmi8.jpg" alt=""> </a>
            </div>
        </div>
        <div class="phone_floor">
            <div class="phone_detail">
                <div class="phone_title">
                    <h3>手机</h3>
                    <a href="">
                        查看全部 <span>&gt;</span>
                    </a>  
                </div>
                <div class="xiaomimx3">
                    <a href="#"><img src="http://127.0.0.1:3000/img/xiaomimx3.jpg" alt=""></a>
                </div>
                <div class="phone_Model">
                    <ul>
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
            </div>
        </div>
        <!--家电louc-->
        <div class="appliances">
            <div class="appliances_img">
                <a href="#"> <img src="http://127.0.0.1:3000/img/jiadian.jpg" alt=""></a>
            </div>
            <div class="appliances_detail">
                <div class="appliances_title">
                    <h3>家电</h3>
                    <div>
                        <ul>
                            <li data-target="#Hot" class="my_mouse"><a href="javascript:">热门</a></li>
                            <li data-target="#audiovisual" class="appliances_title_font"><a href="#" >电视影像</a></li>
                            <li data-target="#computer"><a href="javascript:">电脑</a></li>
                            <li data-target="#furniture"><a href="javascript:">家具</a></li>
                        </ul>
                    </div>
                </div>
                <div class="appliances_detail_img">
                    <div>
                        <a href="#"> <img src="http://127.0.0.1:3000/img/mijing.jpg" alt=""></a>
                    </div>
                    <div class="mt15">
                        <a href="#"><img src="http://127.0.0.1:3000/img/saodi.jpg" alt=""></a>
                    </div>
                </div>
                <div id="Hot" class="my_appliances_product">
                    <ul>
                        <li>
                            <div class="my_kill">满减300</div>
                            <router-link :to="'/shopdetail/'+122">
                                <img src="http://127.0.0.1:3000/img/dianshi4a.jpg" alt="">
                                <p>小米电视4A 43英寸青春版</p>
                            </router-link>
                            <span>全高清屏幕/人工智能语音</span>
                            <p>1399元 <del>1699元</del></p>
                        </li>
                        <li>
                            <div class="my_kill">满减300</div>
                            <router-link :to="'/shopdetail/'+132" >
                                <img src="http://127.0.0.1:3000/img/dianshi4c.jpg" alt="">
                                <p>小米电视4C 50英寸</p>
                            </router-link>
                            <span>4K HDR/人工智能语音</span>
                            <p>1899元 <del>2199元</del></p>
                        </li>
                        <li>
                            <div class="my_kill">满减300</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/bijibeni5.png" alt="">
                                <p>15.6笔记本 i5 4G MAX110</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>3999元 <del>4199元</del></p>
                        </li>
                        <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xiaomiAri.jpg" alt="">
                                <p>13.3笔记本Air 四核i7 8G 2...</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>5999元 <del></del></p>
                        </li>
                        <li class="mt15">
                            <div class="my_kill">满减200元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/mijiajinghuaqi.jpg" alt="">
                                <p>米家空气净化器Pro</p>
                            </a>
                            <span>oled显示屏幕/激光颗粒传感器</span>
                            <p>1299元 <del>1499</del></p>
                        </li>
                        <li class="mt15">
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/shaoshuihu.jpg" alt="">
                                <p>米家电水壶</p>
                            </a>
                            <span>一杯水，是一家人的安心</span>
                            <p>99元 <del></del></p> 
                        </li>
                        <li class="mt15">
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xidingdeng.png" alt="">
                                <p>米家LED吸顶灯</p>
                            </a>
                            <span>用光线，还原理想生活</span>
                            <p>399元 <del></del></p>
                        </li>
                        <li class="mt15 my_two_block">
                            <div class="">
                                <a href="http://127.0.0.1:3000/shoplist.html">
                                    <p>小米净水器..<br>
                                            <span class="price_money">1799元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/xiaomijingshuiqi.jpg" alt="" class="my_two_block_img">
                                </a>
                            </div>
                            <div class="mt10">
                                <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>热门</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="audiovisual" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                <div class="my_kill">满减500</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/yingxiang1.png" alt="">
                                    <p>小米电视4A 55英寸</p>
                                </a>
                                <span>4K高清HDR/真四核64位高性能处理器</span>
                                <p>2299元 <del>2799元</del></p>
                            </li>
                            <li>
                            <div class="my_kill">满减300</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/dianshi4c.jpg" alt="">
                                <p>小米电视4 55英寸</p>
                            </a>
                            <span>4.9mm极超薄机身/2gb+8GB大内存</span>
                            <p>3699元 <del>3999元</del></p>
                            </li>
                            <li>
                            <div class="my_kill">满减120</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/yingxiang3.jpg" alt="">
                                <p>小米电视4A 32英寸</p>
                            </a>
                            <span>64位四核处理器/1GB+4GB大内存</span>
                            <p>879元 <del>999元</del></p>
                            </li>
                            <li>
                            <div class="my_kill">满减800</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/yingxiang4.png" alt="">
                                <p>小米电视4A 65英寸</p>
                            </a>
                            <span>4K超高清屏/真四核64位高性能处理器</span>
                            <p>3699元 <del>4499</del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">满减300元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/yingxiang5.jpg" alt="">
                                <p>小米电视4A 43英寸青春版</p>
                            </a>
                            <span>全高清屏/人工智能语音/大内存</span>
                            <p>1399元 <del>1699</del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">享8折</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/yingxiang6.png" alt="">
                                <p>小米电视4C 43英寸</p>
                            </a>
                            <span>人工智能/全高清屏幕/大内存</span>
                            <p>1399元 <del>1799元</del></p> 
                            </li>
                            <li class="mt10">
                            <div class="my_kill">减50元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/yingxiang7.jpg" alt="">
                                <p>小米盒子3 增强版</p>
                            </a>
                            <span>高端4K 网络机顶盒</span>
                            <p>399元 <del>449</del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                    <p>小米盒子3s<br>
                                            <span class="price_money">299元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/yingxiang8.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>电视影音</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                </div>
                <div id="computer" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/diannao1.jpg" alt="">
                                    <p>15.6 Pro i5 8G 1050MAX-Q 256G</p>
                                </a>
                                <span>&nbsp;</span>
                                <p>6299元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/diannao2.jpg" alt="">
                                <p>13.3小米笔记本Ari 四核i7 8G 2...</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>5999元 <del></del></p>
                            </li>
                            <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/diannao3.png" alt="">
                                <p>小米游戏本15.6'8代i7 16G 1T+..</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>8999元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/diannao4.jpg" alt="">
                                <p>13.3小米笔记本Ari四核i7 8G 2...</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>5999元 <del></del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">满减5元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/shubiao5.png" alt="">
                                <p>小米无线鼠标</p>
                            </a>
                            <span>耐脏亲肤/人体工学设计</span>
                            <p>64元 <del>69元</del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">满减5元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/shubiao6.jpg" alt="">
                                <p>小米便携式鼠标</p>
                            </a>
                            <span>轻薄便携，铝合金外壳+ABS材质</span>
                            <p>94元 <del>99元</del></p> 
                            </li>
                            <li class="mt10">
                            <div class="my_kill">减20元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jianpan7.png" alt="">
                                <p>悦米机械键盘</p>
                            </a>
                            <span>铝合金机身，TTC红轴，87键</span>
                            <p>269元 <del>289元</del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                    <p>多功能转接器<br>
                                            <span class="price_money">129元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/zhuanjie8.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>电脑</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                </div>
                <div id="furniture" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/jiaju1.jpg" alt="">
                                    <p>米家恒温电水壶</p>
                                </a>
                                <span>水温智能控制，304不锈钢内胆</span>
                                <p>179元 <del>199元</del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju2.jpg" alt="">
                                <p>小米随身手电筒</p>
                            </a>
                            <span>11挡调光，随心而亮</span>
                            <p>79元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju3.jpg" alt="">
                                <p>米家扫地机器人</p>
                            </a>
                            <span>智能路径，扫得干净扫得快</span>
                            <p>1599元 <del>1690元</del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju4.jpg" alt="">
                                <p>小米米家空气净化器2S</p>
                            </a>
                            <span>oled显示屏幕/激光颗粒传感器</span>
                            <p>899元 <del></del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">满减50元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju5.jpg" alt="">
                                <p>米家压力IH电饭煲</p>
                            </a>
                            <span>智能烹饪，灰铸铁粉体涂层内胆</span>
                            <p>949元 <del>999元</del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju6.jpg" alt="">
                                <p>飞利浦智睿球泡灯</p>
                            </a>
                            <span>自由调节亮度，WI-F随时操控</span>
                            <p>49元 <del></del></p> 
                            </li>
                            <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jiaju7.jpg" alt="">
                                <p>米家LED智能台灯</p>
                            </a>
                            <span>无可视频闪，四种场景优化调光</span>
                            <p>169元 <del></del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                    <p>YeelightLE...<br>
                                            <span class="price_money">379元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/jiaju8.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>家居</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                </div>
            </div>
        </div>
        <!--智能-->
        <div class="appliances">
                <div class="appliances_img">
                    <a href="#"> <img src="http://127.0.0.1:3000/img/young.jpg" alt="" class="mt30"></a>
                </div>
                <div class="appliances_detail mt40">
                    <div class="appliances_title">
                        <h3>智能</h3>
                        <div>
                            <ul>
                                <li data-target="#HotIntelligence" class="my_mouse"><a href="javascript:">热门</a></li>
                                <li data-target="#Travel"><a href="javascript:">出行</a></li>
                                <li data-target="#Healthy"><a href="javascript:">健康</a></li>
                                <li data-target="#coldplay"><a href="javascript:">酷玩</a></li>
                                <li data-target="#Router" class="appliances_title_font"><a href="javascript:">路由器</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="appliances_detail_img">
                        <div>
                            <a href="#"> <img src="http://127.0.0.1:3000/img/mijiashexiang.jpg" alt=""></a>
                        </div>
                        <div class="mt15">
                            <a href="#"><img src="http://127.0.0.1:3000/img/pingxingche.jpg" alt=""></a>
                        </div>
                    </div>
                    <div id="HotIntelligence" class="my_appliances_product ">
                        <ul>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/feilipu.png" alt="">
                                    <p>米家飞利浦智睿台灯2代</p>
                                </a>
                                <span>感知环境光，主动优化场景照明</span>
                                <p>199元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/zhinengshoubiao.jpg" alt="">
                                <p>小米手环3</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>169元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/cheng.jpg" alt="">
                                <p>小米体重秤</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>99元 <del></del></p>
                            </li>
                            <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/dianfanbao4L.png" alt="">
                                <p>米家IH电饭煲4L</p>
                            </a>
                            <span>IH电磁环绕加热</span>
                            <p>599元 <del></del></p>
                            </li>
                            <li class="mt15">
                            <div class="my_kill">减60元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_chezaijinghuaqi.jpg" alt="">
                                <p>车载空气净化器(USB车充版)</p>
                            </a>
                            <span>高效净化车内空气</span>
                            <p>389元 <del>499</del></p>
                            </li>
                            <li class="mt15">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_jitao.jpg" alt="">
                                <p>米家行车记录仪</p>
                            </a>
                            <span>晚上能拍清车牌的行车记录仪</span>
                            <p>349元 <del></del></p> 
                            </li>
                            <li class="mt15">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_diandongyashua.jpg" alt="">
                                <p>米家声波电动牙刷</p>
                            </a>
                            <span>磁悬声波马达，定制多种刷牙模式</span>
                            <p>179元 <del>199元</del></p>
                            </li>
                            <li class="mt15 my_two_block">
                                <div class="">
                                    <a href="#">
                                    <p>小米插线板<br>
                                            <span class="price_money">49元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/pms_chaxianban.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>热门</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="Travel" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_huabanche.jpg" alt="">
                                    <p>小米米家电动滑板车</p>
                                </a>
                                <span>极简几何设计，1分钟轻松上手</span>
                                <p>1999元 <del></del></p>
                            </li>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/zixingche.jpg" alt="">
                                    <p>电助力折叠自行车</p>
                                </a>
                                <span>力矩传感电助力，折叠便携设计</span>
                                <p>2999元 <del></del></p>
                            </li>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_wrenji.jpg" alt="">
                                    <p>米兔遥控小飞机</p>
                                </a>
                                <span>米兔遥控小飞机</span>
                                <p>389元 <del>399元</del></p>
                            </li>
                            <li>
                                <div class="my_kill">减60元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_chezaijinghuaqi.jpg" alt="">
                                    <p>车载空气净化器(USB车充版)</p>
                                </a>
                                <span>高效净化车内空气</span>
                                <p>389元 <del>499</del></p>
                            </li>
                            <li class="mt10">
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_shoubiao.jpg" alt="">
                                    <p>Amazfit运动手表</p>
                                </a>
                                <span>蓝牙听歌，运动心率，智能通知提醒</span>
                                <p>799元 <del></del></p>
                            </li>
                            <li class="mt10">
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_xiangji.jpg" alt="">
                                    <p>小米微单相机M1双镜头套机</p>
                                </a>
                                <span>2016万像素，4K视频录制</span>
                                <p>2999元 <del></del></p> 
                            </li>
                            <li class="mt10">
                                <div class="my_kill">减100元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/quanjing.jpg" alt="">
                                    <p>米家全景相机套装</p>
                                </a>
                                <span>2388万像素、3.5K视频录制</span>
                                <p>1599元 <del>1699</del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                        <p>米家车载空气净化器<br>
                                                <span class="price_money">69元</span>
                                        </p>
                                        
                                        <img src="http://127.0.0.1:3000/img/pms_jinghuaqi2.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                        <div class="my_More">
                                            <p>浏览更多 <br>
                                                <span>出行</span>
                                            </p>
                                        </div>
                                        <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="Healthy" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                    <div class="my_white"></div>
                                    <a href="#">
                                        <img src="http://127.0.0.1:3000/img/pms_diandongyashua.jpg" alt="">
                                        <p>米家声波电动牙刷</p>
                                    </a>
                                    <span>磁悬声波马达，定制多种刷牙模式</span>
                                    <p>179元 <del>199元</del></p>
                            </li>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_guahudao.jpg" alt="">
                                    <p>米家电动剃须刀</p>
                                </a>
                                <span>&nbsp;</span>
                                <p>189元 <del>199元</del></p>
                            </li>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/cheng.jpg" alt="">
                                    <p>小米体重秤</p>
                                </a>
                                <span>100克，喝杯水都可感知的精准</span>
                                <p>99元 <del></del></p>
                            </li> 
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/zhinengshexiangtou.jpg" alt="">
                                    <p>米家智能摄像头 1080P</p>
                                </a>
                                <span>10米红外夜视范围，双向语音沟通</span>
                                <p>199元 <del></del></p>
                            </li>
                            <li class="mt10">
                                <div class="my_kill">满减5元</div>
                                <a href="http://127.0.0.1:3000/shoplist.html">
                                    <img src="http://127.0.0.1:3000/img/pms_jingshuiqi.jpg" alt="">
                                    <p>小米净水器(厨上式)增强版</p>
                                </a>
                                <span>400 加仑大流量，纯水更多，废水更少</span>
                                <p>1499元 <del></del></p>
                            </li>
                            <li class="mt10">
                                <div class="my_kill">满减50元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_pm25.jpg" alt="">
                                    <p>米家PM2.5检测仪</p>
                                </a>
                                <span>一体黑OLED屏，智能联动</span>
                                <p>349元 <del>399元</del></p> 
                            </li>
                            <li class="mt10">
                                <div class="my_kill">减20元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/kongqilvxin.jpg" alt="">
                                    <p>空气净化器滤芯</p>
                                </a>
                                <span>高效净化，可吸入颗粒物，甲醛</span>
                                <p>149元 <del></del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                        <p>小米水质TD..<br>
                                                <span class="price_money">29元</span>
                                        </p>
                                        
                                        <img src="http://127.0.0.1:3000/img/huizhihd.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                        <div class="my_More">
                                            <p>浏览更多 <br>
                                                <span>健康</span>
                                            </p>
                                        </div>
                                        <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="coldplay" class="my_appliances_product my_display">
                        <ul>
                            <li>
                                <div class="my_kill">减20元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_kuwanche.jpg" alt="">
                                    <p>米兔积木机器人 履带机甲</p>
                                </a>
                                <span>履带地盘，智能操控，百变拼插</span>
                                <p>479元 <del>499元</del></p>
                            </li>
                            <li>
                                <div class="my_kill">减10元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_zhinenggushi.jpg" alt="">
                                    <p>米兔智能故事机</p>
                                </a>
                                <span>微信远程互动，智能语音交互</span>
                                <p>189元 <del>199元</del></p>
                            </li>
                            <li>
                                <div class="my_white"></div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/zixingche.jpg" alt="">
                                    <p>米家骑记电助力折叠自行车</p>
                                </a>
                                <span>力矩传感电助力，折叠便携设计</span>
                                <p>2999元 <del></del></p>
                            </li>
                            <li>
                                <div class="my_kill">减10元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_wangguan.jpg" alt="">
                                    <p>米家多功能网关</p>
                                </a>
                                <span>米家智能配件控制中心</span>
                                <p>139元 <del>149元</del></p>
                            </li>
                            <li class="mt10">
                                <div class="flg_new">新品</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_jimukache.jpg" alt="">
                                    <p>米兔积木矿山卡车</p>
                                </a>
                                <span>方向盘控制系统，翻斗升降系统</span>
                                <p>94元 <del>99元</del></p>
                            </li>
                            <li class="mt10">
                                <div class="my_kill">减20元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_ertongshoubiao.jpg" alt="">
                                    <p>米兔儿童电话手表</p>
                                </a>
                                <span>AMOLED高清彩屏，6天超长续航</span>
                                <p>379元 <del>399元</del></p> 
                            </li>
                            <li class="mt10">
                                <div class="my_kill">减20元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/pms_jimuji.jpg" alt="">
                                    <p>米兔智能积木</p>
                                </a>
                                <span>动手动脑，启发孩子的创造力</span>
                                <p>179元 <del>199元</del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                        <p>YeelightLE...<br>
                                                <span class="price_money">399元</span>
                                        </p>
                                        
                                        <img src="http://127.0.0.1:3000/img/pms_xiaobaishexiang.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                        <div class="my_More">
                                            <p>浏览更多 <br>
                                                <span>酷玩</span>
                                            </p>
                                        </div>
                                        <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="Router" class="my_appliances_product my_display ">
                        <ul>
                            <li>
                                <div class="my_yellow">免邮费</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/wuxianluyou.jpg" alt="">
                                    <p>小米路由器3</p>
                                </a>
                                <span>四天线设计，更快更强</span>
                                <p>149元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_yellow">免邮费</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_luyouqi3c.jpg.png" alt="">
                                <p>小米路由器3C</p>
                            </a>
                            <span>APP智能控制，安全防蹭网</span>
                            <p>99元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_fangdaqiw.jpg" alt="">
                                <p>小米WIF放大器2</p>
                            </a>
                            <span>适配主流路由器，两步完成设置</span>
                            <p>49元 <del></del></p>
                            </li>
                            <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_HDwuxian.jpg" alt="">
                                <p>小米路由器HD</p>
                            </a>
                            <span>4X4全向性天线，802.11ac wave2</span>
                            <p>1299元 <del></del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_kill">享八折</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_dianlimao.jpg" alt="">
                                <p>小米WIFI电力猫</p>
                            </a>
                            <span>有插座的地方就有wifi</span>
                            <p>199元 <del>249元</del></p>
                            </li>
                            <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_PROwuxian.jpg" alt="">
                                <p>小米路由器Pro</p>
                            </a>
                            <span>全新金属机身设计，AC2600双频</span>
                            <p>499元 <del></del></p> 
                            </li>
                            <li class="mt10">
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_G3wuxian.jpg" alt="">
                                <p>小米路由器3G</p>
                            </a>
                            <span>双核全千兆，USB3.0</span>
                            <p>199元 <del>249元</del></p>
                            </li>
                            <li class="mt10 my_two_block">
                                <div class="">
                                    <a href="#">
                                    <p>小米千兆网线<br>
                                            <span class="price_money">14.9元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/wangxianqianzhao.jpg" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                                <div class="mt10">
                                    <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>家居</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                    </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <!--搭配-->
        <div class="appliances">
            <div class="appliances_img">
                <a href="#"> <img src="http://127.0.0.1:3000/img/xmad_qingkaui.jpg" alt="" class="mt30"></a>
            </div>
            <div class="appliances_detail">
                <div class="appliances_title mt40">
                    <h3>搭配</h3>
                    <div>
                        <ul>
                            <li data-target="#Hotcollocation" class="my_mouse"><a href="javascript:">热门</a></li>
                            <li data-target="#Earphone" class="appliances_title_font"><a href="javascript:">耳机音响</a></li>
                            <li data-target="#PowerSupply"><a href="javascript:">电源</a></li>
                            <li data-target="#Battery" class="appliances_title_font"><a href="javascript:">电池存储</a></li>
                        </ul>
                    </div>
                </div>
                <div class="appliances_detail_img">
                    <div>
                        <a href="#"> <img src="http://127.0.0.1:3000/img/xmad_erji.jpg" alt=""></a>
                    </div>
                    <div class="mt15">
                        <a href="#"><img src="http://127.0.0.1:3000/img/xmad_shiyingshoubiao.jpg" alt=""></a>
                    </div>
                </div>
                <div id="Hotcollocation" class="my_appliances_product my_display">
                    <ul>
                        <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_wixianchongdianqi.jpg" alt="">
                                <p>小米无线充电器(通用快充版)</p>
                            </a>
                            <span>548人评论</span>
                            <p>69元<del></del></p>
                        </li>
                        <li>
                        <div class="my_white"></div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_xiaoaitongxue.jpg" alt="">
                            <p>小米AI音响</p>
                        </a>
                        <span>5.7万评论</span>
                        <p>299元 <del></del></p>
                        </li>
                        <li>
                        <div class="my_white"></div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_michongdianbao.jpg" alt="">
                            <p>新小米移动电源2(10000mAh)</p>
                        </a>
                        <span>1.4万评论</span>
                        <p>79元 <del></del></p>
                        </li>
                        <li>
                        <div class="my_kill">享9.3折</div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_2Cchongdianbao.jpg" alt="">
                            <p>小米移动电源2C(20000mAh)</p>
                        </a>
                        <span>2.4万人评论</span>
                        <p>119元 <del>129元</del></p>
                        </li>
                        <li class="mt10">
                        <div class="my_kill">享9.4折</div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_usbkuaichong.jpg" alt="">
                            <p>小米USB充电器快充版（18w）</p>
                        </a>
                        <span>7803人评价</span>
                        <p>29.9元 <del></del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_kill">享9.4折</div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_chongdianbao4000.jpg" alt="">
                            <p>小米移动电源高配版(10000mAh)</p>
                        </a>
                        <span>2.6万人评价</span>
                        <p>139元 <del>149元</del></p>
                        </li>
                        <li class="mt10">
                        <div class="flg_new">新品</div>
                        <a href="#">
                            <img src="http://127.0.0.1:3000/img/pms_erjiheise.jpg" alt="">
                            <p>1MORE四单元圈铁耳机</p>
                        </a>
                        <span>109人评论</span>
                        <p>1299元 <del></del></p>
                        </li>
                        <li class="mt10 my_two_block">
                            <div class="">
                                <a href="#">
                                <p>小米随身音响<br>
                                        <span class="price_money">79元</span>
                                </p>
                                
                                <img src="http://127.0.0.1:3000/img/pms_shoudiandeng.jpg" alt="" class="my_two_block_img">
                                </a>
                            </div>
                            <div class="mt10">
                                <a href="#">
                                <div class="my_More">
                                    <p>浏览更多 <br>
                                        <span>热门</span>
                                    </p>
                                </div>
                                <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="Earphone" class="my_appliances_product my_display">
                    <ul>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_shuangdanyuanerji.jpg" alt="">
                                <p>小米双单元半入耳机</p>
                            </a>
                            <span>4033人评论</span>
                            <p>65元 <del>69元</del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_bozierji.jpg" alt="">
                                <p>小米蓝牙项圈耳机 黑色</p>
                            </a>
                                <span>3040人评论</span>
                                <p>285元 <del>299元</del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_teiquanerji.jpg" alt="">
                                <p>小米圈铁耳机2</p>
                            </a>
                            <span>1008人评论</span>
                            <p>99元 <del></del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/suishenlianyayinxiang.jpg" alt="">
                                <p>小米随身蓝牙音箱</p>
                            </a>
                            <span>3万人评论</span>
                            <p>63元 <del>69元</del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_lianyaerjiqingchun.jpg" alt="">
                                <p>小米蓝牙耳机青春版</p>
                            </a>
                            <span>5.2万人评论</span>
                            <p>55元 <del>59元</del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_yundongerji.jpg" alt="">
                                <p>小米运动蓝牙耳机mini</p>
                            </a>
                            <span>1.2万人评价</span>
                            <p>149元 <del>169元</del></p> 
                        </li>
                        <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_yinpinjieshouqi.jpg" alt="">
                                <p>小米蓝牙音频接收器</p>
                            </a>
                            <span>8643人评论</span>
                            <p>99元 <del></del></p>
                        </li>
                        <li class="mt10 my_two_block">
                            <div class="">
                                <a href="#">
                                    <p>小米小钢炮<br>
                                            <span class="price_money">119元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/xiaoganpaoyinxiang.jpg" alt="" class="my_two_block_img">
                                </a>
                            </div>
                            <div class="mt10">
                                <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>耳机音响</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="PowerSupply" class="my_appliances_product my_display">
                    <ul>
                        <li>
                            <div class="my_kill">减10元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_chongdianba0.jpg" alt="">
                                <p>小米移动电源10000mAh高配版</p>
                            </a>
                            <span>2.6万人评论</span>
                            <p>139元 <del>149元</del></p>
                        </li>
                        <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_chongdianbao5000.jpg" alt="">
                                <p>小米移动电源2C 20000mAh</p>
                            </a>
                            <span>2.3万人评论</span>
                            <p>119元 <del>129</del></p>
                        </li>
                        <li>
                            <div class="flg_new">新品</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_2ccdianbao.jpg" alt="">
                                <p>小米移动电源5000mAh</p>
                            </a>
                            <span>10.9万人评论</span>
                            <p>49元 <del></del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xianheshounai.jpg" alt="">
                                <p>小米电源线收纳盒</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>49元 <del></del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_heisechongdianbao.jpg" alt="">
                                <p>10000mAh小米移动电源2</p>
                            </a>
                            <span>耐脏亲肤/人体工学设计</span>
                            <p>64元 <del>69元</del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_kill">满减5元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_erheyixian.jpg" alt="">
                                <p>小米二合一数据线</p>
                            </a>
                            <span>1.9万人评论</span>
                            <p>16.9元 <del>19.9元</del></p>
                        </li>
                        <li class="mt10">
                            <div class="my_kill">减3元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_Type.jpg" alt="">
                                <p>USB Type-C充电套装</p>
                            </a>
                            <span>&nbsp;</span>
                            <p>15元 <del></del></p>
                        </li>
                        <li class="mt10 my_two_block">
                            <div class="">
                                <a href="#">
                                    <p>小米智能插座<br>
                                            <span class="price_money">69元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/T13xianban.jpg" alt="" class="my_two_block_img">
                                </a>
                            </div>
                            <div class="mt10">
                                <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>电源</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id="Battery" class="my_appliances_product ">
                    <ul>
                        <li>
                            <div class="my_kill">减10元</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_32gneicunka.jpg" alt="">
                                <p>SanDisk 32GB存储卡(u3,100..</p>
                            </a>
                            <span>999人评论</span>
                            <p>119元 <del>129元</del></p>
                        </li>
                        <li>
                            <div class="my_kill">享6折</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_langkouusb.jpg" alt="">
                                <p>小米USB充电器（2口）</p>
                            </a>
                            <span>2.2万人评论</span>
                            <p>29元 <del>49元</del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/T1wuhaodianchi.jpg" alt="">
                                <p>彩虹5号电池（十粒装）</p>
                            </a>
                            <span>12.7万人评价</span>
                            <p>9.9元 <del></del></p>
                        </li>
                        <li>
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/dianyanqiusb.jpg" alt="">
                                <p>睿米一分二点烟器</p>
                            </a>
                            <span>2300人评论</span>
                            <p>79元 <del></del></p>
                        </li>
                        <li class="mt15">
                            <div class="my_kill">享8折</div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/T1sikouchongdianqi.jpg" alt="">
                                <p>小米USB充电器（4口）</p>
                            </a>
                            <span>1.7万人评价</span>
                            <p>53元 <del>69元</del></p>
                        </li>
                        <li class="mt15">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/pms_18wchongdiantou.jpg" alt="">
                                <p>小米USB充电器快充版（18w）</p>
                            </a>
                            <span>7797人评论</span>
                            <p>29.9元 <del></del></p> 
                        </li>
                        <li class="mt15">
                            <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/zhuanjiekouchezai.jpg" alt="">
                                <p>小米车载充电器</p>
                            </a>
                            <span>5.7万人评论</span>
                            <p>39元 <del>49元</del></p>
                        </li>
                        <li class="mt15 my_two_block">
                            <div class="">
                                <a href="#">
                                    <p>SanDisk 16GB<br>
                                            <span class="price_money">49.9元</span>
                                    </p>
                                    
                                    <img src="http://127.0.0.1:3000/img/pms_neicunka.jpg" alt="" class="my_two_block_img">
                                </a>
                            </div>
                            <div class="mt10">
                                <a href="#">
                                    <div class="my_More">
                                        <p>浏览更多 <br>
                                            <span>电池存储卡</span>
                                        </p>
                                    </div>
                                    <img src="http://127.0.0.1:3000/img/more.png" alt="" class="my_two_block_img">
                                </a>
                            </div>
                        </li>
                    </ul>
                </div>
        </div>
        </div>
        <!--为你推荐-->
        <div class="Recommended">
            <div class="Recommended_title">
                <h3>为你推荐</h3>
                <a href="#">&gt;</a><a href="#">&lt;</a>
            </div>
            <div class="Recommended_product clearfix">
                <div>
                    <div class="m-0">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                <p>小米车载充电器快充班 银色</p>
                                <span>让爱车成为移动充电站</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>69元</del>
                                </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                <p>小米车载充电器快充班 银色</p>
                                <span>让爱车成为移动充电站</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>69元</del>
                                </div>
                            </a>
                        </div> 
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                <p>小米车载充电器快充班 银色</p>
                                <span>让爱车成为移动充电站</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>69元</del>
                                </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                <p>小米车载充电器快充班 银色</p>
                                <span>让爱车成为移动充电站</span>
                                <div class="kill_price">
                                    <span>1 元</span> 
                                    <del>69元</del>
                                </div>
                            </a>
                        </div>       
                </div>
                <div class="my_display">
                    <div class="m-0">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div> 
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">  
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div>
                        <div class="">
                        <div class="my_white"></div>
                            <a href="#">
                                    <img src="http://127.0.0.1:3000/img/chezai.png" alt="" class="my_Recommended_product">
                                    <p>小米车载充电器快充班 银色</p>
                                    <span>让爱车成为移动充电站</span>
                                    <div class="kill_price">
                                        <span>1 元</span> 
                                        <del>69元</del>
                                    </div>
                            </a>
                        </div>       
                </div>               
            </div>
            <!--热评产品-->
            <div class="Recommended_title mt20">
                <h3 class="">热评产品</h3>
            </div> 
            <div class="Hotreview clearfix mt10">
                <div class="m-0">
                    <a href="#"><img src="http://127.0.0.1:3000/img/dianfanbaohot.jpg" alt="" class="Hotreview_img"></a>
                    <p class="Hotreview_p">
                        <a href="#" class="Hotreview_a">
                                有人说，给我一根杠杆，我能翘起地球，有人说:给我500亿，我能成为第二个小米。我想说：给我一个小米美女客服，我能创造一个民族。 
                        </a>
                    </p>
                    <p class="comment">
                        来自于 追逆 的评价 
                    </p>
                    <p class="comment_price"><a href="#"> 小米电饭煲 <span>| </span><span>449元</span></a></p>

                </div>
                <div>
                    <a href="#"> <img src="http://127.0.0.1:3000/img/xmad_xiaoxiong.jpg" alt="" class="Hotreview_img"></a>
                    <p class="Hotreview_p">
                            <a href="#" class="Hotreview_a">
                                    外形简洁大方，大爱小米！全家人都在用小米的产品，真心不错，最主要的是性价比高。附图，给客服妹子一个大...
                            </a>
                        </p>
                        <p class="comment">
                            来自于 酸小妞～！ 的评价  
                        </p>
                        <p class="comment_price"><a href="#"> 米家车载空气净化器（US... <span>| </span><span>449元</span></a></p>

                </div>
                <div>
                    <a href="#"> <img src="http://127.0.0.1:3000/img/xiaoganpaohot.jpg" alt="" class="Hotreview_img"></a>
                    <p class="Hotreview_p">
                            <a href="#" class="Hotreview_a">
                                    超级喜欢！小巧玲珑！音质完美！不知道为什么！只要是小米出的东西我都喜欢！那倒是因为那一句？？小米为发...
                            </a>
                        </p>
                        <p class="comment">
                            来自于 田密 的评价   
                        </p>
                        <p class="comment_price"><a href="#"> 小米随身蓝牙音箱 <span>| </span><span>69元</span></a></p>

                </div>
                <div>
                    <a href="#"> <img src="http://127.0.0.1:3000/img/luyouqihot.jpg" alt="" class="Hotreview_img"></a>
                    <p class="Hotreview_p">
                            <a href="#" class="Hotreview_a">
                                安装简洁方便，信号不错！！！！！
                            </a>
                        </p>
                        <p class="comment">
                            来自于 追逆 的评价 
                        </p>
                        <p class="comment_price"><a href="#"> 小米路由器3 <span>| </span><span>149元</span></a></p>

                </div>
            </div>   
            <!--内容-->
            <div class="Recommended_title mt20">
                    <h3 class="">内容</h3>
            </div> 
            <div class="Commoditycontent clearfix mt10">
                <div class="m-0 tubook border_top1" style="overflow:hidden"><!---->
                    <h2 class="book_title">图书</h2>
                    <ul class="ul_length">
                            
                    </ul>
                    <a href="javascript:" class="my_left">&lt;</a>
                    <a href="javascript:" class="my_right">&gt;</a>
                    <!--哈利波特-->
                    <div class="clearfix" style="width: 900px; position: absolute;left: 0px;">
                        <div class="mr20 " style="float:left;margin-left: 50px; text-align: center ">
                            <a href="#" class="a_color"><h4>好吗好的</h4></a>
                            <p class="hali_detail">畅销作家大冰2016年新书！讲给你<br>听，好吗好的！</p>
                            <a href="#" class="a_color"><p>17.99元</p></a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/halibote.png" alt="" class="mt10">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;text-align: center ">
                            <a href="#" class="a_color"><h4>好好的</h4></a>
                            <p class="hali_detail">畅销作家大冰2016年新书！讲给你<br>听，好吗好的！</p>
                            <a href="#" class="a_color"><p>17.99元</p></a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/haomahaode.png" alt="" class="mt10">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;margin-left: 50px; text-align: center ">
                            <p class="hali_detail">海量好书，享受精品阅读时光<br>
                                漂亮的中文排版，千万读者选择！</p>
                            <a href="#" class="a_btn_more">前往阅读更多</a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/more-duokan.jpg" alt="" class="mt10 img_width">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tubook border_top2" style="overflow:hidden"><!---->
                    <h2 class="book_title2">MIUI 主题</h2>
                    <ul class="ul_length">
                            
                    </ul>
                    <a href="javascript:" class="my_left">&lt;</a>
                    <a href="javascript:" class="my_right">&gt;</a>
                    <!--MIUI 主题-->
                    <div class="clearfix" style="width: 900px; position: absolute;left: 0px;">
                        <div class="mr25 " style="float:left;margin-left: 50px; text-align: center ">
                            <a href="#" class="a_color"><h4>熊本熊 酷MA萌</h4></a>
                            <p class="hali_detail mr10">戳一戳、摸一摸，酷MA萌会在锁屏<br>跟你亲密互动哦。</p>
                            <a href="#" class="a_color"><p>17.99元</p></a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xmad_xiongbenxiong.jpg" alt="" class="mt10  img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;text-align: center ">
                            <a href="#" class="a_color"><h4>蚁人2</h4></a>
                            <p class="hali_detail mr10">小米主题和迪士尼首度合作，打造<br>精品漫威系列主题</p>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xmad__GpoLc.png" alt="" class="mt15 img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;margin-left: 50px; text-align: center ">
                            <p class="hali_detail">众多个性主题、百变锁屏与自由桌面<br>
                                让你的手机与众不同！</p>
                            <a href="#" class="a_btn_more2">前往MIUI主题市场</a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/more-miui.jpg" alt="" class="mt10 img_width">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tubook border_top3" style="overflow:hidden"><!---->
                    <h2 class="book_title3">游戏</h2>
                    <ul class="ul_length">
                            
                    </ul>
                    <a href="javascript:" class="my_left">&lt;</a>
                    <a href="javascript:" class="my_right">&gt;</a>
                    <!--游戏-->
                    <div class="clearfix" style="width: 900px; position: absolute;left: 0px;">
                        <div class="mr25 " style="float:left;margin-left: 50px; text-align: center ">
                            <a href="#" class="a_color"><h4>非人学园</h4></a>
                            <p class="hali_detail mr10">脑洞大开的二次元竞技手游</p>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xmad_eIPOw.png" alt="" class="mt30  img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;text-align: center ">
                            <a href="#" class="a_color"><h4>小米超神</h4></a>
                            <p class="hali_detail mr10">实力派，一起团！！</p>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xmad_MNEVo.png" alt="" class="mt30 img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;margin-left: 50px; text-align: center ">
                            <p class="hali_detail">免费下载海量的手机游戏<br>
                                天天都有现金福利赠送</p>
                            <a href="#" class="a_btn_more3">前往小米游戏商店</a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/more-game.jpg" alt="" class="mt30 img_width">
                            </a>
                        </div>
                    </div>
                </div>
                <div class="tubook border_top4" style="overflow:hidden"><!---->
                    <h2 class="book_title4">应用</h2>
                    <ul class="ul_length">
                            
                    </ul>
                    <a href="javascript:" class="my_left">&lt;</a>
                    <a href="javascript:" class="my_right">&gt;</a>
                    <!--应用-->
                    <div class="clearfix" style="width: 900px; position: absolute;left: 0px;">
                        <div class="mr25 " style="float:left;margin-left: 50px; text-align: center ">
                            <a href="#" class="a_color"><h4>2017金米奖</h4></a>
                            <p class="hali_detail mr10">最优秀的应用和游戏</p>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/jintutu3.png" alt="" class="mt10  img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;text-align: center ">
                            <a href="#" class="a_color"><h4>Forest</h4></a>
                            <p class="hali_detail mr10">帮助您专心于生活中每个重要时刻</p>
                            <a href="#" class="a_color"><p>免费</p></a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/xiaoshumiao.png" alt="" class="mt15 img_width">
                            </a>
                        </div>
                        <div class="mr20 ml20" style="float:left;margin-left: 50px; text-align: center ">
                            <p class="hali_detail">帮助小米手机和其他安卓手机用户<br>
                                发现好用的安卓应用</p>
                            <a href="#" class="a_btn_more4">前往小米应用商店</a>
                            <a href="#">
                                <img src="http://127.0.0.1:3000/img/more-game.jpg" alt="" class="mt30 img_width">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <!--video-->
            <div class="video_title">
                <h3>视频</h3>
                <a href="#">
                    查看全部 <span>&gt;</span>
                </a>         
            </div>
            <div class="video_detail">
                <ul>
                    <li class="ml0" >
                        <a href="javascripr:" data-target="#leizong">
                            <img src="http://127.0.0.1:3000/img/xmad__cthgC.jpg" alt="" class="video_detail_img">
                                <span class="play">
                                    <div class="play_btn"></div>
                                </span>
                            <p class="mt20">一团火</p>
                        </a>
                        <p class="xiao_p">小米创业8年内部纪录片（手机篇）</p>
                    </li>
                    <li>
                        <a href="javascripr:" data-target="#xiaomishouji8">
                            <img src="http://127.0.0.1:3000/img/xmad_fr.jpg" alt="" class="video_detail_img">
                                <span class="play">
                                    <div class="play_btn"></div>
                                </span>
                            <p class="mt20">小米8一部与众不同的手机</p>
                        </a>
                        <p class="xiao_p">小透明探索版，将科技与美学完美结合</p>
                    </li>
                    <li>
                        <a href="javascripr:" data-target="#xiaomishouji2max">
                            <img src="http://127.0.0.1:3000/img/xmad2.jpg" alt="" class="video_detail_img">
                                <span class="play">
                                    <div class="play_btn"></div>
                                </span>
                            <p class="mt20">小米Max2一面科技一面艺术</p>
                        </a>
                        <p class="xiao_p">艺术品般陶瓷机身，惊艳、璀璨</p>
                    </li>
                    <li>
                        <a href="javascripr:" data-target="#xiaoaitongxue">
                            <img src="http://127.0.0.1:3000/img/xmad_LDHfI.jpg" alt="" class="video_detail_img">
                                <span class="play">
                                    <div class="play_btn"></div>
                                </span>
                            <p class="mt20">生活中无所不在的小爱同学</p>
                        </a>
                        <p class="xiao_p">一句话搞定手机复杂操作</p>
                    </li>
                </ul>
            </div>
            <div class="video_play my_display">
                    <!--雷总-->
                    <div class="my_video my_display" id="leizong">
                        <div class="my_video_title">
                            <h3>一团火</h3>
                            <a href="javascript:"  class="my_close">×</a>
                        </div>
                        <div style="background:#000">
                                <video id="v3" src="https://v.mifile.cn/b2c-mimall-media/c2cb94c9485243e1767d43268fb90820.mp4" controls  poster="http://127.0.0.1:3000/img/xmad__cthgC.jpg"  preload="auto"></video>
                        </div>
                    </div>
                    <!--小米8-->
                    <div class="my_video my_display" id="xiaomishouji8">
                            <div class="my_video_title">
                                <h3>小米8，一部与众不同的手机</h3>
                                <a href="javascript:" class="my_close">×</a>
                            </div>
                            <div style="background:#000">
                                <video id="v3" src="https://v.mifile.cn/b2c-mimall-media/ed921294fb62caf889d40502f5b38147.mp4" controls="false"  poster="http://127.0.0.1:3000/img/xmad_fr.jpg"  preload="auto"></video>
                            </div>
                            
                    </div>
                    <!--小米 2S-->
                    <div class="my_video my_display" id="xiaomishouji2max">
                            <div class="my_video_title">
                                <h3>小米MIX 2S，一面科技 一面艺术</h3>
                                <a href="javascript:"  class="my_close">×</a>
                            </div>
                            <div style="background:#000">
                                <video id="v3" src="https://v.mifile.cn/b2c-mimall-media/53fc775dd6b29ecd8df3e2ea35129766.mp4" controls   poster="http://127.0.0.1:3000/img/xmad2.jpg"  preload="auto"></video>
                            </div>
                    </div>
                    <div class="my_video my_display" id="xiaoaitongxue">
                            <div class="my_video_title">
                                <h3>生活中无所不在的小爱同学</h3>
                                <a href="javascript:"  class="my_close">×</a>
                            </div>
                            <div style="background:#000">
                                <video id="v3" src="https://v.mifile.cn/b2c-mimall-media/69f7b9881f4ed7123f0d473dcd44d621.mp4" controls   poster="http://127.0.0.1:3000/img/xmad_LDHfI.jpg"  preload="auto"></video>
                            </div>
                    </div>
            </div>
        </div>
        <div class="right-bar">
            <div class="J_rightbar_l">
                <ul class="bar-top">
                    <li class="bar-sort">
                        <a href="#" class="bar-link">
                            <div class="bar-img">
                                <img src="http://127.0.0.1:3000/img/phone-ico.png" alt="" class="">
                                <img src="http://127.0.0.1:3000/img/phone-ico-active.png" alt="" class="my_display">
                            </div>
                            <p class="bar-text">手机APP</p>
                            <div class="bar-pop"> 
                                <div class="bar-pop-content my_display">
                                    <img src="https://i8.mifile.cn/b2c-mimall-media/93650133310ec1c385487417a472a26c.png" class="bar-pop-qr">
                                    <p class="bar-pop-text">手机扫一扫一分赢好礼</p> 
                                </div> 
                            </div>
                        </a>
                    </li>
                    <li class="bar-sort">
                        <a href="#" class="bar-link">
                            <div class="bar-img">
                                <img src="http://127.0.0.1:3000/img/geren-ico.png" alt="" >
                                <img src="http://127.0.0.1:3000/img/geren-ico-active.png" alt="" class="my_display">
                            </div>
                            <p class="bar-text">个人中心</p>
                        </a>
                    </li>
                    <li class="bar-sort">
                        <a href="#" class="bar-link">
                            <div class="bar-img">
                                <img src="http://127.0.0.1:3000/img/kefu-ico.png" alt="" >
                                <img src="http://127.0.0.1:3000/img/kefu-ico-active.png" alt="" class="my_display">
                            </div>
                            <p class="bar-text">联系客服</p>
                        </a>
                    </li>
                    <li class="bar-sort">
                        <router-link to="/cart" class="bar-link">
                            <div class="bar-img">
                                <img src="http://127.0.0.1:3000/img/cart-ico.png" alt="" >
                                <img src="http://127.0.0.1:3000/img/cart-ico-active.png" alt="" class="my_display">
                            </div>
                            <p class="bar-text">购物车</p>
                        </router-link>
                    </li>
                    <li :class="[{'bar-sort':true},{'my_display':!scroll0}]" id="toptop">
                        <a href="#" class="bar-link">
                            <div class="bar-img">
                                <img src="http://127.0.0.1:3000/img/totop.png" alt="" >
                                <img src="http://127.0.0.1:3000/img/totop_hover.png" alt="" class="my_display">
                            </div>
                            <p class="bar-text">返回顶部</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <xm-footer></xm-footer> 
    </div>
</template>
<script>
  import '../../public/css/index.css'
  import xmHeader from '@/components/header.vue'
  import xmFooter from '@/components/footer.vue'
export default {
    data(){
        return{
            imgList:[
                "http://127.0.0.1:3000/img/baner.jpg",
                "http://127.0.0.1:3000/img/baner1.jpg",
                "http://127.0.0.1:3000/img/baner2.jpg",
                "http://127.0.0.1:3000/img/baner3.jpg",
                "http://127.0.0.1:3000/img/baner4.jpg",
            ],
             shoptitle:[],
             navlist:{},
             boxlist:{},
             loptoplist:{},
             patchlist:{},
             clear:'',
             Onefloor:"",
             banduan:true,
             scroll0:true,
        }
       
    },
    mounted(){ 
        this.swipe();
        this.purchas();
        this.jump();
        this.clickImg();
        this.indexLength();
        this.leftRight();
        this.piontLi();
        this.topSwipe();
        this.videoPlay();
        this.timeShop();
        this.phoneApp();
        this.Roll();
        /*请求*/ 
       this.ShopTitle();
       this.phone();
       this.tvbox();
       this.loptop();
       this.patch();
       this.firstFloor();
       window.addEventListener('scroll',this.Roll)
    },
    methods:{
       /**轮播 */
       swipe(){
            $(document).ready(function(){
            var i = 0 ;
            var timer;
           //用jquery方法设置第一张图片显示，其余隐藏
            $('.item-index').eq(0).show().siblings('.item-index').hide();

            //调用showTime()函数（轮播函数）
            showTime();

            //当鼠标经过下面的数字时，触发两个事件（鼠标悬停和鼠标离开）
            $('.tab-index').hover(function(){
                //获取当前i的值，并显示，同时还要清除定时器
                i = $(this).index();
                Show();
                clearInterval(timer);
            },function(){
                //
                showTime();
            });

            //鼠标点击左侧的箭头
            $('.prev-index').click(function(){
                clearInterval(timer);
                if(i == 0){
                i = 5;//注意此时i的值
                }
                i--;
                Show();
                showTime();
            });

            //鼠标点击右侧的箭头
            $('.next-index').click(function(){
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
               this.clear = timer;

            //创建一个Show函数
            function Show(){
            //在这里可以用其他jquery的动画
            $('.item-index').eq(i).fadeIn(300).siblings('.item-index').fadeOut(300);

            //给.tab创建一个新的Class为其添加一个新的样式，并且要在css代码中设置该样式
            $('.tab-index').eq(i).addClass('active-index').siblings('.tab-index').removeClass('active-index');

            }
   
        });


       },
        /**显示抢购*/
       purchas(){
           $(".my_remai_title>a").click(function(){
                var li = $(this)
                $(li.attr('data-target')).removeClass("my_display").siblings('.my_Special_procduct').addClass("my_display")
           })
       },
       /**跳转页面 */
       jump(){
            $(".appliances_title>div>ul>li").mouseenter(function(){
                var li = $(this)
                if( $(li.attr('data-target')).is('.my_display')){
                $(li.attr('data-target')).removeClass("my_display").siblings(".my_appliances_product").addClass("my_display")
                li.addClass('my_mouse').siblings('').removeClass("my_mouse")
                }      
               li.children().addClass("my_mouse_a").parent().siblings().children().removeClass("my_mouse_a")
           });
       },
       clickImg(){
           $('.tubook').mouseenter(function(){
                var b =$(this);
                b.children(".my_left").removeClass("my_display");
                b.children('.my_right').removeClass("my_display")
                }).mouseleave(function(){
                var b =$(this);
                b.children('.my_left').addClass("my_display");
                b.children('.my_right').addClass("my_display")
            })
       },
       indexLength(){
           for(var i =0;i<$(".ul_length").next().next().next().children('div').length/2-3;i++){
                var li = $("<li class=''></li>")
                 // var a=i
                 li.appendTo(".ul_length");
                }
       },
       /**左右箭头*/
       leftRight(){
           var mg=0;var w =240;
            $(".my_right").click(function(e){
                e.preventDefault();
                var rg =$(this);
                mg++;
                if(mg<rg.next().children('div').length){
                    rg.next().css("left",-w*mg)
                    //console.log(mg);
                }else{
                    mg=-1
                    rg.removeAttr("disabled");
                }
                rg.prev().prev().children(`:nth-child(${mg+1})`).addClass('li_bg').siblings().removeClass('li_bg')
            })
            $(".my_left").click(function(){
                mg--
            var rg =$(this);
            if(mg>=0){
                rg.next().next().css("left",-w*mg)
            }else{
                mg=0
            }
              rg.prev().children(`:nth-child(${mg+1})`).addClass('li_bg').siblings().removeClass('li_bg')
            })
    
    
       },
       /**下 圆点*/
       piontLi(){
           //第一个li
            $('.ul_length>li:first-child').addClass('li_bg')
            //
            $(".ul_length>li:first-child()").click(function(){
                var li=$(this)
                li.addClass('li_bg').siblings().removeClass('li_bg')
            li.parent().next().next().next().css("left","0px");
                
            }).next().click(function(){
            var li=$(this)
            li.addClass('li_bg').siblings().removeClass('li_bg')
            li.parent().next().next().next().css("left","-240px")
            }).next().click(function(){
            var li=$(this)
            li.addClass('li_bg').siblings().removeClass('li_bg')
            li.parent().next().next().next().css("left","-480px")
            
            }) 

       },
       /**顶部swipe 轮播*/
       topSwipe(){
           $(".my_swipe_href>ul").on('mouseenter','li',function(){
            var li = $(this)
            if( $(li.attr('data-target')).is('.my_display')){
                $(li.attr('data-target')).removeClass("my_display").siblings().addClass("my_display")
                li.addClass('my_li_bg').siblings('').removeClass("my_li_bg")
            }
            })
            $('.my_swipe_href_xq').prev().parent().mouseleave(function(e){
                e.preventDefault();
                $(".my_swipe_href_xq").children("div").addClass("my_display");
                $(".my_swipe_href>ul>li").removeClass('my_li_bg')
            })
            
       },
       /**视频播放 */
       videoPlay(){
            $(".video_detail>ul>li>a").click(function(){
                var li = $(this)
                if( $(li.attr('data-target')).is('.my_display')){
                    $(li.attr('data-target')).removeClass("my_display").parent().removeClass("my_display")
                }

            })
            var v3 = document.getElementById('v3');
            var  myVideo =  document.querySelector('.my_video');
            var  videoPlay = document.querySelector('.video_play');
            for(var i =0;i<document.querySelectorAll("a[class='my_close']").length;i++){
                var close = document.querySelectorAll("a[class='my_close']");
               close[i].onclick = function(){
                v3.pause();
                videoPlay.classList.add('my_display');
                myVideo.classList.add('my_display');
                window.location.reload();
               }
           } 
       },
       /**限时购定时器*/
       timeShop(){
           $(()=>{setInterval(function () {
                var date = new Date;
                // console.log(date.getHours())
                var nowHour = parseInt(date.getHours())
                // console.log(nowHour)
                var targetTime = nowHour +1
                // console.log(targetTime)
                $(".time-title").html(`${targetTime}:00场`)
                var nowMinutes = date.getMinutes()
                var minutes = 60-nowMinutes-1
                // console.log(60-nowMinutes-1)
                if(minutes<10){
                $(".minutes").html(`0${minutes}`)
                }else{
                $(".minutes").html(`${minutes}`)
                }
                var nowSeconds = date.getSeconds()
                var seconds = 60-nowSeconds-1
                if(seconds<10){
                $(".seconds").html(`0${seconds}`)
                }else{
                $(".seconds").html(`${seconds}`)
                }
             },1000);
           })
       },
       /**APP--and悬停效果 */
       phoneApp(){
           $('.bar-sort').hover(function(){
             var li =$(this);
             li.children().children().children().toggleClass("my_display")
           })
       },
       /**返回顶部显示隐藏 滚动条事件*/
       Roll(){
           var docScroll = document.documentElement.scrollTop;
           // console.log(docScroll,window.innerHeight*2)
            if(docScroll>window.innerHeight*2){
                this.scroll0=true;
                //console.log(this.scroll0)
            } 
            if(docScroll<window.innerHeight*2){
                
                this.scroll0 = false;
               // console.log(this.scroll0)
            }

            
       },
       /**请求*/
        ShopTitle(){
             this.$http.get("http://127.0.0.1:3000/shoptitle").then(result=>{
                    this.shoptitle = result.data;
                   //console.log(result.data);
             })
        },
        phone(){
            this.$http.get("http://127.0.0.1:3000/phone").then(result=>{
                //console.log(result.data);
                var arr=result.data
                var index=0
                var obj={}
                for(var i=0;i<Math.ceil(arr.length/6);i++){
                    obj[i]=arr.slice(index,index+6)
                    index+=6
                }
               this.navlist=obj
              // console.log(this.navlist)
            })
        },
        tvbox(){
            this.$http.get("http://127.0.0.1:3000/tvbox").then(result=>{
                //console.log(result);
                 var arr=result.data
                var index=0
                var obj={}
                for(var i=0;i<Math.ceil(arr.length/6);i++){
                    obj[i]=arr.slice(index,index+6)
                    index+=6
                }
               this.boxlist=obj
            })
        },
        loptop(){
            this.$http.get('http://127.0.0.1:3000/loptop').then(result=>{
               // console.log(result)
                 var arr=result.data
                var index=0
                var obj={}
                for(var i=0;i<Math.ceil(arr.length/6);i++){
                    obj[i]=arr.slice(index,index+6)
                    index+=6
                }
               this. loptoplist=obj
            })
        },
        patch(){
            this.$http.get('http://127.0.0.1:3000/patch').then(result=>{
               // console.log(result)
                 var arr=result.data
                var index=0
                var obj={}
                for(var i=0;i<Math.ceil(arr.length/6);i++){
                    obj[i]=arr.slice(index,index+6)
                    index+=6
                }
               this. patchlist=obj
            })
        },
        firstFloor(){
            var url ="http://127.0.0.1:3000/phonefloor";
            this.$http.get(url).then(result=>{
                //console.log(result);
                this.Onefloor = result.data;
                //console.log(this.Onefloor);
            })
        }

    },
    components:{
       xmHeader,
       xmFooter
    },
    beforeDestroy(){
        clearInterval(this.clear);
    } 
   
   
}  
</script>
<style>
   .my_swipe_href>ul>li:first-child{
       margin-top: 20px;
   }
</style>


<!--

  <li>
                                <div class="flg_new">新品</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/mihong8.png" alt="">
                                    <p>小米8屏幕指纹版 8GB+128GB</p>
                                </a>
                                <span class="xiaotitle">全球首款压感屏幕指纹，双频GPS超精...</span>
                                <div class="my_money">3599元</div>
                        </li>
                        <li>
                                <div class="flg_new">减150元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/mise.jpg" alt="">
                                    <p>小米8SE 4GB+64GB </p>
                                </a>
                                <span class="xiaotitle">AI 超感光双摄，三星 AMOLED 屏幕</span>
                                <div class="my_money">1649元  <del> 1799元</del></div>
                        </li>
                        <li>
                                <div class="flg_new">减400元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/mimx.jpg" alt="">
                                    <p>小米MX 2S 8GB+64GB </p>
                                </a>
                                <span class="xiaotitle">骁龙845 年度旗舰处理器，艺术品般陶</span>
                                <div class="my_money">3599元 <del> 3999元</del></div>
                        </li>
                        <li class="mt15">
                                <div class="flg_new">减200元</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/xiaomi6s.jpg" alt="">
                                    <p>小米6X 4GB+3GB</p>
                                </a>
                                <span class="xiaotitle">全索尼相机，骁龙660 AIE处理器</span>
                                <div class="my_money">1299元 <del>1499元</del></div>
                        </li>
                        <li  class="mt15">
                                <div class="flg_new">新品</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/xiaomimax2.jpg" alt="">
                                    <p>小米Max2 4GB+64GB</p>
                                </a>
                                <span class="xiaotitle">6.44''大屏，5300mAh 充电宝级的大电...</span>
                                <div class="my_money">1699元</div>
                        </li>
                        <li  class="mt15">
                                <div class="flg_new">享6折</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/max2taoci.jpg" alt="">
                                    <p>小米MIX2 全陶瓷尊享版 </p>
                                </a>
                                <span class="xiaotitle">全面屏2.0，Unibody 全陶瓷</span>
                                <div class="my_money">2699元 <del> 4699元</del></div>
                        </li>
                        <li  class="mt15">
                                <div class="flg_new">新品</div>
                                <a href="#">
                                    <img src="http://127.0.0.1:3000/img/hongmis2.jpg" alt="">
                                    <p>红米S2 3GB+32GB</p>
                                </a>
                                <span class="xiaotitle">前置1600万超大像素智能美拍</span>
                                <div class="my_money">999元</div>
                        </li>

-->