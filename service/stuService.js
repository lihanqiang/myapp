/**
 * Created by Administrator on 15-11-16.
 */
var stuDao = require("../dao/stuDao.js");
exports.showAll = function (curpage,eachpage,func) {
    stuDao.findAll(curpage,eachpage,function (r) {
        func(r);
    })
}
//ɾ��
exports.deleteData = function (id,func) {
    stuDao.deleteById(id,function () {
        func();
    })

}
//����
exports.addStudent = function (data,func) {
    stuDao.add(data,function () {
        func();
    })

}
//����
exports.showById = function (id,func) {
    stuDao.findById(id,function (r) {
        func(r);
    })
}
exports.updateStudent = function (data,func) {
    stuDao.update(data,function () {
        func();
    })
}

exports.searchStudentByName = function (name,func) {
    stuDao.searchByName(name,function (r) {
        func(r);
    })
}

exports.searchStudentBySex = function (sex,func) {
    stuDao.searchBySex(sex,function (r) {
        func(r);
    })
}
exports.searchStudentByAge = function (age,func) {
    stuDao.searchByAge(age,function (r) {
        func(r);
    })
}

