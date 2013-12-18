var express = require('express'),
    hello = require('./my_module');

var app = express();

app.use(function(req, res, next) {
    console.log('Request');
    next();
});

app.get('/', function(req, res){
    res.send('Hello');
});

app.get('/2', function(req, res){
    res.send('World');
});

app.listen(3000);
