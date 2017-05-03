/**
 * Created by Administrator on 15-11-16.
 */
var db = require("./database");
//这是查询商品所有的功能(似乎只有查询)
//exports.findAll = function (curpage,eachpage,func) {//这个func是回调函数传给service层
//    db.queryByPage(curpage,eachpage,"select * from t_product", function (r) {
//        func(r);
//    })
//};


//查询分类的商品(要用外键,不用分页了)
exports.findAllType= function (name,func) {//这个func是回调函数传给service层
    db.query("select * from t_type y join  t_product p on y.t_id=p.p_t_id where y.t_name like ?",["%"+name+"%"], function (r) {
        func(r);//给个类型id就知道了类型,然后显示所有 这个id 及时类别的id;
    })
};

//搜索
exports.searchAll= function (name,func) {//这个func是回调函数传给service层
    db.query("select * from  t_product where p_name like ?",["%"+ name+"%"], function (r) {
        func(r);//,然后显示所有
    })
};
//这是在详情页面使用的,通过从homepage传过来的id值,来获取相应的商品的信息
exports.findAllById= function (id,func) {//这个func是回调函数传给service层
    db.query("select * from t_users u join (t_message m join  t_product p on m.m_p_id=p.p_id) on m.m_u_id= u.u_id where p.p_id =?",[id], function (r) {
        func(r);//给个类型id就知道了类型,然后显示所有 这个id 及时类别的id;
    })
};
