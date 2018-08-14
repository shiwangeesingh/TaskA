var configs = require('./config');
var mysql = require('mysql');
var responses = require('./responses');
var connection = mysql.createConnection({
  host     : configs.hostName,
  user     : configs.user,
  password : configs.password,
  database : configs.dbName
});
connection.connect(function(err,res){
	if(err){
		// var error={
		// 	status: 0,
		// 	message: "Error in execution"
		// }
		console.log("database not working");
		//responses.sendError(res)
	}
	else{
		console.log("database is working");
	}
});
module.exports=connection;