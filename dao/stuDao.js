/**
 * Created by Administrator on 15-11-16.
 */
var db = require("./database");
exports.findAll = function (curpage,eachpage,func) {//这个func是回调函数传给service层
    db.queryByPage(curpage,eachpage,"select * from students", function (r) {
        func(r);
    })
};
//删除
exports.deleteById = function (id,func) {//id是从service传过来的,这个func是回调函数传给service层
    db.query("delete from students where s_id = ?",[id], function () {
        func();
    })
};
//增加
exports.add = function (data, func) {
    db.query("insert into students (s_name,s_age,s_sex) values(?,?,?)",data, function () {
        func();
    })
}
//更新
    //先查询数据
exports.findById = function (id,func) {
    db.query("select * from students where s_id = ?",[id],function(r){
        func(r);
    });
}

exports.update = function (data,func) {
    db.query("update students set s_name = ?, s_sex = ?, s_age = ? where s_id = ?",data,function(){
        func();
    });
}

//搜索通过name

exports.searchByName = function (name,func) {
    db.query("select * from students a where a.s_name = ?",[name],function(r){
        func(r);
    });
}

//搜索通过sex

exports.searchBySex = function (sex,func) {
    db.query("select * from students a where a.s_sex = ?",[sex],function(r){
        func(r);
    });
}

//搜索通过age
exports.searchByAge = function (age,func) {
    db.query("select * from students a where  a.s_age = ?",[age],function(r){
        func(r);
    });
}