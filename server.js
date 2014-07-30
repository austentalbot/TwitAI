//server related dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8766;
var wit = require('./wit.js');
var Twit = require('twit');
var credentials = require('./credentials.js');


var T = new Twit({
  consumer_key: credentials.twitter_consumer_key,
  consumer_secret: credentials.twitter_consumer_secret,
  access_token: credentials.twitter_access_token,
  access_token_secret: credentials.twitter_access_token_secret
});

app.get('/*', function(req, res){
  res.send('Hello world, TwitAI');
});

var server = app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
