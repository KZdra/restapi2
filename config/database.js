var mysql = require('mysql');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'db_api'
});

conn.connect((err)=> {
    if (err) throw err;
    console.log('connected sql')
});

module.exports = conn;
