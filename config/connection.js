// Set up MySQL connection.
var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "arfo8ynm6olw6vpn.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  port: 3306,
  user: "anlaevrtsb6om4iy",
  password: "sfonn7ap1y92oyt6",
  database: "uuomq7jylyx0o3s5"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
