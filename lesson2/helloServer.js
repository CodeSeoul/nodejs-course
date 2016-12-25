var http = require('http');

http.createServer(function(req, res) {
   res.end('Hello, World!'); // Send the response body as "Hello, World!"
}).listen(8080);

console.log('Server running at http://localhost:8080');