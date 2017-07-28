<template>
    <div>
        <v-header></v-header>
        <div id="div2">
            <h1>关于我们</h1><br><br>
          
           <img class="img" src="static/images/6.jpg"/>
            <img class="img1"  src="static/images/c16.jpg"/>
            
                <p> 火车网经过7年的发展，已经成为中国人出行参考，订票，查询的最常用火车票网站。
                 火车已经成为中国人出行最经济快捷安全的方式！随着十七届三中全会的召开
                 中国将进入新一轮的铁路发展高峰，各种动车组、高速铁路、客运专线、
                 货运专线将相继成为国人生活商务发展的重要因素。
                 火车网汇集了铁路客流、物流、订票、火车票查询，二手火车票交易等实时发布和服务的动态信息，
                 逐步形成网络票务查询、订购和货物查询等日常百姓、打工族、商务人士、
                 旅游出行必备的查询工具和常用的查询交易平台。 火车网维护小组成员致力于为中国火车运输、
                 火车客运等相关人士提供最方便快捷的服务，致力于中国铁路运输、客流、物流的发展贡献最大的力量。
                 北京站为全国铁路客运特等站。线路管辖：至京山下行7.0公里、京承下行2.3公里。
                 主要担当京山、京秦、京沪、京承、京原、京包线旅客运输任务，并有开往平壤、乌兰巴托、
                 莫斯科的国际和国际联运旅客列车。1998年至2004年，全路五次调图提速，北京站图定列车对数、
                 方向、等级不断发生变化，随着“朝发夕至”、“夕发朝至”列车增加，车站出现早晚两个旅客乘降高峰，
                 特别是假日经济的兴起，给车站各项运输组织工作带来一系列变化，促进客货营销和服务质量提高。</p>
            
            
            
        </div>
    
        <adv></adv>
        <v-foot></v-foot>
    </div>
</template>

<script>
import router from '../../router'
import $ from 'jquery'
import head from '../head/Head'
import adv from '../adv/Adv'
import foot from '../foot/Foot'

export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    }
}
</script>

<style>
#div2{
    position: relative;
    top: 50px;
    height: 535px;
}

.img{
    width: 25%;
    height: 400px;

    float: left
    
}
.img1{
    width: 25%;
    height: 400px;

    float: right
}
</style>
