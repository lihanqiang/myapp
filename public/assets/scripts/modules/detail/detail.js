/**
 * Created by Administrator on 15-12-7.
 */
var detailModule = angular.module("detailModule",[]);
detailModule.controller("detailController",function($scope,$http,$routeParams,$location){
    //获得商品的信息
    $scope.init = function(){
        $http.post("/product/showGoods", {p_id:$routeParams.id})
            .success(function (data) {
                $scope.goods_id = data[0].p_id;
                $scope.goods_name = data[0].p_name;
                $scope.price = data[0].p_price;
                $scope.introImg = data[0].p_img_item3;
                $scope.page = data;
                $scope.img = data[0].p_img_item2.split(";");//展示在左边的三张图片
                $scope.m_u_id = data[0].u_id;
                $scope.middleImgSrc = $scope.img[0];//加载完成即显示第一张图片
            });
    };
    $scope.init();
    //获取user的信息
    $scope.loginName = "登录";
    $scope.getUser=function(){
        $http.get("/users/getSession").success(function(data){
            $scope.userData = data.u_id;
            $scope.loginName = "欢迎! "+ data.u_name;
        })
    };
    $scope.getUser();

    //添加评论的信息
    $scope.addComment = function(){
        $http.get("/users/getSession").success(function(data){
            $scope.userData = data.u_id;
            var date =new Date();
            date= date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
            $http.post("/message/addMessage", {myComment:$scope.myComment,times:date,p_id:$routeParams.id,u_id: $scope.userData})
                .success(function(){
                    $http.post("/product/showGoods", {p_id:$routeParams.id})
                        .success(function(data){
                            $scope.page = data;//为什么会刷新一次才能显示啊!
                        })

                })
        });
    };

    $scope.changeImg = function(obj){
        $scope.middleImgSrc = obj.pic1;
    };

    //点击的效果
    $scope.clickBtns = function(){
        $(".chima").css("display","none");
        $(".comment").css("display","none");
        $(".nv1").click(function(){
            $(".nav_div div").css("color","black");
            $(".nav_div div").css("background","white");
            $(this).css("color","white");
            $(this).css("background","#3a3a39");
            $(".intro").css("display","block");
            $(".comment").css("display","none");
            $(".chima").css("display","none");
        });
        $(".nv2").click(function(){
            $(".nav_div div").css("color","black");
            $(".nav_div div").css("background","white");
            $(this).css("color","white");
            $(this).css("background","#3a3a39");
            $(".intro").css("display","none");
            $(".comment").css("display","none");
            $(".chima").css("display","block");
        });
        $(".nv3").click(function() {
            $(".nav_div div").css("color", "black");
            $(".nav_div div").css("background", "white");
            $(this).css("color", "white");
            $(this).css("background", "#3a3a39");
            $(".chima").css("display", "none");
            $(".intro").css("display", "none");
            $(".comment").css("display", "block");
        });
    };
    $scope.clickBtns();
//点击第三个btn,即是评论;




    //上面的特效
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

    //选择尺码的函数
    $scope.mySize = "L";
    //初始化默认选择选中L
    $(".L").css("background","#3a3a39");
    $(".L").css("color","white");
    $scope.chooseSize = function(obj){
        $(".choose_size input").css("background","buttonface");
        $(".choose_size input").css("color","black");
        $("." + obj).css("background","#3a3a39");
        $("." + obj).css("color","white");
        $scope.mySize = obj;
    };
    $scope.selectNumber = 1;//默认选择买一件
    $scope.showNum = function(){
        $scope.myNum = $scope.selectNumber;
    };
    $scope.showNum();

    //把我的数据传给下一个页面
    $scope.goCart = function () {
        console.log($scope.userData);
        $http.post("/shop_car/addGoodsByData", {shop_carCount:$scope.myNum,shop_carSize:$scope.mySize,shop_carP_id:$routeParams.id,shop_carU_id: $scope.userData})
    };

    //这是放大镜







});





