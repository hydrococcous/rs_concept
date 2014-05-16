// cd f:\xampp\htdocs\rs_concept\app\server
// node server.js

var connect = require('connect');
var server = connect().
	use(connect.static(__dirname+'/../client')).listen(8080);

console.log("Server started and listen to http://localhost:8080");
