/**
 * Created by Administrator on 15-11-16.
 */
var productDao = require("../dao/productDAO.js");
//���ǲ�ѯ��Ʒ���еĹ���
//exports.showAll = function (func) {
//    productDao.findAll(function (r) {
//        func(r);
//    })
//};
//����ѡ��������ʾ�����͵�����
exports.showAllType = function (name,func) {
    productDao.findAllType(name,function (r) {
        func(r);
    })
};

//����������
exports.searchTypeAll = function (name,func) {
    productDao.searchAll(name,function (r) {
        func(r);
    })
};
//����id��ʾ��Ʒ����Ϣ
exports.showAllById = function (id,func) {
    productDao.findAllById(id,function (r) {
        func(r);
    })
};





//ɾ��
//exports.deleteData = function (id,func) {
//    stuDao.deleteById(id,function () {
//        func();
//    })
//
//}
////����
//exports.addStudent = function (data,func) {
//    stuDao.add(data,function () {
//        func();
//    })
//
//}
////����
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

