/**
 * Created by lihanqiang on 15-11-13.
 */
var userDAO = require("../dao/UserDAO");
exports.validateName = function(name,func){
    userDAO.findByName(name,function(r){
        //判断数据库查询的数据,判断是否存在用户
        if(r.length > 0){
            func(false);
        }else{
            func(true);
        }

    });
};
exports.validateEmail = function(email,func){
    userDAO.findByEmail(email,function(r){
        //判断数据库查询的数据,判断是否存在用户
        if(r.length > 0){
            func(false);
        }else{
            func(true);
        }

    });
};

exports.addName = function(data,func){
    userDAO.insertName(data, function () {
        func()
    })
};
//登录的业务
exports.login = function (email, pwd, func) {
    userDAO.findByNameAndPwd(email,pwd,function(r){
        func(r);
    })
};