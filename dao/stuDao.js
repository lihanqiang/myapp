/**
 * Created by Administrator on 15-11-16.
 */
var db = require("./database");
exports.findAll = function (curpage,eachpage,func) {//���func�ǻص���������service��
    db.queryByPage(curpage,eachpage,"select * from students", function (r) {
        func(r);
    })
};
//ɾ��
exports.deleteById = function (id,func) {//id�Ǵ�service��������,���func�ǻص���������service��
    db.query("delete from students where s_id = ?",[id], function () {
        func();
    })
};
//����
exports.add = function (data, func) {
    db.query("insert into students (s_name,s_age,s_sex) values(?,?,?)",data, function () {
        func();
    })
}
//����
    //�Ȳ�ѯ����
exports.findById = function (id,func) {
    db.query("select * from students where s_id = ?",[id],function(r){
        func(r);
    });
}

exports.update = function (data,func) {
    db.query("update students set s_name = ?, s_sex = ?, s_age = ? where s_id = ?",data,function(){
        func();
    });
}

//����ͨ��name

exports.searchByName = function (name,func) {
    db.query("select * from students a where a.s_name = ?",[name],function(r){
        func(r);
    });
}

//����ͨ��sex

exports.searchBySex = function (sex,func) {
    db.query("select * from students a where a.s_sex = ?",[sex],function(r){
        func(r);
    });
}

//����ͨ��age
exports.searchByAge = function (age,func) {
    db.query("select * from students a where  a.s_age = ?",[age],function(r){
        func(r);
    });
}