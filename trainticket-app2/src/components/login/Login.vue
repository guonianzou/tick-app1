<template>
    <div>
        <v-header></v-header>
    
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
                                            <h4>请输入您的用户名</h4>
                                            <input class="info" type="tel" id="username" name="username" placeholder="用户名" required="required" style="width:30%" />
                                            <p class="validation01">
                                                <span class="invalid">请输入用户名</span>
                                                <span class="valid">That's what we wanted!</span>
                                            </p>
                                        </li>
                                        <li>
                                            <h4>请输入您的密码</h4>
                                            <input class="info" type="password" id="password" name="password" placeholder="密码" required="required" style="width:30%" />
                                            <p class="validation01">
                                                <span class="invalid">请输入密码</span>
                                                <span class="valid">That's what we wanted!</span>
                                            </p>
                                        </li>
                                        <li>
                                            <input @click="logo()" type="submit" class="submit" value="确认登录" />
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
        <div id="logo3" class="form">
            <form class="input1">
                <h2>注册用户</h2><br>
                <ol id="xq">
                    <li>
                        <h5>请输入您的用户名</h5>
                        <input class="inp" type="text" name="username" placeholder="用户名"/>
                    </li>
                    <li>
                        <h5>请输入您的手机号</h5>
                        <input class="inp" type="text" placeholder="密码"/>
                    </li>
                    <li>
                        <h5>请输入您的密码</h5>
                        <input class="inp" type="password" name="password" placeholder="密码"/>
                    </li>
                    <li>
                        <h5>请再次输入密码</h5>
                        <input class="inp" type="password" name="password" placeholder="请再次输入"/>
                    </li><br>
                    <li>
                        <input type="submit" class="submit" value="提交注册"/>
                    </li>
                </ol>
            </form>
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
    },
    methods: {
        //登录js123
        logo() {
            var username = document.getElementById("username").value
            var password = document.getElementById("password").value
            if (username == 'KING' && password == '123') {
                var localstroage = window.localStorage
                localstroage.setItem('username', username)
                localstroage.setItem('exit', '/退出登录')
                location.href = "index.html";
            }
            if (username.trim() == "" || password.trim() == "") {
                alert("用户和密码不能为空");
                return false;
            } else if (password.length < 2) {
                alert("密码不能低于6位");
                return false;
            }
            if (username != 'KING' || password != '123') {
                alert('用户名或密码错误')
            }
            else if (username == 'KING' || password == '123') {
                return true;
            }
            return true;
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
    width: 30%;
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

.btn {

    width: 70%;
    height: 500px;
    position: absolute;
    right: 50%;
}









/**注册**/

.form {
    width: 60%;
    height: 500px;
    position: relative;
    left: 40%;
    margin-top: 3%;
}

.input1 {
    top: 10%;
    position: relative;
    display: block;
    text-align: center
}

.inp {
    width: 30%;
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

li {
    list-style-type: none;
}

h2 {
    color: #67d8fc
}
#xq{
    margin-top: 12px;;
}
</style>