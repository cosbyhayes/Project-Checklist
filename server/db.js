const mysql = require('mysql2/promise');
require('dotenv').config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME || 'todo_app', // Use your desired database name
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

pool.getConnection()
  .then((connection) => {
    console.log('✅ Connected to MySQL database!');
    connection.release();
  })
  .catch((err) => {
    console.error('❌ MySQL connection error:', err);
  });

module.exports = pool;

/* Ania's code
 const pool = new Pool
 ({user: '',
 password: '',
 host: 'localhost',
 port: 5432,
 database: 'todoapp'
}) */
