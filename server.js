var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");
//handles authentication
var passport = require('passport');
var session = require('express-session');

var env = require('dotenv').load();


var PORT = process.env.PORT || 8080;
var app = express();

var db = require("./models");


// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


app.use(express.static("public"));

//For Passport
app.use(session({secret: 'keyboard cat', resave: true, saveUninitialiazed:true})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

//passport testing
app.get('/', function(req, res){
  res.send('Welcome to Passport with Sequelize');
});


// Call these routes once the models route files are defined
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);


db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });
});
