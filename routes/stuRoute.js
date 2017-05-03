/**
 * Created by Administrator on 15-11-16.
 */
var express = require('express');
var router = express.Router();
var stuService = require("../service/stuService");
router.post('/showAll', function (req, res, next) {
    console.log(1);
    //传入页面的数据给service层
    stuService.showAll(req.body.curpage,req.body.eachpage,function(r){
        res.json(r);
    })
});
//删除
router.post('/del', function (req, res, next) {
    var id = req.body.id;
    stuService.deleteData(id,function(){
        res.send("删除成功!");
    })
})
//增加
router.post('/add', function (req, res, next) {
    var name = req.body.name;
    var age = req.body.age;
    var sex = req.body.sex;
    var data = [name,age,sex];
    stuService.addStudent(data,function(){
        res.send("增加成功!");
    })
})
//更新
router.post('/showById', function (req, res, next) {
    var id = req.body.id;
    stuService.showById(id,function(r){
        res.json(r);
    })
})

router.post('/updateStudent', function (req, res, next) {
    var id = req.body.id2;
    var name = req.body.name2;
    var age = req.body.age2;
    var sex = req.body.sex2;
    var data = [name,sex,age,id];
    console.log(data);
    stuService.updateStudent(data,function(){
        res.send("成功");
    })
})


router.post('/searchStudentByName', function (req, res, next) {
    var name = req.body.name;
    stuService.searchStudentByName(name,function(r){
        res.json(r);
    })
})

router.post('/searchStudentBySex', function (req, res, next) {
    var sex = req.body.sex;
    stuService.searchStudentBySex(sex,function(r){
        res.json(r);
    })
})

router.post('/searchStudentByAge', function (req, res, next) {
    var age = req.body.age;
    stuService.searchStudentByAge(age,function(r){
        res.json(r);
    })
})





module.exports = router;