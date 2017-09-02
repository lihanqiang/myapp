;(function() {

	var app = this.nb;

	var homeController = function($scope, $rootScope, $http, $timeout, homeService) {
		var ctrl = this;
		$scope.navJson = homeService.navJson;
		$scope.imagesJson = homeService.imagesJson;
		$scope.isFirst = true;
		$scope.isMiddle = false;
		$scope.isLast = false;
		//绿色滑动块
		ctrl.changePosition = function(index) {
			$scope.thisIndex = index;
			if(index == 0) {
				$scope.isFirst = true;
				$scope.isMiddle = false;
				$scope.isLast = false;
			}
			else if(index == 1){
				$scope.isFirst = false;
				$scope.isMiddle = true;
				$scope.isLast = false;
			}
			else{
				$scope.isFirst = false;
				$scope.isMiddle = false;
				$scope.isLast = true;
			}
		}
	}

	app.controller('homeController', homeController);
})()