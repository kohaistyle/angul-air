planeApp.controller("planeController", ['$scope', '$http' , '$filter', 'angulairApi', function($scope, $http, $filter, $angulairApi ) {

	$scope.customers = [];
	$scope.customer = [];

	$scope.planes = [];
	$scope.plane = [];

	$scope.isEdit = 0;

	$scope.editTrip = 0;
	$scope.usersAdded = [];

	$scope.testing = 'Booh';

	/*
		[ start ] Modale Functions / Vars
	*/

    $scope.modalOpen = 0;

	$scope.notification = {
		name : ' // Suppression',
		msg : 'Etes vous sur de vouloir supprimer ?'
	};	

	$scope.modalOptions = {
		name : ' // Suppression',
		msg : 'Etes vous sur de vouloir supprimer ?',
		action: $scope.deleteUser,
		params: []
	};


    $scope.modalCancel =  function(){
    	
    	console.log('closed');
    	alert('booh');
    };

    $scope.deleteUser =  function(){

    	$scope.tabArray.splice($scope.idx,1);
   		$scope.modalOpen = 0;


    };
	/*
		[ end ] Modale Functions / Vars
	*/


	

	$scope.optionsCities = {
      types: '(cities)'
    };  

    console.log('planeController loaded');


    $scope.customers = $angulairApi.loadCustomers();
    $scope.planes = $angulairApi.loadPlanes();



		// ---------------------------------------------------------------------------
		// Customers functions

		$scope.addCustomer = function (){

			$angulairApi.addCustomer( $scope );

		}

		$scope.deleteCustomer = function (index){

			$angulairApi.deleteCustomer( $scope, index );

		}

		$scope.editCustomer = function (index){

			console.log(index);
			$angulairApi.editCustomer( $scope, index);

		}

		$scope.updateCustomer = function (index){
			
			$angulairApi.updateCustomer( $scope, index);

		}

		$scope.cancelEdit = function(){
				$scope.isEdit = false;
				$scope.customer.id = "";
				$scope.customer.name = "";

		  	$scope.plane.destination = "";
		  	$scope.plane.date = "";
		  	$scope.plane.id = "";		  		
		}


		// ---------------------------------------------------------------------------
		// Planes functions

		$scope.addPlane = function (){

			if($scope.plane.destination /* && $scope.plane.date.value */){

			  var plane = {
			  	id : $scope.planes.length.toString(),
			  	destination	: $scope.plane.destination,
				date	: $scope.plane.date,
			  	users	: []
			 }

		  	$scope.planes.push(plane);
		  	console.log($scope.plane.date);

		  	$scope.plane.destination = "";
		  	$scope.plane.date = "";


			$scope.msg ="";
		  	localStorage.planes = JSON.stringify($scope.planes);


			}else{
				$scope.msg ="All fields are required";
			}

		}

		$scope.deletePlane = function (index){

			if(confirm("Are you sure you to delete this plane ?")){
				$scope.planes.splice(index,1);  
				localStorage.planes = JSON.stringify($scope.planes);		
			}

		}

		$scope.editPlane = function (index){

			 $scope.plane.destination = $scope.planes[index].destination;
			 $scope.plane.id = index;
			 $scope.plane.users = $scope.planes[index].users;
			 //console.log($index);

			 //$scope.plane.date = $filter('date')($filter('date')($scope.planes[$index].date, 'yyyy-MM-dd') , 'yyyy-MM-dd');
			 $scope.plane.date = new Date( $scope.planes[index].date );

			 $scope.isEdit = true;
		}

		$scope.updatePlane = function (index){
				console.log(index);

				var planeEdit = {
					id 		: index,
			  		destination	: $scope.plane.destination,
					date	: $scope.plane.date,
					users	: $scope.plane.users
				}

		  	$scope.planes[index] = planeEdit;
		  	//console.log(planeEdit);

		  	$scope.plane.destination = "";
		  	$scope.plane.date = "";
		  	$scope.plane.id = "";

			
			$scope.isEdit = false;

		  	localStorage.planes = JSON.stringify($scope.planes);

		}

		// -----------------------------------------------------
		// Trip Functions

		$scope.setEditTrip = function (res){

			$scope.editTrip = res;

		}
		
		$scope.editTripFunc = function (id){

			// id : plane id 

			var users = [];
			//console.log($scope.usersAdded);
			for (var i = 0; i < $scope.usersAdded.length; i++) {
				users.push($scope.usersAdded[i].id);
			}

			$scope.planes[id].users = users;
			localStorage.planes = JSON.stringify($scope.planes);
		}


		// -----------------------------------------------------
		// Export Functions

		$scope.exportData = function (){


			$angulairApi.exportdata( $scope.customers, $scope.planes);


		}


}]);
