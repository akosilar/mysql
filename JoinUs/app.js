var express = require('express');
var app = express();
var mysql = require('mysql')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sars',
    password: 'Password01',
    database: 'join_us',

});

app.get("/", function (req, res) {
    //find count of users in db
    var q = 'select count(*) as count from users;'
    connection.query(q, function (err, results) {
        if (err) throw err;
        var count = results[0].count
        res.send('we have ' + count + ' users in our db')

    })
    //respond with that count
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