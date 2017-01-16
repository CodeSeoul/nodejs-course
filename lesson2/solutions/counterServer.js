/*
Write a HTTP server application which responds with how many times clients have visited.

Test: $ curl http://localhost:3000
*/

var http = require('http');

var counter = 0;

var server = http.createServer((req, res) => {
	counter++;
	res.end(String(counter));
});

server.listen(3000);

console.log('Server running at http://localhost:3000');