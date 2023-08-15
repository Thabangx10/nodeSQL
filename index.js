// Import our npms

var express = require("express");
var app = express();

// connect our database
var dbPool = require("./data")

app.get('/', function (req, res) {
  dbPool.query("SELECT * FROM person", function (err, results) {
    if(err) {
      console.error("Query error", err);
      res.status(500).send("Error fetching data");
    } else {
      res.json(results)
    }
  })
})

// PORT
const PORT = 3000 

// listen

app.listen(PORT, function () {
  console.log("It running dude on PORT " + 3000);
})
