var db = require("../models");
module.exports= function(app){

	// Creates new task and redirected to /tasklist for updating list
	app.post("/child", function(req, res) {
		db.Task.create({
	     	task: req.body.task,
	      	userId: 1 //replace with variable of user ID
    	}).then(function(result) {
    		res.redirect("/dashboard");
    	});
  	});

  	//Creates new gift in wishlist
	app.post("/wishlist", function(req, res){
		db.Gift.create({
			gift: req.body.gift,
			userId: 1 //replace with variable of user ID
		}).then(function(result){
    	// console.log("wishlist", result.dataValues);
  			res.redirect("/child");
    	});
  });

	//Upon logging in, will display all wishes and lists associated with parent
	app.get('/dashboard', function(req,res){
		Promise.all([
			db.Task.findAll({
				where: {
				userId: 1//res.user.ID //replace with variable of user ID
				}
			}),
			db.Gift.findAll({
				where: {
					userId: 1//res.user.ID
				}
			})
		]).then(function(data){
			rdata = {
				'task': data[0],
				'gift': data[1]
			}
			res.render('dashboard',rdata);
		}).catch(function(err){
			res.status(500);
			res.send(err);
		});
	})

	//Upon reaching the child page, will display all wishes and lists associated with child
	app.get('/child',function(req,res){
		Promise.all([
			db.Task.findAll({
				where: {
				userId: 1//res.user.ID //replace with variable of user ID
				}
			}),
			db.Gift.findAll({
				where: {
					userId: 1//res.user.ID
				}
			})
		]).then(function(data){
			rdata = {
				'task': data[0],
				'gift': data[1]
			}
			res.render('child',rdata);
		}).catch(function(err){
			res.status(500);
			res.send(err);
		});
	})

};











