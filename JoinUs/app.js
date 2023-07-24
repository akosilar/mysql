var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send('you reached the home page')
})

app.listen(8080, function () {
    console.log('server running on 8080!')
})