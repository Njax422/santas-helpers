var db = require("../models");

//Requires authentication to navigate dashboards
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
    return next();
  res.redirect('/');
}

module.exports= function(app){

	// Creates new task and redirected to /tasklist for updating list
	app.post("/child", isLoggedIn, function(req, res) {
		db.Task.create({
	     	task: req.body.task,
	      	userId: req.user.id
    	}).then(function(result) {
    		res.redirect("/dashboard");
    	});
  	});

  	//Creates new gift in wishlist
	app.post("/wishlist", isLoggedIn,function(req, res){
		db.Gift.create({
			gift: req.body.gift,
			userId: req.user.id
		}).then(function(result){
    	// console.log("wishlist", result.dataValues);
  			res.redirect("/child");
    	});
  });

	//Upon logging in, will display all wishes and lists associated with parent
	app.get('/dashboard', isLoggedIn, function(req,res){
		console.log(req.user.id);
		Promise.all([
			db.Task.findAll({
				where: {
				userId: req.user.id
				}
			}),
			db.Gift.findAll({
				where: {
					userId: req.user.id
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
	app.get('/child', isLoggedIn, function(req,res){
		Promise.all([
			db.Task.findAll({
				where: {
				userId: req.user.id
				}
			}),
			db.Gift.findAll({
				where: {
					userId: req.user.id
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
