/**
 * Created by Administrator on 15-11-16.
 */
var express = require('express');
var router = express.Router();
var productService = require("../service/productService");
//������ʾ���а�����ҳ
//router.post('/showAll', function (req, res, next) {
//    //����ҳ������ݸ�service��
//    productService.showAll(
//        req.body.curpage,req.body.eachpage,function(r){
//        res.json(r);
//    })
//});

//��ʾ������Ʒ
router.post('/showAllType',function(req, res, next){
    var name = req.body.t_type_name;//��ҳ�洫���������͵�id;
    productService.showAllType(name,function(r){
        res.json(r);
    })
});

//������
router.post('/searchTypeAll',function(req, res, next){
    var name = req.body.searchName;
    productService.searchTypeAll(name,function(r){
        res.json(r);
    })
});
//��ȡp_id;
router.post('/showGoods',function(req, res, next){
    var id = req.body.p_id;//��ҳ�洫���������͵�id;
    productService.showAllById(id,function(r){
        res.json(r);
    })
});




//
////ɾ��
//router.post('/del', function (req, res, next) {
//    var id = req.body.id;
//    stuService.deleteData(id,function(){
//        res.send("ɾ���ɹ�!");
//    })
//})
////����
//router.post('/add', function (req, res, next) {
//    var name = req.body.name;
//    var age = req.body.age;
//    var sex = req.body.sex;
//    var data = [name,age,sex];
//    stuService.addStudent(data,function(){
//        res.send("���ӳɹ�!");
//    })
//})
////����
//router.post('/showById', function (req, res, next) {
//    var id = req.body.id;
//    stuService.showById(id,function(r){
//        res.json(r);
//    })
//})

//router.post('/updateStudent', function (req, res, next) {
//    var id = req.body.id2;
//    var name = req.body.name2;
//    var age = req.body.age2;
//    var sex = req.body.sex2;
//    var data = [name,sex,age,id];
//    console.log(data);
//    stuService.updateStudent(data,function(){
//        res.send("�ɹ�");
//    })
//})
//
//
//router.post('/searchStudentByName', function (req, res, next) {
//    var name = req.body.name;
//    stuService.searchStudentByName(name,function(r){
//        res.json(r);
//    })
//})
//
//router.post('/searchStudentBySex', function (req, res, next) {
//    var sex = req.body.sex;
//    stuService.searchStudentBySex(sex,function(r){
//        res.json(r);
//    })
//})
//
//router.post('/searchStudentByAge', function (req, res, next) {
//    var age = req.body.age;
//    stuService.searchStudentByAge(age,function(r){
//        res.json(r);
//    })
//})





module.exports = router;