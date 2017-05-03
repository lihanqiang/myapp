/**
 * Created by Administrator on 15-11-20.
 */
var regModule = angular.module("regModule",[]);
regModule.controller("regController",function($scope,$http,$location){
    //验证用户名
    $scope.isEmailInfo = true;
    $scope.isPwdInfo = true;
    $scope.validateUsername = function(){
        if((/^[0-9A-Za-z]{6,20}$/).test($scope.username) && $scope.username != null){
            $http.post("/users/validateName",{name:$scope.username})
                .success(function(data){
                    if(data == "true"){
                        $scope.usernameLabel = "可用";
                        $scope.isRight = "green";

                    }
                    else{
                        $scope.usernameLabel = "用户名已存在";
                        $scope.isRight = "red";
                    }
                });


        }
        else if($scope.username != null){
            $scope.usernameLabel = "格式不正确";
            $scope.isRight = "red";
        }
    };

    //验证邮箱
    $scope.validateEmail = function(){
        if((/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
            ).test($scope.email) && $scope.email != null){
            $http.post("/users/validateEmail",{email:$scope.email})
                .success(function(data){
                    console.log(data);
                    if(data == "true"){
                        $scope.emailLabel = "可用";
                        $scope.isEmailRight = "green";
                        $scope.isEmailInfo = false;
                    }
                    else{
                        $scope.emailLabel = "邮箱已存在";
                        $scope.isEmailRight = "red";
                        $scope.isEmailInfo = false;
                    }
                });
        }
        else if( $scope.email != null){
            $scope.emailLabel = "格式不正确";
            $scope.isEmailRight = "red";
            $scope.isEmailInfo = false;
        }
    };

    //验证密码
    $scope.validatePwd = function(){
        if((/^[_0-9A-Za-z]{6,20}$/).test($scope.password) && $scope.password != null){
            $scope.passwordLabel = "可用";
            $scope.isPwdRight = "green";
            $scope.isPwdInfo = false;
        }
        else if($scope.password){
            $scope.passwordLabel = "格式不正确";
            $scope.isPwdRight = "red";
            $scope.isPwdInfo = false;
        }
    };
    //验证密码是否一样
    $scope.validateConfirm= function(){
        if($scope.confirmPwd == $scope.password && $scope.confirmPwd != null){
            $scope.confirmLabel = "";
            $scope.isConfirmRight = "green";

        }
        else if($scope.confirmPwd){
            $scope.confirmLabel = "两次输入的密码不同!";
            $scope.isConfirmRight = "red";
        }
    };
    //验证码
    $scope.validateYanzhengma= function(){
        if($scope.yanzhengma == "abcd" && $scope.yanzhengma != null){
            console.log(1);
            $scope.yanzhengmaLabel = "正确";
            $scope.isYanzhengmaRight = "green";

        }
        else if($scope.yanzhengma){
            $scope.yanzhengmaLabel = "验证码错误!";
            $scope.isYanzhengmaRight = "red";
        }
    };


    $scope.validate = function(){
        if(($scope.isRight == "green") && ($scope.isPwdRight == "green") && ($scope.isEmailRight == "green") &&
            ($scope.isConfirmRight == "green") && ($scope.isYanzhengmaRight == "green")){
            $scope.validateUsername();
            $scope.validatePwd();
            $scope.validateEmail();
            $scope.validateConfirm();
            $scope.validateYanzhengma();
            if($scope.select){
                $http.post("/users/reg",{name:$scope.username,pwd:$scope.password,email:$scope.email})
                    .success(function(data){
                        $location.path("/login")
                    });
            }
            else{
                $scope.isChecked = "red";
                $scope.confirmCheck = "请勾选协议";
            }

        }
        else{
            alert("注册失败!");
        }
    }


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