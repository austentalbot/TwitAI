//server related dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8766;
var wit = require('./wit.js');
var credentials = require('./credentials.js');
var twitter = require('twit');

var lastId='478543830392639488';

var T = new twitter({
  consumer_key: credentials.twitter_consumer_key,
  consumer_secret: credentials.twitter_consumer_secret,
  access_token: credentials.twitter_access_token,
  access_token_secret: credentials.twitter_access_token_secret
});

T.get('statuses/mentions_timeline', {since_id: lastId}, function(err, data, response) {
  console.log(data);
  for (var i=0; i<data.length; i++) {
    //do stuff to text with witAI
    console.log(data[i].text, data[i].id_str);
  }

});

app.get('/*', function(req, res){
  res.send('Hello world, TwitAI');
});

var server = app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
