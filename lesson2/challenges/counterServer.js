/*
Write a HTTP server application which responds with how many times clients have visited.

Test: $ curl http://localhost:3000
*/
var http = require('http');
var count = 0;
var server = http.createServer(function(request, response){
	count++;
	response.end("Visited : " +count);
})


server.listen(3000);

