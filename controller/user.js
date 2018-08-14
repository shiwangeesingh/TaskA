var userModel = require('../model/user');
var connection = require('../module/connection.js');
var commFunc = require('../module/commonFunction');
var responses = require('../module/responses');

exports.submit = function(req, res) {
     var {name, email, password, mobile} = req.body;
    let data= commFunc.checkKeyExist({name, email, password, mobile})
    if(data.status == false || data=='undefined')
    { 
        responses.parameterMissing(res, data.data);
    }
    else
    {
      userModel.checkData1({email, mobile}, function(err, result) {
        if (err) {
            console.log(err)
            responses.sendError(res)
        }
         else {
            console.log(result)
            if (result.length > 0) {
             {
                    responses.emailAlreadyExist(res)  
                    
                } 
           
            } else {
            var data = {mobile,name,password,email};
            userModel.submitQuery(data, function(err,user) {
                if (err) {
            responses.sendError(res)
                    
                }
                else{
                  
                   let id = user[0].id;
                   let html = '<p>Click <a href="http://localhost:3000/user/varified/'+id+'" >here</a> to varify youe details</p>'
                    commFunc.sendmail(email,html);
                    responses.success(res, user[0])
                    
                }
            })
        }
    }
})
  }
}

exports.login = function(req, res) {
     var {name, password }= req.body;
      userModel.checkAvailable({name,password}, function(err, result) {
        if (err) {
            responses.sendError(res)
        }
        else if (result.length == 0) {
            console.log("invalid  user");
            res.status(403).json({"response":{"userList":result},"message":"Invalid Data"});
        }
        else
        {
         res.status(200).json({"response":{"userList":result},"message":"success"});
                
        }
    })
  }
exports.loginAdmin = function(req, res) {
     var {name, password }= req.body;
    userModel.check({name,password}, function(err, result) {
         if (err) {
            responses.sendError(res)
        } else if (result.length == 0) {
            res.status(403).json({"response":{"userList":result},"message":"Invalid Data"});
        }
        else
        {
            res.status(200).json({"response":{"userList":result},"message":"success"});
        }
        })
     }
exports.allData = function(req, res) {
    userModel.checkData(function(err,result) {
        if (err) {
         res.status(401).json({"response":{"userList":result},"message":"Error in execution"});
        } 
        else {
            res.status(200).json({"response":{"userList":result},"message":"All user data"});
        }
    })

}

exports.delbtn = function(req, res) {
    let deleted_data = new Date().getTime();
    var {id} = req.body;
    connection.query(`UPDATE userdetails SET deleted_at = CASE when deleted_at = 'null' then  ${deleted_data} else 'null' END where id = ?`,[id], function(err, result) {
        res.status(200).json({"message":"User is deleted"});
    })
}
exports.blockUnblock = function(req, res) {
    var {id} = req.body;
    connection.query("UPDATE userdetails SET is_blocked = CASE when is_blocked = 1 then 0 else 1 END where id = ?",[id], function(err, result) {
        res.status(200).json({"message":"User has been blocked"});
    })


}
exports.varified=function(req,res){
var{id}= req.params;

userModel.checkId({id}, function(err, result) {
    if(err) {
    } else if(result.length == 0){
        res.status(403).json({"message":"Id not available"});
    } else {
        if(result[0].is_varified === 1) {
            res.status(200).json({"message":"User has been already varified"});
        } else {
            connection.query(`UPDATE userdetails SET is_varified = CASE when is_varified = 0 then 1 else 0 END where id = ?`,[id], function(err, result) {
        res.status(200).json({"message":"User has been varified"});
    })
        }
    }
})


}