var express = require('express');
var app = express();
/*
app.get('/', function(req, res) {
  res.send('Hello World!');
});
*/

app.get('/', function(req, res) {
  res.location('/app/20210311-SportsInsightResearch-Trends_For_Store_Prediction.html');
});


var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;
  
  console.log("Example app listening at 'http://%s:%s'", host, port);
})
