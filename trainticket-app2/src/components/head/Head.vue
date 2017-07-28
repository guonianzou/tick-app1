<template>
    <div>
        <header>
            <div class="container">
                <!--logo-->
                <div class="logo">
                    <h1>
                        <a href="index.html">飞驴旅行</a>
                    </h1>
                </div>
                <!--//logo-->
                <div class="w3layouts-login">
                    <a data-toggle="modal" data-target="#myModal" href="#">
                         <span>{{myname}}</span><span @click="out()" id="exit">{{exit}}</span>
                    </a>
                </div>
               
               
                <!--//Login modal-->
            </div>
        </header>
    
        <div class="header-right">
            <div class="banner">
                <div class="slider">
                    <div class="callbacks_container">
                        <ul class="rslides" id="slider">
                            <li>
                                <div class="banner1">
                                    <div class="caption">
                                        <h3>
                                            <span>用 </span>飞驴旅行买票 安全更放心</h3>
                                        <p>
                                            <a href="#" class="scroll" @click="gobuy()">马上买票</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="banner2">
                                    <div class="caption">
                                        <h3>
                                            <span>火车票 </span> 不止是五折</h3>
                                        <p>
                                            <a href="#" @click="gobuy()">马上买票</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="banner3">
                                    <div class="caption">
                                        <h3>
                                            <span>现在下单</span> 豪礼相赠</h3>
                                        <p>
                                            <a href="#" @click="gobuy()">马上买票</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <div class="banner4">
                                    <div class="caption">
                                        <h3>
                                            <span>让您的出行 </span> 不再是难题</h3>
                                        <p>
                                            <a href="#" @click="gobuy()">马上买票</a>
                                        </p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '../../router'
import $ from 'jquery'

export default {
    data() {
        return {
            myname: "",
            exit:""
        }
    },
    created(){
        this.myname = window.localStorage.getItem('username')
        this.exit = window.localStorage.getItem('exit')
    },
    methods: {
        gobuy() {
            router.push({ name: 'buy' });
        },
        out(){
        //利用对话框返回的值 （true 或者 false）  s
        if (confirm("你确定退出吗？")) {
            window.localStorage.clear('username','exit')
            window.location="index.html"
        } 
     }
    }
}
</script>

<style>
.header-right {
    margin-top: -70px
}
</style>
