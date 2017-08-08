;(function() {

	var app = this.nb;

	var loginController = function($scope, $rootScope, $http) {
		$http.get("/users/testUser").then(function(res) {
			console.log("ger");
		}, function(err) {

			console.log("gerrer");
		})
	}

	app.controller('loginController', loginController);
})()