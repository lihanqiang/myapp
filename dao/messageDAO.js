/**
 * Created by Administrator on 15-12-8.
 */
var db = require("./database");

//����text��ӵ�message֮��
exports.addByText= function (text,func) {//���func�ǻص���������service��
    db.query("insert into t_message (m_content,m_date,m_p_id,m_u_id) values(?,?,?,?)",text, function (r) {
        func();
    })
};