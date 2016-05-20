planeApp.directive('tripList', function(){

	//console.log('triplist');

	return{

		restrict: 'A',
		scope: {
			tripsList: '=',
			customers: '=',
			setEditTri: '&',
		},
		templateUrl: 'assets/js/templates/trip-list.html'

	};
}); 
