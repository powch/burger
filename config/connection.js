const mysql = require('mysql');

const connection = mysql.createConnection({
    port: 3306,
    user: 'root',
    password: '',
    database: 'burgers_db'
});

connection.connect(err => {
    if (err) console.log(err);
    console.log(`Connected as id: ${connection.threadId}`);
});

module.exports = connection;