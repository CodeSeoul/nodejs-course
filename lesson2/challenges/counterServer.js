/*
Write a HTTP server application which responds with how many times clients have visited.

Test: $ curl http://localhost:3000
*/

var http = require('http');
var times = 0;
var server = http.createServer(function (req, res){
  res.end('This site has been visited ' + ++times + " times");
  res.end()
});

server.listen(3000);
