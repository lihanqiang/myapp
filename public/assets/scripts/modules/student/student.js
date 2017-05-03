/**
 * Created by Administrator on 15-11-20.
 */

var studentModule = angular.module("studentModule",[]);
studentModule.controller("studentController",function($scope,$http){
    //显示
    $scope.showAll = function(curpage,num){
        $http.post("stu/showAll",{eachpage:3,curpage:parseInt(curpage)+num})
            .success(function(data){
                $scope.page = data;
                $scope.pages=[];
                for(var i = 1; i <= data.maxpage;i++){
                    $scope.pages.push(i);
                }
            })
    };
    $scope.showAll(1,0);
    //删除数据 down
    $scope.delData = function(id){
        $http.post("stu/del",{id:id})
            .success(function(){
                $scope.showAll(1,0);
            })
    };
    //增加数据 down
    $scope.add = function(){
        $http.post("stu/add",{name:$scope.username3,age:$scope.age3,sex:$scope.sex3})
            .success(function(){
                $scope.showAll(1,0);
            })
    };

    //修改 1.先查数据 down
    $scope.showById = function(id){
        $("#myModal").modal("show");
        $http.post("stu/showById",{id:id})
            .success(function(data){
                $scope.id2 = data[0].s_id;
                $scope.name2 = data[0].s_name;
                $scope.sex2 = data[0].s_sex;
                $scope.age2 = data[0].s_age;
            });

    };
    //在修改
    $scope.updateData  = function(){
        $http.post("stu/updateStudent",{name2:$scope.name2,sex2:$scope.sex2,age2:$scope.age2,id2:$scope.id2})
            .success(function(){
                $("#myModal").modal("hide");
                $scope.showAll(1);
            });

    };

    $scope.searchStudent = function(){
        //姓名搜索
        if($scope.searchValue == "xm"){
            $http.post("stu/searchStudentByName",{name:$scope.searchText})
                .success(function(data){
                    $scope.page.data = data;
                });
            $("#myModal1").modal("show");
        }
        //年龄搜索
        if($scope.searchValue == "nl"){
            $http.post("stu/searchStudentByAge",{age:$scope.searchText})
                .success(function(data){
                    $scope.shuju= data;
                });
            $("#myModal1").modal("show");
        }
        //性别搜索
        if($scope.searchValue == "xb"){
            $http.post("stu/searchStudentBySex",{sex:$scope.searchText})
                .success(function(data){
                    console.log(data);
                    $scope.page.data = data;
                });
            $("#myModal1").modal("show");
        }
    }


});

//原来没有写angualr的js
//
//$(function(){
//    //增加
//    $("#addData :button").click(function () {
//        $.ajax({
//            type:"post",
//            url:"stu/add",
//            data:$("#addData").serialize(),
//            success: function (data) {
//                showAll();
//            }
//        })
//
//    });
//    $("#updateData :button").click(function () {
//        $.ajax({
//            type:"post",
//            url:"stu/updateStudent",
//            data:$("#updateData").serialize(),
//            success: function (data) {
//                showAll();
//            }
//        })
//    });
//
//    $("#searchForm :button").click(function () {
//
//        //姓名搜索
//        if($("select option:selected").val() == "xm"){
//            $.ajax({
//                type:"post",
//                url:"stu/searchStudentByName",
//                data:{
//                    name:$("#searchForm :text").val()
//                },
//                success: function (data) {
////                        $("#showSearch").css("display","block");
//                    var str = "<table class='table '>" + "<tr><th>编号</th><th>姓名</th><th>年龄</th><th>性别</th></tr>";
//                    $(data).each(function (i) {
//                        str += "<tr class=''><td>"+ this.s_id+ "</td>" +
//                        "<td>"+ this.s_name +"</td>" +
//                        "<td>"+this.s_age+"</td><td>"+this.s_sex+"</td>" +
//                        "</tr>";
//                    });
//                    str += "</table>";
//                    $("#myModal1").modal("show");
//                    $("#showSearch").html(str);
//                }
//
//            })
//        }
//        //性别搜索
//
//        if($("select option:selected").val() == "xb"){
//            $.ajax({
//                type:"post",
//                url:"stu/searchStudentBySex",
//                data:{
//                    sex:$("#searchForm :text").val()
//                },
//                success: function (data) {
//                    $("#myModal1").modal("show");
//                    $("#showSearch").css("display","block");
//                    var str = "<table class='table'>" + "<tr><th>编号</th><th>姓名</th><th>年龄</th><th>性别</th></tr>";
//                    $(data).each(function (i) {
//                        str += "<tr><td>"+ this.s_id+ "</td>" +
//                        "<td>"+ this.s_name +"</td>" +
//                        "<td>"+this.s_age+"</td><td>"+this.s_sex+"</td>" +
//                        "</tr>";
//                    });
//                    str += "</table>";
//                    $("#showSearch").html(str);
//                }
//
//            })
//        }
//
//        //年龄搜索
//        if($("select option:selected").val() == "nl"){
//            $.ajax({
//                type:"post",
//                url:"stu/searchStudentByAge",
//                data:{
//                    age:$("#searchForm :text").val()
//                },
//                success: function (data) {
//                    $("#myModal1").modal("show");
//                    $("#showSearch").css("display","block");
//                    var str = "<table class='table'>" + "<tr><th>编号</th><th>姓名</th><th>年龄</th><th>性别</th></tr>";
//                    $(data).each(function (i) {
//                        str += "<tr><td>"+ this.s_id+ "</td>" +
//                        "<td>"+ this.s_name +"</td>" +
//                        "<td>"+this.s_age+"</td><td>"+this.s_sex+"</td>" +
//                        "</tr>";
//                    });
//                    str += "</table>";
//                    $("#showSearch").html(str);
//                }
//
//            })
//        }
//
//    })
//    showAll();
//});

