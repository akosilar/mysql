var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser')

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('public'))

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
        //respond with that count
        var count = results[0].count
        res.render('home', { count })
        // res.send('we have ' + count + ' users in our db')

    })
})

app.post('/register', (req, res) => {
    const { email } = req.body
    console.log(email)
    //inserting data
    var q = `insert into users (email) values ("${email}")`;

    connection.query(q, function (error, results, fields) {
        if (error) throw error;
        console.log(results.length, results)
    });
    res.redirect('/')
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