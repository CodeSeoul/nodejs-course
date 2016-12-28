// Let's create an HTTP server that will serve index.html.
// Use pipe() to send index.html to the response.
var fs = require('fs');
var http = require('http');

var server = http.createServer();

server.on('request', (req, res) => {
  var file = fs.createReadStream('index.html');
  file.pipe(res);
});

server.listen(8080);

console.log('Server running at http://localhost:8080');