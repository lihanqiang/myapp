;(function() {

	//deps为依赖
	var deps = [
		'ui',
		'ngMaterial',
		'ui.router',
		'ngMessages'
	];

	var app = angular.module('myApp', deps);

	this.nb = app;

	app.config(function($stateProvider, $urlRouterProvider) {
		
		var loginState = {
			name: 'login',
			url: '/login',
			templateUrl: 'partials/login.html',
			controller: 'loginController',
			controllerAs: 'ctrl'
		}

		var homeState = {
			name: 'home',
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'homeController',
			controllerAs: 'ctrl'
		};

		$urlRouterProvider.when('', '/login').otherwise('/login');

		$stateProvider.state(homeState);
		$stateProvider.state(loginState);
	})



})()