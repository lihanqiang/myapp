/**
 * Created by Administrator on 15-11-20.
 */
var loginModule = angular.module("loginModule",[]);
loginModule.controller("loginController",function($scope,$http,$location){
    $scope.login = function(){
        $http.post("/users/login", {email: $scope.email, pwd: $scope.password})
            .success(function (data) {
                if (data == "true") {
                    $location.path("/homepage");
                }
                else {
                    $scope.isCreate = "账户或密码错误!";
                    $scope.isCreateStyle = "red";
                }
            });
    };


    $scope.move = function(){
        $('li.mainlevel').mousemove(function(event){
            //console.log(1);
            $(this).find('ul').slideDown();//you can give it a speed
            event.stopPropagation();
        });
        $('li.mainlevel').mouseleave(function(event){
            $(this).find('ul').slideUp("fast");
            event.stopPropagation();
        })


    };
})