
const mysql = require("mysql");


const db = mysql.createPool({
    connectionLimit : 15,
    multipleStatements: true,
    user: "root",
    host: "localhost",
    password: "",
    database: "jealt",
  });

  module.exports = db;