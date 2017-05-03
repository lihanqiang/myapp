/**
 * Created by Administrator on 15-12-10.
 */
var shop_carDAO = require("../dao/shop_carDAO.js");
//��u_idֵ������̨
exports.showAllByU_id = function (id,func) {
    shop_carDAO.findAllByU_id(id,function (r) {
        func(r);
    })
};
//ɾ��
exports.deleteData = function (id,func) {
    shop_carDAO.deleteById(id,function () {
        func();
    })

};
//����
exports.addGoods = function (data,func) {
    shop_carDAO.add(data,function () {
        func();
    })

};
//����
exports.updateGoods = function (data,func) {
    shop_carDAO.update(data,function () {
        func();
    })
};