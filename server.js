//server related dependencies
var express = require('express');
var app = express();
var port = process.env.PORT || 8766;
var wit = require('./wit.js');
var credentials = require('./credentials.js');
var twitter = require('twitter');

var T = new twitter({
  consumer_key: credentials.twitter_consumer_key,
  consumer_secret: credentials.twitter_consumer_secret,
  access_token: credentials.twitter_access_token,
  access_token_secret: credentials.twitter_access_token_secret
});

T.get('/statuses/mentions_timeline.json', {count: 10}, function(err, data) {
  if (err) {
    console.log(err);
  }
  console.log(data);
});

app.get('/*', function(req, res){
  res.send('Hello world, TwitAI');
});

var server = app.listen(port, function(){
  console.log('Server is listening on port ' + port);
});
