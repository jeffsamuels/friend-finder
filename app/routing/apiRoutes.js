var express = require("express");
var path = require("path");

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get("/api/friends", function (req, res) {
    res.sendFile(path.join(__dirname, "app/data/friends.js"));
});

app.post("/api/friends", function (req, res) {

    var newfriend = req.body;


    newfriend.name = newfriend.name.replace(/\s+/g, "").toLowerCase();

    console.log(newfriend);

    friends.push(newfriend);

    res.json(newfriend);
});

var i;

for (i=0; i < friends.length; i++) {

/// This is where my brain turned to alphabet soup.

}



app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});