/**
 * Created by Administrator on 15-12-10.
 */
var shop_carDAO = require("../dao/shop_carDAO.js");
//把u_id值传到后台
exports.showAllByU_id = function (id,func) {
    shop_carDAO.findAllByU_id(id,function (r) {
        func(r);
    })
};
//删除
exports.deleteData = function (id,func) {
    shop_carDAO.deleteById(id,function () {
        func();
    })

};
//增加
exports.addGoods = function (data,func) {
    shop_carDAO.add(data,function () {
        func();
    })

};
//更新
exports.updateGoods = function (data,func) {
    shop_carDAO.update(data,function () {
        func();
    })
};