console.log("API Routes working");

var db = require("../models");

module.exports= function(app){
	//Test connection
	app.get('/', function (req, res) {
  		res.send('hello world')
	})

	// post route for parent to create new task
		//what info will they pass in (name/description/etc)
		//upon submit generate token

	// app.post("/parents", function(req, res) {
	//     console.log(req.body);
	//     db.Post.create({
	//       title: req.body.title,
	//       body: req.body.body,
	//       category: req.body.category
 //    }).then(function(dbPost) {
 //      res.json(dbPost);
 //    });
 //  });



//get route where parent can view all tasks and completed yes/no
	//possibly two different routes for completed or not
	//bonus: bonus checklists if completed by due date

  // app.get("/parents", function(req, res) {
  //   db.Tasks.findAll({
  //   	//tasks
  //   }).then(function(santasHelp_db) {
  //     res.json(result);
  //   });
  // });


	// get(?) route to fire html link to enter magic link

	//get route for html that child sees upon login

	//post route to handles adding gifts to wishlist

	//bonus: parent has delete and edit routes for tasks,
	//bonus: child has delete and edit routes for wishlist gifts 

};


