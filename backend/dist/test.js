var express = require('express');
var app = express();
// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
    res.send('hello world');
});
app.post('/login', function (req, res) {
    res.json({ "msg": 'ola mundo' });
});
app.listen(3001, function () {
    console.log('JSON Server is running on port: 3001');
});
