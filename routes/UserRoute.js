var express = require('express');
var router = express.Router();
var userService = require("../service/UserService");

/* GET users listing. */

//�ж��Ƿ�ע��
router.post('/validateName', function(req, res, next) {
    console.log(1);
    var name = req.body.name;
  userService.validateName(name,function(isUse){
     res.send(isUse);//���isUse���ж��Ƿ�ע��
  });
});

//��֤�����Ƿ����
router.post('/validateEmail', function(req, res, next) {
    console.log(1);
    var email = req.body.email;
    userService.validateEmail(email,function(isUse){
        res.send(isUse);//���isUse���ж��Ƿ�ע��
    });
});
//����ע��Ĺ���
router.post('/reg', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var pwd = req.body.pwd;
    var data = [name,email,pwd];
    userService.addName(data,function(){
        res.send(true); //ע��ɹ�����true;
    });
});

//��¼��
router.post('/login', function (req, res, next) {
    //����ҳ������ݸ�service��
    userService.login(req.body.email,req.body.pwd,function(r){
        console.log(r);
        if(r.length > 0){
            //��¼�ɹ�ʱ�����û���Ϣ��ŵ�session��
            req.session.users = r[0];
            res.send(true);
        }else{
            res.send(false);//���Ǵ����Ƿ��¼�ɹ���
        }

    })
});
router.get("/getSession",function(req,res){
    res.json(req.session.users);
});

module.exports = router;
