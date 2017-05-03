/**
 * Created by Administrator on 15-11-16.
 */
var productDao = require("../dao/productDAO.js");
//这是查询商品所有的功能
//exports.showAll = function (func) {
//    productDao.findAll(function (r) {
//        func(r);
//    })
//};
//根据选择类型显示该类型的所有
exports.showAllType = function (name,func) {
    productDao.findAllType(name,function (r) {
        func(r);
    })
};

//这是搜索的
exports.searchTypeAll = function (name,func) {
    productDao.searchAll(name,function (r) {
        func(r);
    })
};
//根据id显示商品的信息
exports.showAllById = function (id,func) {
    productDao.findAllById(id,function (r) {
        func(r);
    })
};





//删除
//exports.deleteData = function (id,func) {
//    stuDao.deleteById(id,function () {
//        func();
//    })
//
//}
////增加
//exports.addStudent = function (data,func) {
//    stuDao.add(data,function () {
//        func();
//    })
//
//}
////更新
//exports.showById = function (id,func) {
//    stuDao.findById(id,function (r) {
//        func(r);
//    })
//}
//exports.updateStudent = function (data,func) {
//    stuDao.update(data,function () {
//        func();
//    })
//}
//
//exports.searchStudentByName = function (name,func) {
//    stuDao.searchByName(name,function (r) {
//        func(r);
//    })
//}
//
//exports.searchStudentBySex = function (sex,func) {
//    stuDao.searchBySex(sex,function (r) {
//        func(r);
//    })
//}
//exports.searchStudentByAge = function (age,func) {
//    stuDao.searchByAge(age,function (r) {
//        func(r);
//    })
//}

