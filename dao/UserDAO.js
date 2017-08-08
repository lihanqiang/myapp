/**
 * Created by lovo_bdk on 15-11-13.
 */
var db = require("./database");
//根据用户名查询信息,以便注册的时候,查询是否已经注册过;
exports.findByName = function(name,func){
    db.query("select * from t_users where u_name=?",[name],function(r){
        func(r);
    });
};
exports.findByEmail = function(email,func){
    db.query("select * from t_users where u_email=?",[email],function(r){
        func(r);
    });
};

//注册功能,加入数据;
exports.insertName = function(data,func){
    db.query("insert into t_users (u_name,u_email,u_pwd) values(?,?,?)",data,function(){
        func();
    });
};
//登录;
exports.findByNameAndPwd = function (email, pwd, func) {//name和pwd 是service层传过来的;
    db.query("select * from t_users where u_email = ? and u_pwd = ?",[email,pwd], function (r) {
        func(r);
    })
};
exports.saveSession = function(func){

}

//测试
exports.findTestAll = function(func) {
    db.query("select * from user_table", function(r){
        func(r);
    });
}
