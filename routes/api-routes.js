var db = require("../models");
module.exports= function(app){

	//Populates data to the parent dashboard upon logging in, based on userId
	// app.get("/dashboard", function(req, res) {
	// 		var data = {};
	// 		db.Task.findAll({
	// 			where: {
 //    			userId: 1 //replace with variable of user ID
 //  			}
	// 		}).then(function(tasks) {
	// 			data.task=tasks;
	// 		db.Gift.findAll({
	// 			where: {
 //    			userId: 1 //replace with variable of user ID
 //  			}
	// 		}).then(function(gifts) {
	// 			data.gift=gifts;
	// 		res.render('dashboard.handlebars', data);
	// 			// console.log(data);
	// 		})
 //   		 });
 // 	 });


	// Creates new task and redirected to /tasklist for updating list
	app.post("/child", function(req, res) {
			db.Task.create({
	      task: req.body.task,
	      userId: 1 //replace with variable of user ID
    }).then(function(result) {
    	res.redirect("/tasklist");
    	});
  	});


	//After parent creates a new task, GET all tasks and wishes. 
	app.get("/tasklist", function(req, res) {
			var data = {};
			db.Task.findAll({
				where: {
    			userId: 1 //replace with variable of user ID
  			}
			}).then(function(tasks) {
				data.task=tasks;
			db.Gift.findAll({
				where: {
    			userId: 1 //replace with variable of user ID
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
    app.post("/child", function(req, res){
        db.Task.create({
          task: req.body.task,
          userId: 1
    }).then(function(result) {
      res.render('child.handlebars', {task: result.dataValues});
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

};
