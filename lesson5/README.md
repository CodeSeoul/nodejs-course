# Lesson5: Streams

## What are Streams?
Streams can be readable, writable, or both

## Streams in Node.js
- req: a readable stream
- res: a writable stream
```js
http.createServer(function(req, res) { ... });
```

## How to Read from the Request
Let's print what we receive from the request.
The `request` emits the `readable` and `end` events.
We should attach an event handler for each event.
```js
var server = http.createServer();
server.on('request', function(req, res) {
	req.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = req.read())) {
			console.log(chunk.toString());
		}
	});
	
	req.on('end', function() {
		res.end();
	})
});
```

## Let's Create an Echo Server!

Write to the `response` just like printing to the console.
- [echoServer1.js](echoServer1.js)
```js
server.on('request', function(req, res) {
	req.on('readable', function() {
		var chunk = null;
		while (null !== (chunk = req.read())) {
			res.write(chunk);
		}
	});
	
	req.on('end', function() {
		res.end();
	})
});
```

Instead, use the convinient Streams API, `readable.pipe(writable)`
- [echoServer2.js](echoServer2.js)
```js
server.on('request', function(req, res) {
	req.pipe(res);
});
```

Run
```bash
$ node echoServer2.js
Server running at http://localhost:8080
```

Test
```bash
$ curl -d 'hello' http://localhost:8080
hello
```

## Challenges


