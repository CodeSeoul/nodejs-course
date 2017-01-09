var http = require('http');

var server = http.createServer(function(req, res) {
  res.end('Hello, World!'); // Send the response body as "Hello, World!"
});

server.listen(3000);

console.log('Server running at http://localhost:3000');
