var db = require("../models");
module.exports= function(app){

	//Populates data to the parent dashboard upon logging in, based on userId
	app.get("/dashboard", function(req, res) {
			var data = {};
			db.Task.findAll({
				where: {
	    		//********Once we have data in the db, replace with variable of user ID********
    			userId: 1
  			}
			}).then(function(tasks) {
				data.task=tasks;
			db.Gift.findAll({
				where: {
	    		//********Once we have data in the db, replace with variable of user ID********
    			userId: 1
  			}
			}).then(function(gifts) {
				data.gift=gifts;
			res.render('dashboard.handlebars', data);
				// console.log(data);
			})
   		 });
 	 });


	// Creates new task and redirected to /tasklist for updating list
	app.post("/child", function(req, res) {
			db.Task.create({
	      task: req.body.task,
	      userId: 1
    }).then(function(result) {
    	res.redirect("/tasklist");
    	});
  	});


	//After parent creates a new task, GET all tasks and wishes. 
	app.get("/tasklist", function(req, res) {
			var data = {};
			db.Task.findAll({
				where: {
	    		//********Once we have data in the db, replace with variable of user ID********
    			userId: 1
  			}
			}).then(function(tasks) {
				data.task=tasks;
			db.Gift.findAll({
				where: {
	    		//********Once we have data in the db, replace with variable of user ID********
    			userId: 1
  			}
			}).then(function(gifts) {
				data.gift=gifts;
			res.render('dashboard.handlebars', data);
				// console.log(data);
			})
   		 });
 	 });


	//Displays task to childs to do list
	//Changes we made during tutor session change the functionality of submit so it now longer goes to child page, will come back and modify this later
    app.post("/child", function(req, res) {
            db.Task.create({
          task: req.body.task,
    }).then(function(result) {
        console.log("Childs tasks:", result);
      res.render('child.handlebars', {task: result.dataValues.task});
    });
  });

	//Creates new gift in wishlist
	app.post("/wishlist", function(req, res){
		db.Gift.create({
			gift: req.body.gift
		}).then(function(result){
    	// console.log("wishlist", result.dataValues);
  	// res.render('dashboard.handlebars', {task: result});
    	});
  });

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

};
