const { faker } = require('@faker-js/faker');

const mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'sars',
    password: 'Password01',
    database: 'join_us',

});

connection.connect();


// var q = 'select curdate() as date, curtime() as time, now() as now';
// connection.query(q, function(error,results,fields){
//     if(error) throw error;
//     console.log(results[0])
// });

//selecting data
// var q = 'select count(*) from users';
// connection.query(q, function(error,results,fields){
//     if(error) throw error;
//     console.log(results.length,results)
// });


//inserting data
// var q = 'insert into users (email) values ("wyat3@gmail.com")';

// connection.query(q, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results.length, results)
// });
//inserting data using faker
// var person = { email: faker.internet.email() };

// connection.query('insert into users set ?', person, function (error, result) {
//     if (error) throw error;
//     console.log(result);
// });

//inserting time
// var person = {
//     email: faker.internet.email(),
//     created_at: faker.date.past()
// };
// var end_result = connection.query('insert into users set ?', person, function (error, result) {
//     if (error) throw error;
//     console.log(end_result);
// });

//inserting multiple data
var person = [];
for (i = 0; i < 30; i++) {
    person.push([faker.internet.email(), faker.date.past()])
};

var q = 'insert into users (email,created_at) values ?'

var end_result = connection.query(q, [person], function (error, result) {
    if (error) throw error;
    console.log(end_result);
});


console.log(person)

connection.end();

// for (let index = 0; index < 10; index++) {
//     console.log(faker.internet.email());


// }