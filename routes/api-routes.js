var db = require("../models");

module.exports= function(app){

	// post route for parent to create new task
	// 	what info will they pass in (name/description/etc)
	// 	upon submit generate token
	app.post("/parents", function(req, res) {
	    db.Tasks.create({
	      task_name: req.body.task_name,
    }).then(function(dbPost) {
    	console.log("/parents routing working");
    	res.json(result);
    });
  });


//get route where parent can view all tasks and completed yes/no
	//possibly two different routes for completed or not
	//bonus: bonus checklists if completed by due date
	app.get("/parents", function(req, res) {
	    db.Tasks.findAll({
	    	include: [db.Tasks]
    	}).then(function(santasHelp_db) {
      res.json(result);
    });
  });


	// get(?) route to fire html link to enter magic link
	// app.get("/", function(req, res) {
	//     db.Tasks.findAll({
	//     	include: [db.Tasks]
 //    	}).then(function(santasHelp_db) {
 //      res.json(result);
 //    });
 //  });

	//get route for html that child sees upon login
	app.get("/:id", function(req, res) {
	    db.Tasks.findAll({
	    	include: [db.Tasks]
    	}).then(function(santasHelp_db) {
      res.json(result);
    });
  });

	//post route to handles adding gifts to wishlist
	app.post("/createWishList", function(req, res) {
	    db.Gifts.create({
	      Gift: req.body.gift_name,
    }).then(function(dbPost) {
    	res.json(result);
    });
  });

	//bonus: parent has delete and edit routes for tasks,
	//bonus: child has delete and edit routes for wishlist gifts 

};


