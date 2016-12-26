var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
	req.pipe(res);
});

server.listen(8080);

console.log('Server running at http://localhost:8080');