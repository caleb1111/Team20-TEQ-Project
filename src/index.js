var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 8080;

// singleton database module
var Datastore = require('nedb');
var db = new Datastore({filename: path.join(__dirname, 'public/db/account.db'), autoload: true});
module.exports.db = db;

app.use(express.static(__dirname + "/public"));

// ejs templates go to view folder
app.set('views', path.join(__dirname, 'public/views'));
app.set('img', path.join(__dirname, 'public/img'));
app.set('js', path.join(__dirname, 'public/js'));
app.set('controllers', path.join(__dirname, '/public/controllers'));

var loginController = require(__dirname + "/public/controllers/loginController");
var accountController = require(__dirname + "/public/controllers/accountController");
var uploadFileController = require(__dirname + "/public/controllers/uploadFileController");
var createAccController = require(__dirname + "/public/controllers/createAccController");
var homeController = require(__dirname + "/public/controllers/homeController");
var helpController = require(__dirname + "/public/controllers/helpController");
var eventLogController = require(__dirname + "/public/controllers/eventLogController");
var indexController = require(__dirname + "/public/controllers/indexController");
// we will use ejs template for the navbar
app.set("view engine", "ejs")



// fire controllers
loginController(app); 
accountController(app);
uploadFileController(app);
createAccController(app);
homeController(app);
helpController(app);
eventLogController(app);
indexController(app);

console.log("listening on port ...")
app.listen(port);