;(function() {

	var app = this.nb;


	var regController = function($scope, $rootScope, $http) {
		$scope.genderArr = [
			{'name': 'male', 'text': '男'}, 
			{'name': 'female', 'text': '女'}
		];

		this.reg = function() {
			console.log($scope.reg)
		}
	}

	app.controller('regController', regController);
})()