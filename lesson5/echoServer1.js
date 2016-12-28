var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
	req.on('data', function(chunk) {		
		console.log(chunk.toString());
		res.write(chunk);
	});
	
	req.on('end', function() {
		res.end();
	})
});

server.listen(8080);

console.log('Server running at http://localhost:8080');