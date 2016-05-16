wezzerApp.service('wezzerApi', [ '$http', '$q',  function($http, $q){

	this.getCityWeatherDay = function(city, unit, lang){

		var serviceUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+city;		
	    serviceUrl += '&appid=9debc090ca37949cb8d773cc1103cc3b&units='+unit+'&lang='+lang;   

		var myDefer= $q.defer();

		$http.get(serviceUrl).then(function (response) {
		
			myDefer.resolve(response);
		
		}, function error(response){

			console.log('error');
			return myDefer.reject(response);

		});

	return myDefer.promise;

	}	


	this.getCityWeatherWeek = function(city, unit, lang){

		var serviceUrl = 'http://api.openweathermap.org/data/2.5/forecast?q='+city;	
	    serviceUrl += '&mode=json&appid=9debc090ca37949cb8d773cc1103cc3b&units='+unit+'&lang='+lang;  

		var myDefer= $q.defer();

		$http.get(serviceUrl).then(function (response) {
		
			myDefer.resolve(response);
		
		}, function error(response){

			console.log('error');
			return myDefer.reject(response);

		});

	return myDefer.promise;

	}


	//this.sayHello = function(city){

		// var serviceUrl = 'http://api.openweathermap.org/data/2.5/weather?q='+$scope.citySearch		
	 //    	serviceUrl += '&appid=9debc090ca37949cb8d773cc1103cc3b&units='+unit+'&lang='+lang;  

		// $http({
		//   method: 'GET',
		//   url: serviceUrl
		// }).then(function successCallback(response) {
		//     // this callback will be called asynchronously
		//     // when the response is available

		//     //console.log('one');
		//     //console.log(response.data);

		//     if(response.data.cod =="404"){
		//     	$scope.cityName = "No data available";		 
		//     }else{
		//     	$scope.cityName = $filter('bananaFilter')(response.data.name, 2);		    	
		//     	$scope.cityWeather = response.data.weather[0].description;
		//     	$scope.cityTemp = "Temp: " + Math.floor(response.data.main.temp)+' '+$scope.data.selectUnit+"°";
		//     	$scope.weatherIcon = "owf-"+response.data.weather[0].id;
		    	
		//     	response.data.sys.sunrise = new Date(response.data.sys.sunrise*1000);
		//     	response.data.sys.sunset = new Date(response.data.sys.sunset*1000);

		//     	$scope.cityMain = response.data.sys;

		//     }


		//   }, function errorCallback(response) {
		//     // called asynchronously if an error occurs
		//     // or server returns response with an error status.
		//     console.log('error');
		//     console.log(response.data);

		// 	$scope.error ="404";
		// 	$scope.cityName = "No data available";		    

		//   });


	//}

}]);
