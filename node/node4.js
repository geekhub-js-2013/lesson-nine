var express = require('express');

var app = express();

app.use(function(req, res, next) {
    res.write('Hello');
    next();
});

app.post('/', function(req, res){
    res.send('World');
});

app.delete('/2', function(req, res){
    res.send('World 2');
});

app.listen(3000);
