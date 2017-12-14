console.log("HTML Routes working");

//The path module provides utilities for working with file and directory paths.
var path = require("path");

module.exports= function(app){
  //home page (child)
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "INSERT HTML FILE PATH HERE"));
  });

  //parent login
  app.get("/parents", function(req, res) {
    res.sendFile(path.join(__dirname, "INSERT HTML FILE PATH HERE"));
  });

  //lets child view their wish list
  app.get("/mywishlist", function(req, res) {
    res.sendFile(path.join(__dirname, "INSERT HTML FILE PATH HERE"));
  });
};