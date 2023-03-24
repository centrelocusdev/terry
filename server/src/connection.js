const mysql = require("mysql");

const mysql_conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "terry_db",
});

mysql_conn.connect((err) => {
  err
    ? console.log("could not connect to database")
    : console.log("connected to database");
});

module.exports = mysql_conn;
