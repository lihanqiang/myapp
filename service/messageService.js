/**
 * Created by Administrator on 15-12-8.
 */
var messageDao = require("../dao/messageDAO.js");
//���ǲ�ѯ��Ʒ���еĹ���
exports.addText = function (text,func) {
    messageDao.addByText(text,function (r) {
        func();
    })
};