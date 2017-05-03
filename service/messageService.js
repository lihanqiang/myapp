/**
 * Created by Administrator on 15-12-8.
 */
var messageDao = require("../dao/messageDAO.js");
//这是查询商品所有的功能
exports.addText = function (text,func) {
    messageDao.addByText(text,function (r) {
        func();
    })
};