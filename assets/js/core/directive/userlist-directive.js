planeApp.directive('customerList', function(){

	return{

		restrict: 'A',
		scope: {
			customersList: '=',
			editCust: '&',
			deleteCust: '&',
		},
		templateUrl: 'assets/js/templates/user-list.html'

	};
}); 
