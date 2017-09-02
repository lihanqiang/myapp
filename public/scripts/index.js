;(function() {

	//depsÎªÒÀÀµ
	var deps = [
		'ui',
		'ngMaterial',
		'ui.router',
		'ngMessages'
	];

	var app = angular.module('myApp', deps);

	this.nb = app;

	app.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
		

		var regState = {
			name: 'reg',
			url: '/reg',
			templateUrl: 'partials/reg.html',
			controller: 'regController',
			controllerAs: 'ctrl'
		}

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
		$stateProvider.state(regState);
		$stateProvider.state(loginState);

		$locationProvider.html5Mode(true);
	})



})()