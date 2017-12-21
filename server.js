var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");

//handles authentication
var passport = require('passport');
var session = require('express-session');

var env = require('dotenv').load();

var PORT = process.env.PORT || 8080;
var app = express();

//For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static("public"));

//For Passport
app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialiazed:true
})); //session secret
app.use(passport.initialize());
app.use(passport.session()); //persistent login sessions

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

//For Handlebars
app.set('views', './views');

//Models
var db = require("./models");

//Routes
var authRoute = require ('./routes/auth.js')(app, passport);

//load passport strategies
require('./config/passport/passport.js')(passport, db.user);

// Call these routes once the models route files are defined
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

//sync Database (repeat of code below with a catch err)
db.sequelize.sync().then(function(){
  console.log('Nice! Database looks fine')
}).catch(function(err){
  console.log(err, 'Something went wrong with the Database update!')
});

app.listen(PORT, function(err) {
	if (!err)
	    console.log("App listening on PORT" + PORT);
	else console.log(err)
});

