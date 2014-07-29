//server related dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8766;
var wit = require('./wit.js');

app.get('/*', function(req, res){
  res.send('Hello world, TwitAI');
});

var server = app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
