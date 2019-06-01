var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// boilerplate above
// logic below

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/routing/htmlRoutes.js"));
  });

  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/routing/apiRoutes.js"));
  });

  //listener

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });

 