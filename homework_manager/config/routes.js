var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

//defining the routes

module.exports = function(app) {
	var hw = require('../controller/hw');
	app.use(bodyParser.json());
	app.get('/gethws', hw.gethws);
	app.get('/getdonehws', hw.getdonehws);
	app.get('/gethw/:subject', hw.gethw);
	app.post('/addhw',hw.addhw);
	app.get('/deletehw/:subject',hw.deletehw);
	app.get('/donehw/:subject',hw.donehw);
	app.get('/',hw.helloWorld);
}

