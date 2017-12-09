var express = require("express");
var bodyParser = require("body-parser");

var port = 3000;

var app = express();

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


// Import routes and give the server access to them.
var routes = require("./controllers/task_controller.js");
app.use("/", routes);
app.listen(port);

console.log("server js working");
