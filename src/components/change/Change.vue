<template>
    <div>
        <v-header></v-header>
    
        <div class="book-a-ticket">
    
            <h3 class="mine">我的订单</h3>
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
                        </span>
                    </div>
    
                </div>
    
            </div>
        </div>
    
        <!-- tab1 -->
        <div class="thbox">
            <div class="tab-grids">
                <div id="tab1" class="tab-grid">
                    <div class="login-form">
                        <form id="signup">
                            <ol>
                                <li>
                                    <h3 class="choose">请选择您要改签的车票</h3>
                                    <br>
                                    <input type="text" id="tel" name="tel" v-model="change_start" placeholder="始发站" required="required" />
                                </li>
    
                                <li>
                                    <input type="text" id="tel" name="tel" v-model="change_end" placeholder="终点站" required="required" />
                                </li>
    
                                <li>
                                    <input type="date" id="tel" name="tel" required="required" />
                                </li>
    
                                <li>
                                    <button @click="fetchdata()" type="button" class="search">查询</button>
                                </li>
                            </ol>
                        </form>
                    </div>
    
                </div>
            </div>
    
        </div>
        <div class="w3agile bus-midd">
            <div class="bus-tp">
                <div class="bus-tp-inner" :hidden="hid">
                    <h3>从 {{change_start}} 至 {{change_end}}</h3>
                    <div class="clearfix"></div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-bordered agileinfo">
                    <thead>
                        <tr>
                            <th>车次</th>
                            <th>出发</th>
                            <th>到达</th>
                            <th>行车时间</th>
                            <th>票价</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="ticket in tickets" :key="ticket.train_type">
                            <td class="t-one">{{ticket.train_no}}</td>
                            <td class="wthree">
                                <i class="fa fa-train" aria-hidden="true"></i> {{ticket.start_time}} </td>
                            <td class="wthree">
                                <i class="fa fa-clock-o"></i>{{ticket.end_time}} </td>
                            <td class="wthree">
                                <i class="fa fa-clock-o"></i>{{ticket.run_time}} </td>
                            <td>
                                <span v-for="price in ticket.price_list" :key="price">
                                    {{price.price_type}} {{price.price}} --
                                </span>
                            </td>
                            <td class="price us">
                                <a class="seat-button two" @click="changeticket(ticket.train_no,ticket.start_time,ticket.end_time,ticket.run_time)">改签</a>
                            </td>
    
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    
        <adv></adv>
        <v-foot></v-foot>
    </div>
</template>

<script>
import head from '../head/Head'
import adv from '../adv/Adv'
import foot from '../foot/Foot'
import $ from 'jquery'
import router from '../../router'

export default {
    data() {
        return {
            train_no: '',
            start: '',
            end: '',
            end_time: '',
            start_time: '',
            run_time: '',
            change_start: '',
            change_end: '',
            tickets: [],
            hid: true
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
        fetchdata() {
            var that = this
            $.ajax({
                url: "http://apis.juhe.cn/train/s2swithprice?start=" + this.change_start + "&end=" + this.change_end + "&traintype=&key=89559c2d4c9dd76a937ef323822e84d7",
                type: 'GET',
                dataType: 'jsonp',
                success: function (data) {
                    console.log(data)
                    that.tickets = data.result.list
                    that.hid = false
                }
            })
        },
        changeticket(train_no, start_time, end_time, run_time) {
            if (confirm("你确定改签吗？")) {
                    var localstroage = window.localStorage;
                    localstroage.setItem('train_no', train_no);
                    localstroage.setItem('start_station', this.change_start);
                    localstroage.setItem('end_station', this.change_end);
                    localstroage.setItem('end_time', end_time);
                    localstroage.setItem('run_time', run_time);
                    localstroage.setItem('start_time', start_time);
                    router.push({ name: 'mine' });
            }    
        }
    }
}
</script>

<style>
.book-a-ticket {
    margin-left: 50px
}

.box {
    position: relative;
    width: 480px;
    height: 400px;
    border: 2px #000 solid;
    margin-top: 20px
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

.mine {
    margin-top: 20px;
    margin-left: -900px
}

.thbox {
    width: 480px;
    position: absolute;
    right: 50px;
    top: 650px
}

.choose {
    margin-top: -25px;
}

.w3agile {
    margin-top: 30px
}

.search {
    display: block;
    padding: 6px 50px 11px;
    letter-spacing: 3px;
    background: #1adeed;
    font-size: 1.5em;
    color: #fff;
    font-weight: 500;
    border: none;
    outline: none;
    position: relative;
}

.seat-button {
    cursor: pointer
}
</style>
