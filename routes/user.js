var user = require('../controller/user');
var path=require("path");
exports.default = function(app) {
app.route('/user/submit').post(user.submit);
 app.route('/user/login').post(user.login);
 app.route('/user/loginAdmin').post(user.loginAdmin);
 app.route('/user/allData').get(user.allData );
 app.route('/user/delbtn').post(user.delbtn );
 app.route('/user/blockUnblock').post(user.blockUnblock);
app.route('/user/varified/:id').get(user.varified);
return(app)
}