const mysql = require("mysql2");
require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,

  waitForConnections: true,
  connectionLimit: 10,

  ssl: {
    rejectUnauthorized: false,
  },
});

pool.getConnection((err, connection) => {
  if (err) {
    console.log("DB ERROR:", err);
  } else {
    console.log("Railway MySQL Connected");
    connection.release();
  }
});

module.exports = pool.promise();
