const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

module.exports = connection;