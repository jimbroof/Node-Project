const mysql = require('mysql2');


const pool = mysql.createPool({
    host:'localhost',
    user:'root',
    database:'nodecomplete',
    password:'Gerrard9'
})

// Allows asyncrous chains in the pool
module.exports = pool.promise();