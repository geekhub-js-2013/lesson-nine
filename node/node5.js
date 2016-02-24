var express = require('express');

var app = express();

app.use('/static/home/', express.static(__dirname));

app.get('/', function(req, res){
    res.send('World');
});

app.get('/2', function(req, res){
    res.send('World 2');
});

app.listen(3000);
