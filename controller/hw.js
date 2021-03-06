var MongoClient = require('mongodb').MongoClient;
var path = require("path");
var mongo = require( '../db/mongo' );
 var fs = require("fs");

exports.home = function(req, res) {
        fs.readFile(__dirname + '/../public/index.html', 'utf8', function(err, text){
            res.send(text);
        })
    };

exports.helloWorld = function (req, res) {
    res.sendFile('public/index.html');
};
//returns the pending homework in JSON format
exports.gethws = function (req, res) {
var db = mongo.getDb();
var arr = [];
var cursor =db.collection('hwdata').find({"status":"pending"});
    cursor.each(function(err, doc) {  
        if(err) console.log("cannot parse the cursor");
        if (doc != null) {
            arr.push(doc);
        } else {
            res.json(arr);
        }
   });
};
//returns the done homework in JSON format
exports.getdonehws = function (req, res) {
var db = mongo.getDb();
var arr = [];
var cursor =db.collection('hwdata').find({"status":"done"});
    cursor.each(function(err, doc) {  
        if(err) console.log("cannot parse the cursor");
        if (doc != null) {
            arr.push(doc);
        } else {
            res.json(arr);
        }
   });
};
//returns if homework exist or not
exports.gethw = function (req, res) {
var db = mongo.getDb();
var cursor =db.collection('hwdata').find({"subject":String(req.params.subject)});
    cursor.each(function(err, doc) {  
        if(err) console.log("cannot parse the cursor");
        if (doc != null) {
            res.json(doc);
	    return false;
        } else {
	    res.json({"error":"no  match found"});
        }
   });
};
//post the form data
exports.addhw = function (req, res) {
      var db = mongo.getDb();
      db.collection('hwdata').insertOne( {
          "subject" : req.body.subject,
          "deadline": req.body.deadline,
	  "teacher": req.body.teacher,
	  "status":"pending",
	  "details": req.body.details
   }, function(err, result) {
     		if(err) console.log("there was an error inserting the homework");
     		else  {res.json({"success":"user added successfully"});}
  });

};
//delete the homework
exports.deletehw = function (req, res) {
var db = mongo.getDb();
      db.collection('hwdata').deleteOne(
        {"subject":String(req.params.subject)}
      , function(err, results) {
      		if(err) console.log("there was an error deleting the homework");
      		else res.json({"success":"homework deleted successfully"});
   });
};

exports.donehw = function (req, res) {
var db = mongo.getDb();
     db.collection('hwdata').update(
      { "subject" : String(req.params.subject)},
        {$set:{"status":"done"}}, function(err, results) {
      if(err) console.log("there was an error updating the user");
      else res.json({"success":"homework done successfully"});
   });
};



