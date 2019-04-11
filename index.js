var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname + "/public/")));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/ball-blast.html");
});

app.listen(3000);