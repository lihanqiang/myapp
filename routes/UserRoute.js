var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */

//判断是否被注册
router.post('/validateName', function(req, res, next) {
    console.log(1);
    var name = req.body.name;
  userService.validateName(name,function(isUse){
     res.send(isUse);//这个isUse是判断是否被注册
  });
});

//验证邮箱是否可用
router.post('/validateEmail', function(req, res, next) {
    console.log(1);
    var email = req.body.email;
    userService.validateEmail(email,function(isUse){
        res.send(isUse);//这个isUse是判断是否被注册
    });
});
//这是注册的功能
router.post('/reg', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.pwd;
    var data = [name,email,pwd];
    userService.addName(data,function(){
        res.send(true); //注册成功返回true;
    });
});

//登录的
router.post('/login', function (req, res, next) {
    //传入页面的数据给service层
    userService.login(req.body.email,req.body.pwd,function(r){
        console.log(r);
        if(r.length > 0){
            //登录成功时，将用户信息存放到session中
            req.session.users = r[0];
            res.send(true);
        }else{
            res.send(false);//这是传递是否登录成功的
        }

    })
});
router.get("/getSession",function(req,res){
    res.json(req.session.users);
});

module.exports = router;
