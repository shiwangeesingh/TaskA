var express = require('express');
var app = express();
var path = require("path");
var bodyParser = require ('body-parser');
const port = process.env.PORT || 3000;
var glob = require ('glob');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "view")));

let initRoutes = () => {
	glob("./routes/*.js", {cwd: path.resolve("./")}, (err, routes) => {
		if (err) {
			return;
		}
		routes.forEach((routePath) => {
		      require(routePath).default(app);
		});
	});
}
initRoutes(app);
app.listen(port, () => {
	console.log("Server is running on port "+port);
});