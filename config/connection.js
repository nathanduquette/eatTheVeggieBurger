// setup the code to connect Node to MySQL.
var express = require("express");
var mysql = require('mysql');

var connection = mysql.createConnection({
                 port: 3306,
                 host: 'localhost',
                 user: 'root',
                 password: 'test',
                 database: 'veggie_burger_db'
                 });

var app = express();

connection.connect(function(err){
if(!err) {
    console.log("Database is connected " + connection.threadId);    
} else {
    console.log("Error connecting to database " + err.stack);    
}
});

//  correct order???????????????????????????????????????????????????????????????????????????
module.exports = connection;
