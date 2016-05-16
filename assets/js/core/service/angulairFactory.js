planeApp.factory('angulairApi', [ '$http', '$q',  function( $http, $q){

return {

    loadCustomers : function() {

    	var customers = [];

		if(localStorage.customers){ 

			customers = JSON.parse(localStorage.customers);	

		}else{

			$http({
			  method: 'GET',
			  url: 'assets/planes.json'
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available

			    customers = response.data.customers;

				localStorage.customers = JSON.stringify(customers);

			    console.log(customers);

			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log('error');
			    console.log(response.data);
			  });
		}


      	return customers;
    },
    loadPlanes : function(){

    	var planes = [];

		if(localStorage.planes){ 

			planes = JSON.parse(localStorage.planes);	
		
		}else{

			$http({
			  method: 'GET',
			  url: 'assets/planes.json'
			}).then(function successCallback(response) {
			    // this callback will be called asynchronously
			    // when the response is available

			    planes = response.data.planes;

				localStorage.planes = JSON.stringify(planes);

			    console.log(planes);

			  }, function errorCallback(response) {
			    // called asynchronously if an error occurs
			    // or server returns response with an error status.
			    console.log('error');
			    console.log(response.data);
			  });
		}

    	return planes;
    },
    exportdata : function(c, p){

			var data = {
				"customers" : [],
				"planes" : []
			};

			data.customers = c;
			data.planes = p;


			$('.exportpad').html( JSON.stringify( data ));    	
    },
	addCustomer : function(scope){

			console.log('add');

			if(scope.customer.name && scope.customer.cardId){

			 var customer = {
			  	id : scope.customers.length.toString(),
			  	name	: scope.customer.name,
				cardId	: scope.customer.cardId
			 }

		  	scope.customers.push(customer);
		  	console.log(scope.customers);

		  	scope.customer.name = "";
		  	scope.customer.cardId = "";

			scope.msg ="";
		  	localStorage.customers = JSON.stringify(scope.customers);


			}else{
				scope.msg ="All fields are required";
			}
	
	},
	deleteCustomer : function(scope,id){

			console.log('delete // scanning and updating planes');

			if(confirm("Are you sure you to delete this customer ?")){
				scope.customers.splice(id,1);  

				for (var i=0; i < scope.planes.length; i++) {
					var users = [];

					for (var j = 0; j < scope.planes[i].users.length; j++) {
						//users.push($scope.usersAdded[i].id);
						if(scope.planes[i].users[j] != id.toString() ){
							users.push( scope.planes[i].users[j] );
						}
					
					}

					scope.planes[i].users = users;
					// console.log(users);
				}

				localStorage.customers = JSON.stringify(scope.customers);		
			}		
	},
	editCustomer : function(scope,id){
			
			scope.customer.name = scope.customers[id].name;
			scope.customer.id = id;
			scope.customer.cardId = Number(scope.customers[id].cardId);
			scope.isEdit = true;

	},
	updateCustomer : function(scope, id){

			var customerEdit = {
				id 		: id,
			  	name	: scope.customer.name,
				cardId	: scope.customer.cardId.toString()
			}

		  	scope.customers[id] = customerEdit;
		  	//console.log($scope.contactList);

		  	scope.customer.name = "";
		  	scope.customer.cardId = "";
			
			scope.isEdit = false;

		  	localStorage.customers = JSON.stringify(scope.customers);

	}

  }



}]);