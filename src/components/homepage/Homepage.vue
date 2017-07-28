<template>
    <div id="app">
    
        <v-header></v-header>
        <div class="categories-section main-grid-border" id="mobilew3layouts">
            <div class="container">
                <div>
                    <div>
                        <div class="list">
                            <ul class="resp-tabs-list hor_1">
                                <li>查询</li>
                                <li @click="gobuy()">购买</li>
                                <li @click="mine()">我的订单</li>
                                <li>关于我们</li>
                                <li id="login" @click="gologin()">
                                    <span>登录</span>/
                                    <span>注册</span>
                                </li>
                            </ul>
                        </div>
                        <div class="resp-tabs-container hor_1">
                            <!-- tab1 -->
                            <div>
                                <div class="tabs-box">
    
                                    <div class="tab-grids">
                                        <div id="tab1" class="tab-grid">
                                            <div class="login-form">
                                                <form id="signup">
                                                    <ol>
                                                        <li>
                                                            <h2>查询</h2>
                                                            <br>
                                                            <input type="text" id="tel" name="tel" v-model="start" placeholder="始发站" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input type="text" id="tel" name="tel" v-model="end" placeholder="终点站" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input type="date" id="tel" name="tel" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input @click="gobuy(start,end)" type="submit" class="submit" value="查询" />
                                                        </li>
                                                    </ol>
                                                </form>
    
                                            </div>
    
                                        </div>
                                    </div>
    
                                </div>
    
                            </div>
    
                        </div>
                    </div>
                </div>
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
import $ from 'jquery'

//this.$store.state
export default {
    data() {
        return {
            start: '',
            end: '',
            username:window.localStorage.getItem('username')
        }
    },
    created(){
        if(this.username){
           $("#login").hide()
        }
    },
    components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    },
    methods: {
        gobuy(start, end) {
            router.push({ name: 'buy', params: { start: start, end: end } })
        },
        refund() {
            router.push({ name: 'refund' });
        },
        change() {
            router.push({ name: 'change' });
        },
        mine() {
            router.push({ name: 'mine' });
        },
        gologin() {
            router.push({ name: 'login' })
        }
    }
}
</script>

<style>
.list {
    margin-top: -50px;
    position: relative
}
#login {
    position: absolute;
    top: -3px;
    right: 100px
}
</style>
