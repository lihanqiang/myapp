/**
 * Created by Administrator on 15-12-8.
 */
var db = require("./database");

//根据text添加到message之中
exports.addByText= function (text,func) {//这个func是回调函数传给service层
    db.query("insert into t_message (m_content,m_date,m_p_id,m_u_id) values(?,?,?,?)",text, function (r) {
        func();
    })
};