<template>
    <div>
        <v-header></v-header>
    
     


      <!-- Trains-list -->
	
    <div class="w3layouts-breadcrumbs text-center">
		<div class="container">
			<span class="agile-breadcrumbs"><a href="index.html"><i class="fa fa-home home_1"></i></a> / <span>车次列表</span></span>
		</div>
	</div>
	<!-- //breadcrumbs -->
	<!-- Trains-list -->
	<div class="agile-trains-list w3layouts-content">

     <div class="container">
	<!--bus-single --> 
            <div class="w3agile single-bus">
			         <h3 class="w3-head">车次表</h3>
			 <!-- train-routes -->
					<div class="bus-tp">
						<div class="bus-tp-inner">
							<h3>Trains from City1 to City2</h3>
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
					   <th>Train no.</th>  
					   <th>Train Name</th> 
					   <th>Depart. time</th> 
					   <th>Arrive time</th> 
					   <th>Days of Run</th> 
					   <th>Fare</th>
				   </tr> 
			  </thead>
		   <tbody>
		     <tr>
			    <td class="t-one">15798</td> 
			    <td class="wthree"><i class="fa fa-train" aria-hidden="true"></i> Train name </td>
 				<td class="wthree"><i class="fa fa-clock-o"></i>08:10 </td> 
				<td class="wthree"><i class="fa fa-clock-o"></i>13:10 </td> 
				<td class="seat"> <span title="Sunday">S</span> <span title="not available"></span> <span title="Tuesday">T</span> <span title="Wednesday">W</span> <span title="Thursday">T</span> <span title="Friday">F</span> <span title="Saturday">S</span></td> 
				<td class="price us">Price here
						<a href="#" data-toggle="modal" data-target="#myModalbook" class="seat-button two">Book Now</a>
				</td> 
				
			 </tr>
			 </tbody> 
		</table>
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

</style>
