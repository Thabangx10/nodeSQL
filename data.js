const mysql = require("mysql");

const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "258014",
  database: "localdb",
});

module.exports = dbPool;