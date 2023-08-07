require("dotenv").config();
const mysql = require("mysql2");

const DB_HOST = process.env.DB_HOST;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;
const DB_NAME = process.env.DB_NAME;
const DB_PORT = process.env.DB_PORT;

const con = mysql.createConnection({
  host: DB_HOST || "127.0.0.1",
  user: DB_USER || "root",
  password: DB_PASS,
  database: DB_NAME || "facebook",
  port: DB_PORT || 3306,
  multipleStatements: true
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");

  let sql =
    "DROP TABLE if exists my_films; CREATE TABLE my_films(id INT NOT NULL AUTO_INCREMENT, film_name VARCHAR(75) not null, status VARCHAR(30) not null, image_url VARCHAR (100) not null, imdb_film_id VARCHAR(30) not null);";
  con.query(sql, function(err, result) {
    if (err) throw err;
    console.log("Table creation `students` was successful!");

    console.log("Closing...");
  });

  con.end();
});
