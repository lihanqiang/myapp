;(function() {

	var app = this.nb;

	var homeController = function($scope, $rootScope, $http, $timeout) {
		$scope.isFade = false;
		$timeout(function() {
			$scope.isFade = true;
		}, 1000)
	}

	app.controller('homeController', homeController);
})()