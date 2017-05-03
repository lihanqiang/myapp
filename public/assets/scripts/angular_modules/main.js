/**
 * Created by Administrator on 15-11-20.
 */
var mainApp = angular.module("mainApp",["ngRoute","regModule","loginModule","homepageModule","detailModule","cartModule"]);
mainApp.config(["$routeProvider",function($routeProvider){
    //≈‰÷√¬∑”…
    $routeProvider.when("/reg",{templateUrl:"js/modules/reg/reg.html",controller:"regController"});
    $routeProvider.when("/login",{templateUrl:"js/modules/login/login.html",controller:"loginController"});
    $routeProvider.when("/detail",{templateUrl:"js/modules/detail/detail.html",controller:"detailController"});
    $routeProvider.when("/cart",{templateUrl:"js/modules/cart/cart.html",controller:"cartController"});
    $routeProvider.when("/homepage",{templateUrl:"js/modules/homepage/homepage.html",controller:"homepageController"});
    $routeProvider.otherwise({
        redirectTo:"/homepage"
    })
}]);

