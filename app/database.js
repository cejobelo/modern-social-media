const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'cejobelo',
    password: 's0iAJ9EIX4(oJ3KX',
    database: 'realtalk',
});
connection.connect();
module.exports = connection;