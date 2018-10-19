var express = require('express');
var app = express();
var port = process.env.PORT || 8080;

app.use(express.static(__dirname + "/public"));
app.get("/", function(req, res) {
    res.render("index");
})

console.log("listening on port ...")
app.listen(port);