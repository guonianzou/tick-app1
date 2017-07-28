<template>
  <div id="app">
   
   <v-header></v-header>

<div class="categories-section main-grid-border" id="mobilew3layouts">
		<div class="container">
			<div class="category-list">
				<div id="parentVerticalTab">
					<div class="agileits-tab_nav">
					<ul class="resp-tabs-list hor_1">
						<li><i class="icon fa fa-mobile" aria-hidden="true"></i>Mobile</li>
						<li><i class="icon fa fa-television" aria-hidden="true"></i>DTH</li>
						<li><i class="icon fa fa-credit-card" aria-hidden="true"></i>Data Card</li>
						<li><i class="icon fa fa-lightbulb-o" aria-hidden="true"></i>Electricity</li>
						<li><i class="icon fa fa-phone" aria-hidden="true"></i>Land Line</li>
						<li><i class="icon fa fa-connectdevelop" aria-hidden="true"></i>Broad Band</li>
						<li><i class="icon fa fa-flask" aria-hidden="true"></i>Gas</li>
						<li><i class="icon fa fa-tint" aria-hidden="true"></i>Water</li>
						<li><i class="icon fa fa-subway" aria-hidden="true"></i>Metro</li>
					</ul>
					</div>
					<div class="resp-tabs-container hor_1">
                        <!-- tab1 -->
						<div>
                            <div class="tabs-box">
                                
                    <img src="images/mobile.png" class="w3ls-mobile" alt="" data-pin-nopin="true">
                <ul class="tabs-menu">
                    <li><a href="#tab1"><label class="radio"><input type="radio" name="radio" checked=""><i></i>Prepaid</label></a></li>
                    <li><a href="#tab2"><label class="radio"><input type="radio" name="radio"><i></i>Postpaid</label></a></li>
                </ul>
			     <div class="clearfix"> </div>
			     <div class="tab-grids">
                    <div id="tab1" class="tab-grid">  
		                      <div class="login-form">	
						<form action="pay.html" method="post" id="signup">
						<ol>							
							<li>
                                <h4>Enter your mobile number</h4>
								<input type="tel" id="tel" name="tel" pattern="\d{10}" placeholder="Enter Mobile Number" required="required" />
								<p class="validation01">
									<span class="invalid">Please enter a valid mobile number</span>
									<span class="valid">That's what we wanted!</span>
								</p>
							</li>
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true" required="required" >
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Airtel">Airtel</option>
                                  <option data-tokens="Aircel">Aircel</option>
                                  <option data-tokens="BSNL">BSNL</option>
                                  <option data-tokens="Tata Docomo">Tata Docomo</option>
                                  <option data-tokens="Reliance GSM">Reliance GSM</option>
                                  <option data-tokens="Reliance CDMA">Reliance CDMA</option>
                                  <option data-tokens="Telenor">Telenor</option>
                                  <option data-tokens="Jio">Jio</option>
                                  <option data-tokens="Vodafone">Vodafone</option>
                                  <option data-tokens="Idea">Idea</option>
                                  <option data-tokens="MTS">MTS</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true" required="required" >
                                  <option data-tokens="Select Circle">Select Circle</option>
                                  <option data-tokens="Chennai">Chennai</option>
                                  <option data-tokens="Delhi NCR">Delhi NCR</option>
                                  <option data-tokens="Kolkata">Kolkata</option>
                                  <option data-tokens="Mumbai">Mumbai</option>
                                  <option data-tokens="Maharashtra & Goa">Maharashtra & Goa</option>
                                  <option data-tokens="Assam">Assam</option>
                                  <option data-tokens="Bihar & Jharkhand">Bihar & Jharkhand</option>
                                  <option data-tokens="Gujarat">Gujarat</option>
                                  <option data-tokens="Haryana">Haryana</option>
                                  <option data-tokens="Himachal Pradesh">Himachal Pradesh</option>
                                  <option data-tokens="Jummu & Kashmir">Jummu & Kashmir</option>
                                  <option data-tokens="Karnataka">Karnataka</option>
                                  <option data-tokens="Kerala">Kerala</option>
                                  <option data-tokens="Andhra Pradesh">Andhra Pradesh</option>
                                  <option data-tokens="MP & Chattisgarh">MP & Chattisgarh</option>
                                  <option data-tokens="North East">North East</option>
                                  <option data-tokens="Orissa">Orissa</option>
                                  <option data-tokens="Punjab">Punjab</option>
                                  <option data-tokens="Rajasthan">Rajasthan</option>
                                  <option data-tokens="Tamilnadu">Tamilnadu</option>
                                  <option data-tokens="UP East">UP East</option>
                                  <option data-tokens="UP West & Utterkhand">UP West & Utterkhand</option>
                                  <option data-tokens="West Bengal">West Bengal</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <h4>How Much To Recharge?</h4>
                                    <div class="mobile-rchge">
                                        <input type="text" placeholder="Enter amount" name="amount" required="required"  />	
                                    </div>
                                    <div class="mobile-rchge">
                                        <a href="plans.html">VIEW ALL PLANS</a>
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Recharge Now" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	

                    </div>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>							
							<li>
                                <h4>Enter your mobile number</h4>
								<input type="tel" id="tel" name="tel" pattern="\d{10}" placeholder="Enter Mobile Number" required />
								<p class="validation01">
									<span class="invalid">Please enter a valid mobile number</span>
									<span class="valid">That's what we wanted!</span>
								</p>
							</li>
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Airtel">Airtel</option>
                                  <option data-tokens="Aircel">Aircel</option>
                                  <option data-tokens="BSNL">BSNL</option>
                                  <option data-tokens="Tata Docomo">Tata Docomo</option>
                                  <option data-tokens="Reliance GSM">Reliance GSM</option>
                                  <option data-tokens="Reliance CDMA">Reliance CDMA</option>
                                  <option data-tokens="Telenor">Telenor</option>
                                  <option data-tokens="Jio">Jio</option>
                                  <option data-tokens="Vodafone">Vodafone</option>
                                  <option data-tokens="Idea">Idea</option>
                                  <option data-tokens="MTS">MTS</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true" required="required" >
                                  <option data-tokens="Select Circle">Select Circle</option>
                                  <option data-tokens="Chennai">Chennai</option>
                                  <option data-tokens="Delhi NCR">Delhi NCR</option>
                                  <option data-tokens="Kolkata">Kolkata</option>
                                  <option data-tokens="Mumbai">Mumbai</option>
                                  <option data-tokens="Maharashtra & Goa">Maharashtra & Goa</option>
                                  <option data-tokens="Assam">Assam</option>
                                  <option data-tokens="Bihar & Jharkhand">Bihar & Jharkhand</option>
                                  <option data-tokens="Gujarat">Gujarat</option>
                                  <option data-tokens="Haryana">Haryana</option>
                                  <option data-tokens="Himachal Pradesh">Himachal Pradesh</option>
                                  <option data-tokens="Jummu & Kashmir">Jummu & Kashmir</option>
                                  <option data-tokens="Karnataka">Karnataka</option>
                                  <option data-tokens="Kerala">Kerala</option>
                                  <option data-tokens="Andhra Pradesh">Andhra Pradesh</option>
                                  <option data-tokens="MP & Chattisgarh">MP & Chattisgarh</option>
                                  <option data-tokens="North East">North East</option>
                                  <option data-tokens="Orissa">Orissa</option>
                                  <option data-tokens="Punjab">Punjab</option>
                                  <option data-tokens="Rajasthan">Rajasthan</option>
                                  <option data-tokens="Tamilnadu">Tamilnadu</option>
                                  <option data-tokens="UP East">UP East</option>
                                  <option data-tokens="UP West & Utterkhand">UP West & Utterkhand</option>
                                  <option data-tokens="West Bengal">West Bengal</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <h4>How Much To Pay?</h4>
                                    <div class="mobile-rchge">
                                        <input type="text" placeholder="Enter amount" name="amount" required="required"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Pay bill" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
                    </div>
				</div>
			
			<div class="clearfix"> </div>
		</div>
		
                            
							
                            
            
                    
			             </div>
						<div>
							
		                      <div class="login-form">
                                  <i class="icon fa fa-television inner-icon" aria-hidden="true"></i>
						<form action="pay.html" method="post" id="signup">
                            
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">DTH Operator</option>
                                  <option data-tokens="Airtel">Airtel</option>
                                  <option data-tokens="Aircel">Aircel</option>
                                  <option data-tokens="BSNL">BSNL</option>
                                  <option data-tokens="Tata Docomo">Tata Docomo</option>
                                  <option data-tokens="Reliance GSM">Reliance GSM</option>
                                  <option data-tokens="Reliance CDMA">Reliance CDMA</option>
                                  <option data-tokens="Telenor">Telenor</option>
                                  <option data-tokens="Jio">Jio</option>
                                  <option data-tokens="Vodafone">Vodafone</option>
                                  <option data-tokens="Idea">Idea</option>
                                  <option data-tokens="MTS">MTS</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Enter Customer ID" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Customer ID';}" required="">	
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <div class="mobile-rchge">
                                        <input type="text" placeholder="Enter amount" name="amount" required="required"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Recharge Now" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
				<div>
                    <i class="icon fa fa-credit-card inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>							
							<li>
                                  <h4>Enter your Datacard number</h4>
								<input type="tel" id="tel" name="tel" pattern="\d{10}" placeholder="Enter Datacard Number" required />
								<p class="validation01">
									<span class="invalid">Please enter a valid 10 digit Datacard number</span>
									<span class="valid">That's what we wanted!</span>
								</p>
							</li>
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                  <option data-tokens="Operator4">Operator4</option>
                                  <option data-tokens="Operator5">Operator5</option>
                                  <option data-tokens="Operator6">Operator6</option>
                                </select>
                                </div>
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <h4>How Much To Pay?</h4>
                                    <div class="mobile-rchge">
                                       <input type="text" placeholder="Enter amount" name="amount" required="required"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Recharge Now" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	

                    </div>
                    </div>
                        <div>
                            <i class="icon fa fa-lightbulb-o inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                  <option data-tokens="Operator4">Operator4</option>
                                  <option data-tokens="Operator5">Operator5</option>
                                  <option data-tokens="Operator6">Operator6</option>
                                  <option data-tokens="Operator7">Operator7</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Customer Account Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Customer Account Number';}" required="">	
                            </li>
                            
                            <li>
                                <input type="submit" class="submit" value="Proceed" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
                        </div>
						<div>
                            
							<i class="icon fa fa-phone inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                  <option data-tokens="Operator4">Operator4</option>
                                  <option data-tokens="Operator5">Operator5</option>
                                  <option data-tokens="Operator6">Operator6</option>
                                  <option data-tokens="Operator7">Operator7</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Telephone Number(with STD code)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone Number(with STD code)';}" required="">	
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <h4>How Much To Pay?</h4>
                                    <div class="mobile-rchge">
                                        <input type="text" placeholder="Enter amount" name="amount" required="required"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Pay Bill" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
							
						</div>
						<div>
							<i class="icon fa fa-connectdevelop inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                  <option data-tokens="Operator4">Operator4</option>
                                  <option data-tokens="Operator5">Operator5</option>
                                  <option data-tokens="Operator6">Operator6</option>
                                  <option data-tokens="Operator7">Operator7</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Telephone Number(with STD code)" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Telephone Number(with STD code)';}" required="">	
                            </li>
                            <li>
                                <div class="mobile-right ">
                                    <h4>How Much To Pay?</h4>
                                    <div class="mobile-rchge">
                                        <input type="text" placeholder="Enter amount" name="amount" required="required"  />
                                    </div>
                                    <div class="clearfix"></div>
                                </div>
                            </li>
                            <li>
                                <input type="submit" class="submit" value="Pay Bill" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
						</div>
						<div>
							
							<i class="icon fa fa-flask inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Gas Operator">Gas Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                  <option data-tokens="Operator4">Operator4</option>
                                  <option data-tokens="Operator5">Operator5</option>
                                  <option data-tokens="Operator6">Operator6</option>
                                  <option data-tokens="Operator7">Operator7</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Customer Account Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Customer Account Number';}" required="">	
                            </li>
                            
                            <li>
                                <input type="submit" class="submit" value="Proceed" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
						</div>
						<div>
							<i class="icon fa fa-tint inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Water Provider">Water Provider</option>
                                  <option data-tokens="Provider1">Provider1</option>
                                  <option data-tokens="Provider2">Provider2</option>
                                  <option data-tokens="Provider3">Provider3</option>
                                  <option data-tokens="Provider4">Provider4</option>
                                  <option data-tokens="Provider5">Provider5</option>
                                  <option data-tokens="Provider6">Provider6</option>
                                  <option data-tokens="Provider7">Provider7</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Consumer Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Consumer Number';}" required="">	
                            </li>
                            
                            <li>
                                <input type="submit" class="submit" value="Proceed" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
						</div>
						<div>
							<i class="icon fa fa-subway inner-icon" aria-hidden="true"></i>
                    <div id="tab2" class="tab-grid">
		                      <div class="login-form">
						<form action="pay.html" method="post" id="signup">
						<ol>	
                            <li>
                                <div class="agileits-select">
                                <select class="selectpicker show-tick" data-live-search="true">
                                  <option data-tokens="Select Operator">Select Operator</option>
                                  <option data-tokens="Operator1">Operator1</option>
                                  <option data-tokens="Operator2">Operator2</option>
                                  <option data-tokens="Operator3">Operator3</option>
                                </select>
                                </div>
                            </li>
                            <li>
                              <input type="text" id="customer" value="Enter Metro Number" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Enter Metro Number';}" required="">	
                            </li>
                            
                            <li>
                                <input type="submit" class="submit" value="Proceed" />
                            </li>
				        </ol>
						</form>	
																							
						</div>	
						</div>
						</div>
					</div>
					<div class="clearfix"></div>
				</div>
			</div>
		</div>
	</div>


 <adv></adv>
<v-foot></v-foot>

  </div>
</template>

<script>
import head from './head/Head'
import adv from './adv/Adv'
import foot from './foot/Foot'

export default {
   data () {
    return {
      
    }
  },
  components: {
    'v-header': head,
    'adv':adv,
    'v-foot':foot
  }
}
</script>

<style>

</style>
