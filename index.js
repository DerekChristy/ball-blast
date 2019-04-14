var express = require('express');
var app = express();
var path = require('path');

const PORT = process.env.PORT || 3000

app.use(express.static(path.join(__dirname + "/public/")));
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/ball-blast.html");
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));