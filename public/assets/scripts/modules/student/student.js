/**
 * Created by Administrator on 15-11-20.
 */

var studentModule = angular.module("studentModule",[]);
studentModule.controller("studentController",function($scope,$http){
    //��ʾ
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
    //ɾ������ down
    $scope.delData = function(id){
        $http.post("stu/del",{id:id})
            .success(function(){
                $scope.showAll(1,0);
            })
    };
    //�������� down
    $scope.add = function(){
        $http.post("stu/add",{name:$scope.username3,age:$scope.age3,sex:$scope.sex3})
            .success(function(){
                $scope.showAll(1,0);
            })
    };

    //�޸� 1.�Ȳ����� down
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
    //���޸�
    $scope.updateData  = function(){
        $http.post("stu/updateStudent",{name2:$scope.name2,sex2:$scope.sex2,age2:$scope.age2,id2:$scope.id2})
            .success(function(){
                $("#myModal").modal("hide");
                $scope.showAll(1);
            });

    };

    $scope.searchStudent = function(){
        //��������
        if($scope.searchValue == "xm"){
            $http.post("stu/searchStudentByName",{name:$scope.searchText})
                .success(function(data){
                    $scope.page.data = data;
                });
            $("#myModal1").modal("show");
        }
        //��������
        if($scope.searchValue == "nl"){
            $http.post("stu/searchStudentByAge",{age:$scope.searchText})
                .success(function(data){
                    $scope.shuju= data;
                });
            $("#myModal1").modal("show");
        }
        //�Ա�����
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

//ԭ��û��дangualr��js
//
//$(function(){
//    //����
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
//        //��������
//        if($("select option:selected").val() == "xm"){
//            $.ajax({
//                type:"post",
//                url:"stu/searchStudentByName",
//                data:{
//                    name:$("#searchForm :text").val()
//                },
//                success: function (data) {
////                        $("#showSearch").css("display","block");
//                    var str = "<table class='table '>" + "<tr><th>���</th><th>����</th><th>����</th><th>�Ա�</th></tr>";
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
//        //�Ա�����
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
//                    var str = "<table class='table'>" + "<tr><th>���</th><th>����</th><th>����</th><th>�Ա�</th></tr>";
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
//        //��������
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
//                    var str = "<table class='table'>" + "<tr><th>���</th><th>����</th><th>����</th><th>�Ա�</th></tr>";
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

//��ʾ����
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
//ɾ���ķ���
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

//����
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

//�½�����
//    function build(page) {
//        var str = "<table class='table table-bordered'>" + "<tr><th>���</th><th>����</th><th>����</th><th>�Ա�</th><th>����</th></tr>";
//        $(page.data).each(function (i) {
//            str += "<tr><td>" + this.s_id + "</td>" +
//            "<td>" + this.s_name + "</td>" +
//            "<td>" + this.s_age + "</td><td>" + this.s_sex + "</td>" +
//            "<td><input type='button' value='ɾ��' class='btn-danger' onclick='delData(" + this.s_id + ")'/>" +
//            "<input name='thisBtn' type='button' class='btn-success' value='�޸�' onclick='showById(" + this.s_id + ")'/></td>" +
//            "</tr>";
//        });
//        str += "</table>";
//        $("#d1").empty();
//        $("#d1").append(str);
//        //ƴ���ַ���
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

