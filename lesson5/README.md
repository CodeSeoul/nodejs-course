# Lesson5: Streams

> Almost all Node.js applications, no matter how simple, use streams in some manner.

## What are Streams?
Streams can be readable, writable, or both

## Types of Streams
There are four fundamental stream types within Node.js
- Readable: streams from which data can be read
- Writable: streams to which data can be written
- Duplex: streams that are both Readable and Writable
- Transform: Duplex streams that can modify or transform the data as it is written and read

### Readable Stream Events
Readable streams use the EventEmitter API for notifying application code when data is available to be read off the stream.
- The 'data' event
	- emitted when there is data available to be read from the stream.
	- indicates that the stream has new information
- The 'end'	event
	- emitted when there is no more data to be consumed from the stream.
	- The 'end' event will not be emitted unless the data is completely consumed.

### Writable Stream Methods
- Writable streams expose methods such as write() and end() that are used to write data onto the stream.


## Streams in the server
We've used streams creating the server
```js
http.createServer(function(req, res) { ... });
```
- `req` is an http.IncomingMessage, which is a Readable Stream
- `res` is an http.ServerResponse, which is a Writable Stream

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
The `readable.pipe()` method attaches a Writable stream to the readable, causing it to push all of its data to the attached Writable.

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


