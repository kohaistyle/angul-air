planeApp.directive('modalConfirm', function(){

	return{
		restrict: 'A',
		scope: {
			param: "@",
			idx: "=",
			res: "=response",
			modalAction: "&",
			modalOpen: "=",
		},
		controller: function($scope, $element){

			// $scope is directive $scope

			$scope.closeme = function(){
				//console.log($scope.idx);
				$scope.modalOpen = 0;
			};

		},
		transclude: true,
		templateUrl: 'assets/js/templates/modal-confirm.html'
	};

});