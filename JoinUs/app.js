var express = require('express');
var app = express();

app.get("/", function (req, res) {
    res.send('you reached the home page')
})

app.get("/joke", function (req, res) {
    var joke = 'what dog?'
    res.send(joke)
    console.log('requested joke route')
})

app.get("/random_num", (req, res) => {
    var rand = Math.floor(Math.random() * 10) + 1
    res.send('your number is:' + rand)
})
app.listen(8080, function () {
    console.log('server running on 8080!')
})