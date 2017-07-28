<template>
    <div>
        <v-header></v-header>
    
        <!--{{train_no}}--{{start}}--{{end}}--{{start_time}}--{{end_time}}--{{run_time}}-->
        <div class="w3layouts-breadcrumbs text-center">
            <div class="container">
                <span class="agile-breadcrumbs">
                    <a href="index.html">
                        <i class="fa fa-home home_1"></i>
                    </a> /
                    <span>Trains</span>
                </span>
            </div>
        </div>
        <!-- //breadcrumbs -->
        <div class="categories-section main-grid-border" id="mobilew3layouts">
            <div class="container">
                <div>
                    <div class="list">
                        <ul class="resp-tabs-list hor_1">
                            <li @click="search()">查询</li>
                            <li @click="gobuy()">购买</li>
                            <li>我的订单</li>
                            <li>关于我们</li>
                            <li id="login" @click="gologin()">
                                <span>登录</span>/
                                <span>注册</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <!-- Trains -->
        <div class="agile-trains w3layouts-content">
            <div class="container">
                <div class="col-md-4 bann-info1">
                    <i class="train-icon fa fa-train"></i>
                </div>
                <div class="col-md-5 bann-info" :hidden="myticket">
                    <h3>我的订单</h3>
                    <div class="book-a-ticket">
                        <div class=" bann-info">
    
                            <div class="box">
                                <div class="start">
                                    <h2>{{start}}</h2>
                                </div>
                                <span class="train_no">
                                    <h3>{{train_no}}</h3>
                                </span>
                                <div class="arrow">
    
                                    <img src="./arrow.png" width="20%" height="20%">
                                </div>
                                <div class="end">
                                    <h2>{{end}}</h2>
                                </div>
                                <div class="time">
                                    <span class="time_">
                                        <h3>出发</h3>
                                    </span>
                                    <span class="time_">
                                        <h3>到达</h3>
                                    </span>
                                    <span class="time_">
                                        <h3>历时</h3>
                                    </span>
                                </div>
                                <div class="num">
                                    <span class="num_">
                                        <h3>{{start_time}}</h3>
                                    </span>
                                    <span class="num_">
                                        <h3>{{end_time}}</h3>
                                    </span>
                                    <span class="num_">
                                        <h3>{{run_time}}</h3>
                                    </span>
                                </div>
                                <div class="clearfix"></div>
                                <div class="search">
                                    <input type="submit" class="submit" value="退票" @click="refund()">
                                    <input type="submit" class="submit" value="改签" @click="change()">
                                </div>
    
                            </div>
    
                        </div>
                    </div>
    
                </div>
                <div class="clearfix"></div>
                <h3 :hidden="gobuy" class="hh3">您还没有订单哦 赶快去购票吧~</h3>
            </div>
        </div>
    
        <adv></adv>
        <v-foot></v-foot>
    </div>
</template>

<script>
import router from '../../router'
import head from '../head/Head'
import adv from '../adv/Adv'
import foot from '../foot/Foot'

export default {
    data() {
        return {
            /*train_no:this.$store.state.train_no,
            start:this.$store.state.start_station,
            end:this.$store.state.end_station,
            end_time:this.$store.state.end_time,
            start_time:this.$store.state.start_time,
            run_time:this.$store.state.run_time*/
            train_no: '',
            start: '',
            end: '',
            end_time: '',
            start_time: '',
            run_time: '',
            myticket: false,
            gobuy: true
        }
    },
    created() {
        var localstroage = window.localStorage;
        var train__no = localstroage.getItem('train_no');
        var start__station = localstroage.getItem('start_station');
        var end__station = localstroage.getItem('end_station');
        var end__time = localstroage.getItem('end_time');
        var start__time = localstroage.getItem('start_time');
        var run__time = localstroage.getItem('run_time');
        this.train_no = train__no;
        this.start = start__station;
        this.end = end__station;
        this.end_time = end__time;
        this.start_time = start__time;
        this.run_time = run__time;
    },
    components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    },
    methods: {
        refund() {
            if (confirm("你确定要退票吗？")) {
                window.localStorage.clear('train_no', 'start_station', 'end_station', 'end_time', 'start_time', 'run_time')
                this.myticket = true
                this.gobuy = false
            }
        },
        change() {
            router.push({ name: 'change' });
        },
        search(){
            router.push({ name: 'Homepage' });
        },
        gologin(){
            router.push({ name: 'login' })
        }
    }
}
</script>

<style>
.box {
    position: relative;
    width: 100%;
    height: 500px;
    border: 2px #000 solid;
    margin-top: 20px
}

.w3layouts-content{
    margin-top: -100px
}

.start {
    float: left;
    margin: 50px
}

.end {
    float: right;
    margin: 50px
}

.arrow {
    position: absolute;
    left: 10px;
    top: 70px
}

.train_no {
    position: absolute;
    left: 44%;
    top: 12%
}

.time {
    position: absolute;
    left: 8%;
    bottom: 25%
}

.time_ {
    margin: 25px
}

.num {
    position: absolute;
    right: 8%;
    bottom: 25%
}

.num_ {
    margin: 25px
}

.search {
    position: absolute;
    bottom: 5%;
    left: 22%;
}

.submit {
    margin: 30px
}

.hh3 {
    margin-top: -100px
}
</style>
