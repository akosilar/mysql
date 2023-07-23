const { faker } = require('@faker-js/faker');

const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sars',
    password: 'Password01',
    database: 'join_us',
    insecureAuth: true
});

connection.connect();


var q = 'select curdate() as date, curtime() as time, now() as now';
connection.query(q, function(error,results,fields){
    if(error) throw error;
    console.log(results[0])
});

connection.end();

// for (let index = 0; index < 10; index++) {
//     console.log(faker.internet.email());


// }