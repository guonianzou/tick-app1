<template>
	<div>
		<v-header></v-header>
	
		<!-- Trains-list -->
	
		<div class="w3layouts-breadcrumbs text-center">
			<div class="container">
				<span class="agile-breadcrumbs">
					<a href="index.html">
						<i class="fa fa-home home_1"></i>
					</a> /
					<span>车次列表</span>
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
							<li>购买</li>
							<li @click="mine()">我的订单</li>
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
		<!-- Trains-list -->
		<div class="agile-trains-list w3layouts-content">
			<div class="container">
				<!--bus-single -->
				<div class="w3agile single-bus">
					<h3 class="w3-head">车次表</h3>
					<!-- train-routes -->
					<div class="bus-tp">
						<div class="bus-tp-inner">
							<h3>从 {{this.tickets[0].start_station}} 至 {{this.tickets[0].end_station}}</h3>
							<div class="clearfix"></div>
						</div>
					</div>
					<!-- /train-routes -->
					<!-- bus-midd -->
					<div class="w3agile bus-midd">
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
											<a href="#" class="seat-button two" @click="buyticket(ticket.train_no,ticket.start_time,ticket.end_time,ticket.run_time,ticket.price_list)">购买</a>
										</td>
	
									</tr>
								</tbody>
							</table>
						</div>
					</div>
	
					<div class="clearfix"></div>
					<div class="modal fade" id="myModaltwo" tabindex="-1" role="dialog" aria-hidden="true">
						<div class="modal-dialog modal-lg">
							<div class="modal-content">
								<div class="modal-header">
									<button type="button" @click="clear()" class="close" data-dismiss="modal" aria-hidden="true">
										&times;</button>
									<h4 class="modal-title" id="myModalLabel">
										飞驴旅行</h4>
								</div>
								<div class="modal-body">
									<div class="row">
										<!-- Nav tabs -->
										<ul class="nav nav-tabs">
											<li>
												<a href="#Login" data-toggle="tab">请填写您的个人信息</a>
											</li>
										</ul>
										<!-- Tab panes -->
	
										<div class="tab-content">
											<div class="tab-pane active" id="Login">
												<form class="form-horizontal" action="#" method="get">
													<div class="form-group">
														<label for="username" class="col-sm-2 control-label">
															姓名:</label>
														<div class="col-sm-10">
															<input type="text" class="form-control" name="username" placeholder="姓名" required="required" />
														</div>
													</div>
													<div class="form-group">
														<label for="idnum" class="col-sm-2 control-label">
															身份证:</label>
														<div class="col-sm-10">
															<input type="text" class="form-control" name="idnum" placeholder="身份证号码" required="required" />
														</div>
													</div>
													<div class="form-group">
														<label for="mobile" class="col-sm-2 control-label">
															手机:</label>
														<div class="col-sm-10">
															<input type="tel" class="form-control" name="mobile" placeholder="手机" required="required" />
														</div>
													</div>
	
													<div class="form-group genderbox">
														<label for="price" class="col-sm-2 control-label">票价:</label>
	
														<div class="col-sm-12 gender" style="margin-left:130px">
	
															<div style="display:inline-block;margin-left:80px" v-for="price in prices" :key="price">
																<input type="radio" id="man" value="男" name="price">
																<label for="man">{{price.price}}--{{price.price__type}}</label>
															</div>
	
														</div>
	
													</div>
	
													<div class="form-group genderbox">
														<label for="gender" class="col-sm-2 control-label">性别:</label>
	
														<div class="col-sm-10 gender">
	
															<input type="radio" id="man" value="男" name="gender">
															<label for="man">男</label>
	
															<input type="radio" id="woman" value="女" name="gender">
															<label for="woman">女</label>
	
														</div>
													</div>
	
													<div class="row">
														<div class="col-sm-2">
														</div>
														<div class="col-sm-10 btn">
															<button type="submit" name="submit" class=" btn btn-primary btn-sm" @click="gotobuy()" data-dismiss="modal" aria-hidden="true">
																确定购买</button>
															<button type="submit" class=" btn btn-danger btn-sm" data-dismiss="modal" aria-hidden="true" @click="clear()">
																取消</button>
														</div>
													</div>
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
import head from '../head/Head'
import adv from '../adv/Adv'
import foot from '../foot/Foot'
import $ from 'jquery'
import router from '../../router'


//this.$store.state
export default {
	data() {
		return {
			start: this.$route.params.start,
			end: this.$route.params.end,
			tickets: [],
			prices: []
		}
	},
	created() {
		this.fetchData()
	},
	components: {
		'v-header': head,
		'adv': adv,
		'v-foot': foot
	},
	//http://apis.juhe.cn/train/s2swithprice?start=南京&end=株洲&traintype=&key=89559c2d4c9dd76a937ef323822e84d7
	methods: {
		fetchData() {
			var that = this
			$.ajax({
				url: "http://apis.juhe.cn/train/s2swithprice?start=" + this.start + "&end=" + this.end + "&traintype=&key=89559c2d4c9dd76a937ef323822e84d7",
				type: 'GET',
				dataType: 'jsonp',
				success: function (data) {
					//console.log(data)
					that.tickets = data.result.list
				}
			})
		},
		/*buyticket(train_no,start_time,end_time,run_time){
            this.$store.state.train_no = train_no
			this.$store.state.start_station = this.start
			this.$store.state.end_station = this.end
			this.$store.state.end_time = end_time
			this.$store.state.run_time = run_time
			this.$store.state.start_time = start_time
			router.push({ name: 'mine'});
		}*/
		buyticket(train_no, start_time, end_time, run_time, price) {
			if (window.localStorage.getItem('username')) {
				var localstroage = window.localStorage;
				localstroage.setItem('train_no', train_no);
				localstroage.setItem('start_station', this.start);
				localstroage.setItem('end_station', this.end);
				localstroage.setItem('end_time', end_time);
				localstroage.setItem('run_time', run_time);
				localstroage.setItem('start_time', start_time)
				//router.push({ name: 'mine'});
				for (var i = 0; i < price.length; i++) {
					//console.log(price[i].price)
					//console.log(price[i].price_type)
					this.prices.push({ price: price[i].price, price__type: price[i].price_type })
				}
				$(".seat-button").attr({"data-toggle":"modal","data-target":"#myModaltwo"})
			} else {
				alert("请先登录")
			}

		},
		gotobuy() {
			router.push({ name: 'mine' });
		},
		clear() {
			this.prices = []
		},
		search() {
			router.push({ name: 'Homepage' });
		},
		gologin() {
			router.push({ name: 'login' })
		},
		mine() {
			router.push({ name: 'mine' });
		}
	}

}
</script>

<style>
.w3layouts-content {
	margin-top: -100px
}

.w3-head {
	padding-right: 150px;
}

.genderbox {
	position: relative
}

.gender {
	position: absolute;
	left: -120px;
	top: 5px
}

.btn {
	margin-left: 5%
}

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
