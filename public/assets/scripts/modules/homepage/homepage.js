/**
 * Created by Administrator on 15-12-7.
 */
var homepageModule = angular.module("homepageModule",[]);
homepageModule.controller("homepageController",function($scope,$http,$location){
    $scope.searchGoods = function () {
        $http.post("/product/searchTypeAll",{searchName:$scope.searchValue})
            .success(function (data) {
                console.log(data);
                $scope.pageSearch = data;
                $scope.isShow = true;
                //$(".allSearch").css("display","block");
            })
    };
    $scope.selectOptions = "type";

    //轮播主程序
    function run(){
        $(".slider img").eq(0).animate({
            "left":"-2000"
        },4000,function(){
            $(".slider").append($(this));
            $(this).css("left","1000px");
        });
        $(".slider img").eq(1).animate({
            "left":"-1000"
        },4000);
        $(".slider img").eq(2).animate({
            "left":"0"
        },4000,function(){
            isClick=false;
        });
    }
    var time;
    var isClick=false;
    //这是选择类别的效果

    $("#second").css("display","none");
    $("#third").css("display","none");
    $(".main_left ul li").eq(0).css("color","black");
    $(".main_left ul li").click(function(){
        $(".main_left ul li").css("color","#666");
        $(this).css("color","black");
        $("#second").css("display","none");
    });
    //点击推荐
    $(".main_left ul li").eq(0).click(function(){
        $("#first").css("display","block");
        $("#second").css("display","none");
        $("#third").css("display","none");
        $(".allSearch").css("display","none");
        //$scope.showAllType();
    });

    //页面以加载进来,就显示推荐的商品
    $scope.showAllType = function(){
        $http.post("/product/showAllType",{t_type_name:"推荐"})
            .success(function(data){
                $scope.page = data;
            });
    };
    $scope.showAllType();

    //搜索
    //默认是按类别
    $scope.selectOptions = "type";//默认是按类别
    $scope.chooseType = function(){
    };
    //搜索商品按类型和名字
    $scope.searchAllGoods = function(){
        $scope.chooseType();
        if($scope.selectOptions == "type"){
            $http.post('/product/showAllType',{t_type_name:$scope.searchValue})
                .success(function(data){
                    $scope.page2 = data;
                    $(".allSearch").css("display","block");
                    //$(".all").css("display","none");

                });
        }
        else{
            $http.post('/product/searchTypeAll',{searchName:$scope.searchValue})
                .success(function(data){
                    $scope.page2 = data;
                    console.log(data);
                    $(".allSearch").css("display","block");
                    //$(".all").css("display","none");
                });
        }
    };


    //点击外套
    $(".main_left ul li").eq(1).click(function(){
        $("#first").css("display","none");
        $("#second").css("display","block");
        $("#third").css("display","none");
        $(".allSearch").css("display","none");
    });
    //点击针织衫
    $(".main_left ul li").eq(2).click(function(){
        $("#first").css("display","none");
        $("#third").css("display","block");
        $("#second").css("display","none");
        $(".allSearch").css("display","none");
    });

    //点击搜索框
    $("#search_goods").click(function(){
        if($(".all").html()){
            var cx = $(".all").html();
            $(".allSearch").css("display","block");
        }
        $("#search_goods").blur(function(){
                $(".all").html(cx);
                $(".allSearch").css("display","none");
                $(".all").css("display","block");

        })
    });

    //手机端选择类别的效果
    //$("#search_goods").click(function(){
    //    if($(".all1").html()){
    //        var cx = $(".all").html();
    //    }
    //    $(".all1").html(null).css("height","1000px");
    //    $("#search_goods").blur(function(){
    //        $(".all").html(cx);
    //    })
    //});

    time=setInterval(run,6000);
    $(".slider").mouseover(function(){
        clearInterval(time);
    });
    $(".slider").mouseout(function(){
        time=setInterval(run,6000);
    });
    //桌面轮播
    $("#prev").click(function(){
        if(!isClick){
            isClick=true;
            run();
        }
    });
    $("#next").click(function(){
        if(!isClick) {
            isClick = true;
            $(".slider img").eq(0).animate({
                "left": "0"
            }, 4000);
            $(".slider img").eq(1).animate({
                "left": "1000"
            }, 4000);
            $(".slider img").eq(2).animate({
                "left": "2000"
            }, 4000, function () {
                $(".slider").append($(this));
                $(this).css("left", "-2000px");
                isClick = false;
            });
        }
    });
    //这是显示前进或者后退额hover方法
    $(function(){
        $(".slider").hover(function(){
            $("#prev").css("display","block");
            $("#next").css("display","block");
        },function(){
            $("#prev").css("display","none");
            $("#next").css("display","none");
        });
    });

//移动端的轮播
    var temp = 0;
    function running(){
        $(".shuffimg").eq(0).animate({
            marginLeft:"-50%"
        },500,function(){
            $(".shuffimg").eq(0).attr("src","../../../img/sites-abercrombie_cn-site_files/slider"+temp%3+".png");
            $(".shuffimg").css("margin-left",0);
            $(".shuffinner").append($(".shuffimg").eq(0));
            temp++
        })
    }
    var shuff = setInterval(running,3000);

    //这是上边的插件
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

    //点击登录跳转登录
    $scope.showLogin = function(){
        $location.path("/login");
    };
    //点击注册到注册
    $scope.showReg = function(){
        $location.path("/reg");
    };

    //获取user的信息
    $scope.loginName = "登录";
    $scope.getUser=function(){
        $http.get("/users/getSession").success(function(data){
            $scope.userData = data.u_id;
            if(!$scope.userData){
                $scope.loginName = "登录";
            }
            else{
                $scope.loginName = "欢迎! "+ data.u_name;
            }

        })
    };
    $scope.getUser();





});



