var connection = require('../module/connection.js');
exports.checkAvailable = (data, callback) => {
    var sql = "select * from `userdetails` where name = ? and password = ? and is_blocked =0";
    connection.query(sql, Object.values(data), function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}
exports.submitQuery = (data, callback) => {
    var sql = "INSERT INTO `userdetails` set ?";
    connection.query(sql, [data], function(err, result) {
        if (err) {
            callback(err);
        }
         else {
            callback(null,result)
        }
    })
}
exports.check = (data, callback) => {
    var sql = "select * from `admindetails` where name = ? and password = ?";
    connection.query(sql, Object.values(data), function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}

exports.checkall = (callback) => {
    var sql = "select * from `userdetails` ";
    connection.query(sql,function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}

exports.checkData = (callback) =>{
var sql = "select * from `userdetails` ";
    connection.query(sql,function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}