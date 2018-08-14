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
		console.log("database not working");
	}
	else{
		console.log("database is working");
	}
});
module.exports=connection;