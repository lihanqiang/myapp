/**
 * Created by Administrator on 15-11-16.
 */
var db = require("./database");
//���ǲ�ѯ��Ʒ���еĹ���(�ƺ�ֻ�в�ѯ)
//exports.findAll = function (curpage,eachpage,func) {//���func�ǻص���������service��
//    db.queryByPage(curpage,eachpage,"select * from t_product", function (r) {
//        func(r);
//    })
//};


//��ѯ�������Ʒ(Ҫ�����,���÷�ҳ��)
exports.findAllType= function (name,func) {//���func�ǻص���������service��
    db.query("select * from t_type y join  t_product p on y.t_id=p.p_t_id where y.t_name like ?",["%"+name+"%"], function (r) {
        func(r);//��������id��֪��������,Ȼ����ʾ���� ���id ��ʱ����id;
    })
};

//����
exports.searchAll= function (name,func) {//���func�ǻص���������service��
    db.query("select * from  t_product where p_name like ?",["%"+ name+"%"], function (r) {
        func(r);//,Ȼ����ʾ����
    })
};
//����������ҳ��ʹ�õ�,ͨ����homepage��������idֵ,����ȡ��Ӧ����Ʒ����Ϣ
exports.findAllById= function (id,func) {//���func�ǻص���������service��
    db.query("select * from t_users u join (t_message m join  t_product p on m.m_p_id=p.p_id) on m.m_u_id= u.u_id where p.p_id =?",[id], function (r) {
        func(r);//��������id��֪��������,Ȼ����ʾ���� ���id ��ʱ����id;
    })
};
