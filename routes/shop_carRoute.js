/**
 * Created by Administrator on 15-12-10.
 */
var express = require('express');
var router = express.Router();
var shop_carService = require("../service/shop_carService");



//��ʾ���ﳵ��Ʒ����Ϣ
router.post('/showAllShop_car',function(req, res, next){
    var id = req.body.userId;//��ҳ�洫������user��id;
    shop_carService.showAllByU_id(id,function(r){
        res.json(r);
    })
});


//ɾ��
router.post('/delGoods', function (req, res, next) {
    var id = req.body.shop_carId;//���ﳵ��id
    shop_carService.deleteData(id,function(){
        res.send("ɾ���ɹ�!");
    })
});
//����
router.post('/addGoodsByData', function (req, res, next) {
    var sc_count = req.body.shop_carCount;
    var sc_size = req.body.shop_carSize;
    var sc_p_id = req.body.shop_carP_id;
    var sc_u_id = req.body.shop_carU_id;
    var data = [sc_count,sc_size,sc_p_id,sc_u_id];
    shop_carService.addGoods(data,function(){
        res.send("���ӳɹ�!");
    })
});
//����
router.post('/updateCount', function (req, res, next) {
    var count = req.body.shop_carCount;
    var id = req.body.shop_carId;
    var data = [count,id];
    shop_carService.updateGoods(data,function(){
        res.send("����!");
    })
});

module.exports = router;