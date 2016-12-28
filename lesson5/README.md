# Lesson 5: Streams

> Almost all Node.js applications, no matter how simple, use streams in some manner.

## What are Streams?

Streams can be readable, writable, or *both* using buffers (a sort of queue) in memory.

### Anology

- Streaming music VS. Downloading MP3 files
- YouTube VS. Downloading video clips.

### Streams VS. Arrays

You can think of streams ab being like arrays, but...
- Arrays: having data distributed *over space*
- Streams: having data distributed *over time*

## Types of Streams
There are four fundamental stream types within Node.js
- Readable: streams from which data can be read
- Writable: streams to which data can be written
- Duplex: streams that are both Readable and Writable
- Transform: Duplex streams that can modify or transform the data as it is written and read

## Readable Streams
Readable streams are an abstraction for a source from which data is consumed.
Readable streams use the `EventEmitter` API for notifying application code when data is available to be read off the stream.

### Events
- 'data'
	- emitted when there is data available to be read from the stream.
	- indicates that the stream has new information
- 'end'
	- emitted when there is no more data to be consumed from the stream.
	- The 'end' event will not be emitted unless the data is completely consumed.

## Writable Streams
Writable streams are an abstraction for a destination to which data is written.
Writable streams expose methods such as write() and end() that are used to write data onto the stream.

### Methods
- writable.write(chunk)
	- writes some data to the writable stream
- writable.end([chunk])
	- signals that no more data will be written to the writable stream
	- The optional chunk allow one final additional chunk of data to be written immediately before closing the stream.

## Piping Streams
> It'is the most recommended way when we use Steram APIs.

The `readable.pipe()` method attaches a Writable stream to the readable, causing it push all of its data to the attached Writable.

## Streams in File System
This is another way to read/write a file.

`fs.createReadStream(path)` returns a new readable stream object from a file.
```js
var file = fs.createReadStream("fruits.txt");
file.on('data', (chunk) => {
	console.log(chunk.toString());
});
file.on('end', () => {
	console.log('There will be no data.')
})
```

A `data` event is fired whenever a new chunk of data is ready, and `end` event is fired when all the chunks have been loaded.
A chunck can vary in size, depending on type of data.

`fs.createWriteStream(path)` returns a new writable stream object from a file.
```js
var fs = require('fs');

var file = fs.createWriteStream('ltcs.txt');
file.write('Learn Teach Code Seoul');
file.end(() => {
	console.log('Written successfully!');
});
```

## Streams in HTTP
We've used streams creating the server
```js
http.createServer(function(req, res) { ... });
```
- `req` is an http.IncomingMessage, which is a Readable Stream
- `res` is an http.ServerResponse, which is a Writable Stream

## How to Read from the Request and Write into the Response
Let's print what we receive from the request.
The `request` emits the `readable` and `end` events.
We should attach an event handler for each event.
```js
var server = http.createServer();
server.on('request', function(req, res) {
	req.on('data', function(chunk) {		
		console.log(chunk.toString());
		res.write('Data is received!')
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
- [Pipe Files](challenges/pipeFiles.js)
- [Download Server](challenges/downloadServer.js)
