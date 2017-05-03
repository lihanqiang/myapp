/**
 * Created by Administrator on 15-12-10.
 */
var db = require("./database");

//�Ȳ�ѯ����ͨ���û�id
exports.findAllByU_id = function (id,func) {
    db.query("select * from t_users u join (t_shop_car s join  t_product p on s.sc_p_id=p.p_id) on s.sc_u_id= u.u_id where u.u_id =?",[id],function(r){
        func(r);
    });
};

//ɾ����
exports.deleteById = function (id,func) {//id�Ǵ�service��������,���func�ǻص���������service��
    db.query("delete from t_shop_car where sc_id = ?",[id], function () {
        func();
    })
};


//������Ʒ
exports.add = function (data,func) {
    db.query("insert into t_shop_car (sc_count,sc_size,sc_p_id,sc_u_id) values(?,?,?,?)",data,function(r){
        func();
    });
};
//�޸ĵ�
exports.update = function (data,func) {
    db.query("update t_shop_car set sc_count = ? where sc_id = ?",data,function(){
        func();
    });
};
