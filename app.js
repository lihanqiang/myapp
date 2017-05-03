var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var userRoute = require('./routes/UserRoute');
var productRoute = require('./routes/productRoute');
var messageRoute = require('./routes/messageRoute');
var shop_carRoute = require('./routes/shop_carRoute');
var app = express();
//加载session模块
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'dist')));
app.use(session({
    secret:"lovo", //加密的随机串
    //cookie:{maxAge:60 * 60 * 1000},
    resave:false,
    saveUninitialized:true

}));

app.use('/users', userRoute);
app.use('/product', productRoute);
app.use('/message', messageRoute);
app.use('/shop_car', shop_carRoute);


var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('服务器已启动，监听地址为：http://%s:%s', host, port);
});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
