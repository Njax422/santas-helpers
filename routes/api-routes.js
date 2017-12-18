var db = require("../models");

module.exports= function(app){


	// POST route for parent to create new task
	// app.post("/dashboard", function(req, res){
	//     db.Task.create({
	//       task_name: req.body.task_name,
	// //****Change below key to completed once typo in model is fixed******
	//       competed: FALSE
 //    }).then(function(results) {
 //    	res.json(results);
 //    	});
	// });


	//GET route where parent can view all tasks and completed yes/no
		//possibly two different routes for completed or not
	//Eventually this will be just "/dashboard" but I'm using "/dashboard/tasks" for testing
	app.get("/dashboard/tasks", function(req, res){
	    db.Task.findAll({
	    	where: {
	    		//********Once we have data in the db, replace 1 with variable of user ID********
    			id: 1
  			}
		}).then(function(results){
      		res.render("dashboard");
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
	// app.get("/:id", function(req, res) {
	//     db.Tasks.findAll({
	//     	include: [db.Tasks]
  //   	}).then(function(santasHelp_db) {
  //     res.json(result);
  //   });
  // });
	//Michelle commented this section^ out 12/15 to
	//keep moving forward with passport, was creating error
	//cannot get findAll of undefined

	//post route to handles adding gifts to wishlist
	// app.post("/createWishList", function(req, res) {
	//     db.Gifts.create({
	//       Gift: req.body.gift_name,
 //    }).then(function(dbPost) {
 //    	res.json(result);
 //    });
 //  });

	//bonus: parent has delete and edit routes for tasks,
	//bonus: child has delete and edit routes for wishlist gifts

};
