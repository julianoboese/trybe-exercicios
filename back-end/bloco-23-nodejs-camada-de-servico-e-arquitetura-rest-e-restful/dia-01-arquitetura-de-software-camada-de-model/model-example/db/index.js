const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'localhost',
  user: 'julianoboese',
  password: 'password',
  database: 'model_example',
});

module.exports = connection;
