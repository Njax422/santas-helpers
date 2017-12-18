var db = require("../models");
module.exports= function(app){

	// post route for parent to create new task
	// 	what info will they pass in (name/description/etc)
	// 	upon submit generate token
	app.post("/parents", function(req, res) {
			console.log('req body: ', req.body);
	    db.Task.create({
	      task: req.body.task,
    }).then(function(result) {
    	console.log("/parents routing working", result);
    	res.render('child.handlebars', {task: result.dataValues.task});
    });
  });


//get route where parent can view all tasks and completed yes/no
	//possibly two different routes for completed or not
	//bonus: bonus checklists if completed by due date
	// app.get("/parents", function(req, res) {
	//     db.Tasks.findAll({
	//     	include: [db.Tasks]
  //   	}).then(function(result) {
  //     res.render('file', result);
  //   });
  // });


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