//显示所有
//    function showAll(curpage){
//        $.ajax({
//            type:"post",
//            url:"/stu/showAll",
//            data:{
//                eachpage:3,
//                curpage:curpage
//            },
//            success:function(params){
//                build(params);
//            }
//        });
//    }
//删除的方法
//    function delData(id){
//        $.ajax({
//            type:"post",
//            url:"stu/del",
//            data:{
//                id:id
//            },
//            success: function () {
//                showAll();
//            }
//        });
//    }

//更新
//    function showById(id){
//        $("#myModal").modal("show");
//        $.ajax({
//            type:"post",
//            url:"stu/showById",
//            data:{
//                id:id
//            },
//            success: function (data) {
//                console.log(data[0].s_name);
//                $("#updateData input[name=name2]").val(data[0].s_name);
//                $("#updateData input[name=sex2]").val(data[0].s_sex);
//                $("#updateData input[name=age2]").val(data[0].s_age);
//                $("#updateData input[name=id2]").val(data[0].s_id);
//            }
//        })
//        $("#gengxin").click(function () {
//            $("#myModal").modal("hide");
//        })
//    }

//新建函数
//    function build(page) {
//        var str = "<table class='table table-bordered'>" + "<tr><th>序号</th><th>姓名</th><th>年龄</th><th>性别</th><th>操作</th></tr>";
//        $(page.data).each(function (i) {
//            str += "<tr><td>" + this.s_id + "</td>" +
//            "<td>" + this.s_name + "</td>" +
//            "<td>" + this.s_age + "</td><td>" + this.s_sex + "</td>" +
//            "<td><input type='button' value='删除' class='btn-danger' onclick='delData(" + this.s_id + ")'/>" +
//            "<input name='thisBtn' type='button' class='btn-success' value='修改' onclick='showById(" + this.s_id + ")'/></td>" +
//            "</tr>";
//        });
//        str += "</table>";
//        $("#d1").empty();
//        $("#d1").append(str);
//        //拼接字符串
//        var pageStr = "";
//        for(var i = 0;i < page.maxpage;i++){
//            pageStr += "<li class='page'><a href='#' onclick='showAll("+ (i+1) +")'>"+ (i+1) +"</a></li>";
//        }
//
//        $("ul.pagination li.page").remove();
//
//        $("ul.pagination li:first").after(pageStr);
//        if(page.curpage == 1){
//            $("ul.pagination a:first").css("display","none");
//        }
//        else{
//            $("ul.pagination a:first").css("display","block");
//        }
//        if(page.curpage == page.maxpage){
//            $("ul.pagination a:last").css("display","none");
//        }
//        else{
//            $("ul.pagination a:last").css("display","block");
//        }
//
//        $("ul.pagination a:first").off("click");
//        $("ul.pagination a:last").off("click");
//        $("ul.pagination a:first").on("click",function(){
//            showAll(parseInt(page.curpage) - 1);
//        });
//        $("ul.pagination a:last").on("click",function(){
//            showAll(parseInt(page.curpage) + 1);
//        });
//    }

