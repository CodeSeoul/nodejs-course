var http = require('http');
var fs = require('fs');
var path = require('path');
var mime = require('mime');

var cache = {};

function send404(res) {
	res.writeHead(404, {'Content-Type': 'text/plain'});
	res.write('Error 404: resource nto found.');
	res.end();
}

function sendFile(res, filePath, fileContents) {
	res.writeHead(
		200, {'Content-Type': mime.lookup(path.basename(filePath))}
	);
	res.end(fileContents);
}

function serveStatic(res, cache, absPath) {
	if (cache[absPath]) {
		sendFile(res, absPath, cache[absPath]);
	} else {
		fs.exists(absPath, (exists) => {
			if (exists) {
				fs.readFile(absPath, (err, data) => {
					if (err) {
						send404(res);
					} else {
						cache[absPath] = data;
						sendFile(res, absPath, data);
					}
				});
			} else {
				send404(res);
			}
		});
	}
}

var server = http.createServer((req, res) => {
	var filePath = false;

	if (req.url == '/') {
		filePath = 'public/index.html';
	} else {
		filePath = 'publci' + req.url;
	}

	var absPath = './' + filePath;
	serverStatic(res, cache, absPath);
});

server.listen(3000, () => {
	console.log('Server listening on port 3000.')
});