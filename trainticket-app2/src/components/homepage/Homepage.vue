<template>
    <div id="app">
    
        <v-header></v-header>
    
        <div class="categories-section main-grid-border" id="mobilew3layouts">
            <div class="container">
                <div class="category-list">
                    <div id="parentVerticalTab">
                        <div class="list">
                            <ul class="resp-tabs-list hor_1">
                                <li>查询</li>
                                <li @click="gobuy()">购买</li>
                                <li @click="refund()">退票</li>
                                <li @click="change()">改签</li>
                                <li @click="mine()">我的订单</li>
                                <li @click="gywom()">关于我们</li>
    
                                <li @click="gologin()" class="login">登录/注册</li>
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
                                                            <input type="text" id="tel" name="tel" placeholder="始发站" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input type="text" id="tel" name="tel" placeholder="终点站" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input type="date" id="tel" name="tel" required="required" />
                                                        </li>
    
                                                        <li>
                                                            <input @click="gobuy()" type="submit" class="submit" value="查询" />
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

export default {
    data() {
        return {

        }
    },
    components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    },
    methods: {
        gobuy() {
            router.push({ name: 'buy' });
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
        },
        gywom(){
            router.push({name:'Gywom'})
        }
    }
}
</script>

<style>
.list {
    margin-top: -50px;
    position: relative
}

.login {
    position: absolute;
    top: -3px;
    right: 100px
}
</style>
