const mysql = require('mysql2');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Fatec@1234',
    database: 'contatoBD'
});


module.exports = pool.promise();