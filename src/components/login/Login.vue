<template>
    <div>
        <v-header></v-header>
        <div class="categories-section main-grid-border" id="mobilew3layouts">
            <div class="container">
                <div>
                    <div class="list">
                        <ul class="resp-tabs-list hor_1">
                            <li @click="search()">查询</li>
                            <li @click="gobuy()">购买</li>
                            <li @click="mine()">我的订单</li>
                            <li>关于我们</li>
                            <li id="login">
                                <span>登录</span>/
                                <span>注册</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="logo1" class="resp-tabs-container hor_1">
            <!-- tab1 -->
            <div class="btn">
                <div class="tabs-box">
                    <img src="static/images/mobile.png" class="w3ls-mobile" alt="" data-pin-nopin="true">
                    <ul class="tabs-menu">
                        <li>
                            <label class="radio">
                                <i></i>请登录您的账号</label>
                        </li>
                    </ul>
                    <div class="clearfix"> </div>
                    <div class="tab-grids">
                        <div id="tab1" class="tab-grid">
                            <div class="login-form">
                                <form id="signup">
                                    <ol>
                                        <li>
                                            <p id="loginuser" style="color:red"></p>
                                            <h4>请输入您的用户名</h4>
                                            <input class="info" type="tel" id="username" name="username" placeholder="用户名" required="required" style="width:100%" @focus="hidden()" />
    
                                        </li>
                                        <li>
                                            <h4>请输入您的密码</h4>
                                            <input class="info" type="password" id="password" name="password" placeholder="密码" required="required" style="width:100%" @focus="hidden()" />
                                        </li>
                                        <li>
                                            <input @click="login()" class="submit" value="确认登录" />
                                        </li>
                                    </ol>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
        </div>
    
        <!-- 注册 -->
    
        <div id="logo2" class="resp-tabs-container hor_1">
            <!-- tab1 -->
            <div class="btn">
                <div class="tabs-box">
                    <ul class="tabs-menu">
                        <li>
                            <label class="radio">
                                <i></i>注册账号</label>
                        </li>
                    </ul>
                    <p id="reguser" style="color:red"></p>
                    <div class="clearfix"> </div>
                    <div class="tab-grids">
                        <div id="tab1" class="tab-grid">
                            <div class="login-form">
                                <div id="signup">
                                    <ol>
                                        <li>
                                            <h4>请输入您的用户名</h4>
                                            <input class="info" type="tel" id="regusername" name="regusername" placeholder="用户名" required="required" style="width:100%" @focus="hidden()" />
                                        </li>
                                        <li>
                                            <h4>请输入您的密码</h4>
                                            <input class="info" type="password" id="regpassword" name="regpassword" placeholder="密码" required="required" style="width:100%" @focus="hidden()" />
                                        </li>
                                        <li>
                                            <h4>请确认您的密码</h4>
                                            <input class="info" type="password" id="surepassword" name="password" placeholder="确认密码" required="required" style="width:100%" @focus="hidden()" />
                                        </li>
                                        <li>
                                            <h4>请输入您的手机号码</h4>
                                            <input class="info" type="password" id="phone" name="password" placeholder="手机号码" required="required" style="width:100%" @focus="hidden()" />
                                        </li>
                                        <li>
                                            <input class="submit" value="确认注册" @click="reg()" />
                                        </li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="clearfix"> </div>
                </div>
            </div>
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
            users: [
                {
                    username: "ShawYu",
                    password: "123456",
                },
                {
                    username: "YanZUwu",
                    password: "123456",
                },
                {
                    username: "Steve",
                    password: "123456",
                }
            ]
        }
    },
    components: {
        'v-header': head,
        'adv': adv,
        'v-foot': foot
    },
    methods: {
        login() {
            var username = document.getElementById("username").value
            var password = document.getElementById("password").value
            var flag = false
            for (var i = 0, len = this.users.length; i < len; i++) {
                if (this.users[i].username === username && this.users[i].password === password) {
                    flag = true
                    var localstroage = window.localStorage
                    localstroage.setItem('username', username)
                    localstroage.setItem('exit', '/退出登录')
                    window.history.back()
                    break
                }
            }
            if (!flag) {
                $("#loginuser").text('用户名或密码错误')
            }
        },
        reg() {
            var newuser = {
                username: '',
                password: ''
            }
            var regusername = document.getElementById("regusername").value
            var regpassword = document.getElementById("regpassword").value
            var surepassword = document.getElementById("surepassword").value
            var flag = false
            for (var i = 0, len = this.users.length; i < len; i++) {
                if (this.users[i].username === regusername) {
                    flag = true;
                    $("#reguser").text('该用户名已经被注册！')
                    break;
                }
            }
            if (!flag) {
                if (regusername == "" || regpassword == "") {
                    $("#reguser").text('账号和密码不能为空！')
                }
                if (regpassword !== surepassword) {
                    $("#reguser").text('两次输入的密码不一致！')
                } else {
                    newuser.username = regusername;
                    newuser.password = regpassword;
                    this.users.push(newuser);
                    $("#regusername").val('')
                    $("#regpassword").val('')
                    $("#surepassword").val('')
                    $("#phone").val('')
                    alert("注册成功")
                    location.href = "index.html";
                }
            }
        },
        hidden() {
            $("#reguser").text('')
            $("#loginuser").text('')
        },
        search() {
            router.push({ name: 'Homepage' });
        },
        mine() {
            router.push({ name: 'mine' });
        }
    }
}
</script>

<style>
.w3ls-mobile {
    padding-top: 30px;
    padding-right: 30px
}

.info {
    padding: 10px;
    font-weight: normal;
    background: none;
    border: 1px solid #e4e4e4;
    color: #545454;
    outline: none;
    font-size: 14px;
    transition: 0.5s all;
    -webkit-transition: 0.5s all;
    -o-transition: 0.5s all;
    -ms-transition: 0.5s all;
    background: #fff;
    -moz-transition: 0.5s all;
}

#logo1 {
    display: inline-block;
    margin-right: 20%
}

#logo2 {
    display: inline-block;
}
</style>