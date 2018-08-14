var constant = require ('./constant');
var responses = require('./responses');
var nodemailer = require("nodemailer")
var smtpTransport = require("nodemailer-smtp-transport");
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
                  }
                }
        else if(key == "email")
        {
        if (!validateEmail(value)) {
          err[key] = `invalid  ${key}`;
        }
      }
      else if(key == "password")
      {
        if ( value.length <6 && value.length>10) {
          err[key] = `invalid  ${key}`;
        }
      }
    }
    else{
      err[key] = `invalid  ${key}`;
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
const validateEmail = (email) => {
var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
return pattern.test(email);
}

exports.sendmail = function(email_id,html)
{
var config = {
            "SMTP_HOST": "smtp.sendgrid.net",
            "SMTP_PORT": 25,
            "SMTP_USER":"apikey",
            "SMTP_PASS": "key",
            "SMTP_PASS" : `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`
          }
          var mailer = nodemailer.createTransport(smtpTransport({
                        host: config.SMTP_HOST,
                        port: config.SMTP_PORT,
                        auth: {
                            user: config.SMTP_USER,
                            pass: config.SMTP_PASS
                        }
                    }));

        mailer.sendMail({
                        from: "shiwangeesingh20@gmail.com",
                        to: email_id,
                        subject : "success",
                        template: "text",
                        html : html
                      }, 
                      (error, response) => {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(response);
                        }
                        mailer.close();
                      });
      }