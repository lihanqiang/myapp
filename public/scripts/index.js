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

		var homeState = {
			name: 'home',
			url: '/home',
			templateUrl: 'partials/home.html',
			controller: 'homeController',
			controllerAs: 'ctrl'
		};

		$urlRouterProvider.when('', '/home').otherwise('/home');

		$stateProvider.state(homeState);

		// $locationProvider.html5Mode(true);
	})



})()