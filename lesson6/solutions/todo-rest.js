var http = require('http');
var url = require('url');

var items = ['do the dishes', 'do the laundry'];

var server = http.createServer((req, res) => {
	console.log('method:', req.method);
	console.log('url:', req.url);
	switch (req.method) {
		case 'POST':
			var item = ''
			req.setEncoding('utf8');
			req.on('data', (data) => {
				console.log('data:', data);
				item += data;
			});
			req.on('end', () => {
				items.push(item);
				console.log('items:', items);
				res.end('Created\n');
			});
			break;
		case 'GET':
			var body = items.map((val, idx) => {
				return idx + ') ' + val;
			}).join('\n');
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(body);
			break;
		case 'DELETE':
			var path = url.parse(req.url).pathname;
			var id = parseInt(path.slice(1), 10);

			if (isNaN(id)) {
				res.statusCode = 400;
				res.end('Invalid item id');
			} else if (!items[id]) {
				res.statusCode = 404;
				res.end('Item not found');
			} else {
				items.splice(id, 1);
				res.end('Deleted\n');
			}
			break;
	}
});

server.listen(3000, () => {
	console.log('The RESTfuul web server is listening at 3000');
});
