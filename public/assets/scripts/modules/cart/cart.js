/**
 * Created by Administrator on 15-12-7.
 */
var cartModule = angular.module("cartModule",[]);
cartModule.controller("cartController",function($scope,$http,$routeParams,$location){
    //右上角的登录信息
    //获取user的信息 获得商品的信息
    $scope.loginName = "登录";
    $scope.arr=[];
    $scope.getUser=function(){
        $scope.arr=[];
        $http.get("/users/getSession").success(function(data){
            $scope.userData = data.u_id;
            $scope.loginName = "欢迎! "+ data.u_name;
            $http.post("/shop_car/showAllShop_car", {userId:$scope.userData})
                .success(function (data) {
                    $scope.page = data;
                    $scope.allPriceNum = 0;
                    for(var i=0;i<data.length;i++){
                        $scope.page[i].num=i;
                        $scope.arr.push({id:data[i].sc_id});
                        $scope.priceTemp = data[i].p_price.split("¥")[1];
                        $scope.countTemp = data[i].sc_count;
                        $scope.allPricetemp = parseInt($scope.priceTemp)*parseInt($scope.countTemp);
                        $scope.allPriceNum += $scope.allPricetemp;
                        $scope.allPrice = "¥"+$scope.allPriceNum;
                    }
                });
        })
    };
    $scope.getUser();
    //删除
    $scope.removeGoods = function(id){
        $http.post("/shop_car/delGoods", {shop_carId:$scope.arr[id].id})
            .success(function () {
                $scope.getUser();
            });
    };























    //特效
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
});





