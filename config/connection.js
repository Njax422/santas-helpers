var mysql = require('mysql');


//declare config for our db
var connection;

 if(process.env.JAWSDB_URL) {
 	connection = mysql.createConnection(process.env.JAWSDB_URL);
 } else {
 	connection = mysql.createConnection({
 	host: 'localhost',
	user: 'root',
	password: '',
	database: 'santa'
	}); 
};

//connect to database 
connection.connect(function(err){
	if(err){
		console.log("error connecting:" + err.stack);
		return;
	}
	console.log("connected as id" + connection.threadId);
});

module.exports = connection;