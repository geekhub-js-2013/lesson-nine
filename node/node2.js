var fs = require('fs');

fs.readFile('node1.js', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err;
    console.log(data);
});
