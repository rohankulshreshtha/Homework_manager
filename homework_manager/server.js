var express = require('express'),
app = express(),
bodyParser = require('body-parser');
urlencodedParser = bodyParser.urlencoded({ extended: false });
var route = require('./config/routes')(app);
var mongo = require( './db/mongo' );

mongo.connectToServer( function( err ) {
  	//connecting to server
} );

//defining the server instance and connecting it to port

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
	console.log("Node application listening at http://%s:%s", host, port)
})
