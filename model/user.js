var connection = require('../module/connection.js');
exports.checkAvailable = (data, callback) => {
    var sql = "select * from `userdetails` where name = ? and password = ? and is_blocked =0 and deleted_at = 'null' and is_varified = 1";
    connection.query(sql, Object.values(data), function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}
exports.checkData1 = (data, callback) => {
    var sql = "select * from `userdetails` where  email = ? OR  mobile = ? ";
    connection.query(sql,Object.values(data), function(err, result) {
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
            let sql = "select * from `userdetails` where email = ? ";
            connection.query(sql,[data.email],function(err,result1) {
                 if (err) {
         callback(err);
     }
     else {
        callback(null,result1)
        }
            })
            
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


exports.checkId = ( condition ,callback) =>{
var sql = "select * from `userdetails` where ? ";
    connection.query(sql,[condition],function(err, result) {
        if (err) {
         callback(err);
     }
     else {
        callback(null,result)
        }
    })
}