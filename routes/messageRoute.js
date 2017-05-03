/**
 * Created by Administrator on 15-12-8.
 */
var express = require('express');
var router = express.Router();
var messageService = require("../service/messageService");

//增加评论
router.post('/addMessage',function(req, res, next){
    var t1 = req.body.myComment;//由页面传过来的类型的id;
    var t2 = req.body.times;
    var t3 = req.body.p_id;
    var t4 = req.body.u_id;
    var text = [t1,t2,t3,t4];
    messageService.addText(text,function(r){
        res.send("ok");
    })
});













module.exports = router;