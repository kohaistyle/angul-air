planeApp.directive('planeList', function(){

	return{

		restrict: 'A',
		scope: {
			planesList: '=',
			editPla: '&',
			deletePla: '&'
		},
		templateUrl: 'assets/js/templates/plane-list.html'

	};
}); 
