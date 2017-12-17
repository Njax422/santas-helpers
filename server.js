//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var sequelize = require("sequelize");
var db = require("./models");
var authRoute = require ('./routes/auth.js')(app, passport);

//Authentication dependencies
var passport = require('passport');
var session = require('express-session');

var env = require('dotenv').load();
var PORT = process.env.PORT || 8080;
var app = express();

// var server = oauth2orize.createServer();

app.use(express.static("public"));

//For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

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
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//For Handlebars
app.set('views', './views')
app.engine('hbs', exphbs({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

//Passport testing
app.get('/', function (req, res){
  res.send('Welcome to Passport with Sequelize');
});

//Load passport strategies
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

//This function can probably be deleted if not used by end of project. The above function should handle same functionality, this was just another way to do it. 
//------------------------------------------------------------
// db.sequelize.sync({ force: true }).then(function() {
//   app.listen(PORT, function() {
//     console.log("App listening on PORT " + PORT);
//   });
// });
