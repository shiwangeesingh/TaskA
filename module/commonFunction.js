var constant = require ('./constant');
var responses = require('./responses');
const _ = require("lodash")
 exports.checkKeyExist = (object)=>{
 	let err={};
 	let data = {};
 	_.forEach(object,(value,key)=>{
    if(value){
      data[key]=value;
      if(key == "mobile"){
        if (!validatePhone(value) || value.length!=10) {
                    err[key] = `invalid  ${key}`;
                    console.log( err[key]);
                  }
      }
    }
    else{
      err[key] = `invalid  ${key}`;
      console.log(err[key])
    }
  }) 
     if(err && _.size(err))
      return{status:false,data:err}
     else
      return{status:true,data:data}
 }

const validatePhone = (phone) => {
var pattern = /^\d{10}$/;
    return pattern.test(phone);
}