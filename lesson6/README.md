# Lesson 6: HTTP

> Bulit-in http module which provides HTTP server and client functionality

> Let's get serious about servers with Events and Streams in mind!

## Review Building Servers

Here's an example of an HTTP server that simply responds to any request with "Hello, LTCS!".

An anonymous function is provided as an argument to `createServer`, acting as a callback that defines how each HTTP request should be handled.

```js
var http = require('http');
http.createServer((req, res) => {
  res.end('Hello, LTCS!');
}).listen(3000);
```
Whenever a request happens, the arrow function is fired and "Helo, LTCS!" is written out as the response.

Here's another way to write this same sever to mkaie the `request` event even more explict:

```js
var http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {
  res.end('Hello, LTCS!');
});
server.listen(3000);
```

## What's going on behind the secnes?

A HTTP message consists of headers and body.

```bash
$ curl http://localhost:3000 -v
* Rebuilt URL to: http://localhost:3000/
*   Trying ::1...
* Connected to localhost (::1) port 3000 (#0)
> GET / HTTP/1.1
> Host: localhost:3000
> User-Agent: curl/7.43.0
> Accept: */*
>
< HTTP/1.1 200 OK
< Date: Mon, 09 Jan 2017 13:00:45 GMT
< Connection: keep-alive
< Content-Length: 12
<
Hello, LTCS!
* Connection #0 to host localhost left intact
```

Don't worry. You don't have to parse these messages manually.
Node.js provides an abtraction to represent requests and responses.

## Request

### Checking HTTP method

You can check which HTTP method is being used by reading the `req.method` proeprty.

```js
console.log(req.method)
```

### Checking URL

The requested URL can be accessed with `req.url` property, which may contain several components depending on the request.
To parse these sections, Node.js provides the `url` module, and specifically the `.parse()` function.
```
var url = require('url');
var parsedUrl = url.parse(req.url);
console.log(parsedUrl);
```

### Reading Request Body Data

When Node.js HTTP parser reads in and parses request data, it makes that data available in the form of `data` events that contains chunks of parsed data ready to be handled by the callback funtion.

```js
req.on('data', (data) => {
  console.log(data);
});
```

Test

```bash
curl -d 'abc' http://localhost:3000
```

Console

```bash
<Buffer 61 62 63>
```

### Setting Stream Encoding

By default, the `data` events provide `Buffer` objects, which are a sort of byte arrays. In case that you need to handle textual data not binary data, set the stream encoding to `utf8` then the `data` events will instead emit strings.

```js
req.setEncoding('utf8'); // Data is now a utf8 string instead of a Buffer
req.on('data', (data) => {
  console.log(data);
});
```

Test

```bash
curl -d 'abc' http://localhost:3000
```

Console

```bash
abc
```

## Response

### Writing Response Body Data

First, call the `res.write()` method, which writes response data, and then use the `res.end()` method to end the response.

```js
res.write('Hello, LTCS!\n');
res.write('Bye, LTCS!');
res.end();
```

As shorthand, `res.write()` and `res.end()` can be conbined into one statement, which can be nice for small responses.

```js
res.end('Hello, LTCS!\nBye, LTCS!');
```

### Setting Response Headers

You should add headers in any order, but only up to the first `res.write()` or `res.end()`. After the first part of the response body is written, HTTP headers that thave been set will be flushed.

#### Content-Type

- text/plain

```js
res.setHeader('Content-Type', 'text/plain');
res.end('Hello, LTCS!');
```

- text/html

```js
res.setHeader('Content-Type', 'text/html');
res.end('<html><body><h1>Hello, LTCS!</h1></body></html>');
```

##### MIME TYPES

When serving files via HTTP, it's usually not enough to just send the contents of a file;
You also should include the type of file being sent.
This is done by setting the `Content-Type` HTTP header with the proper MIME type for the file.

MIME types are dicussed in detail in the [Wikipedica article](https://en.wikipedia.org/wiki/MIME).


#### Content-Length

To provide a performance boost, the `Content-Length` header should be sent with your response when possible.

```js
var body = 'I love Learn Teach Code Seoul';
res.setHeader('Content-Length', Buffer.byteLength(body));
res.end(body);
```

You may be tempted to use the `body.length` value for the `Content-Length`, but the `Content-Length` value should represent the byte length, not character length, and the two will be different if the string contains multibyte characters. To avoid this problem, Node.js provides the `Buffer.byteLength()` method.

```bash
$ node
> 'abc'.length
3
> '가나다'.length
3
> Buffer.byteLength('가나다')
9
```

### Setting the Status Code of an HTTP Response

Set `res.statusCode` property. This property also should be assigned before the first call to `res.write()` or `res.end()`.
The default HTTP status code is 200.

```js
res.statusCode = 404; // Not Found
```

#### HTTP status codes

- 2xx Success : 200 OK, 201 Created
- 3xx Redirection : 301 Moved Permanently, 303 See Other
- 4xx Client Error : 400 Bad Request, 401 Unauthorized, 404 Not Found
- 5xx Server Error : 500 Internal Server Error, 503 Service Unavailable

HTTP status codes are listed in the [Wikipedia article](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes).

## Serving Static Files

Let's build an application which serves static files such as HTML, CSS and JavaScript(Client-side) files.
The `fs` (filesystem) module we've convered in Lesson 3 is necessary for serving static files.

### Serving a specific Image

Streams an image to a client.

```js
var http = require('http');
var fs = require('fs');
http.createServer((req, res) => {
  res.writeHead(200, {'Content-type': 'image/png'});
  fs.createReadStream('ltcs.png').pipe(res);
}).listen(3000);
```

In this one-liner, the data is read in from the file and it sent out to the client as it comes in.

### Serving all files from a directory

```js
var http = require('http');
var fs = require('fs');
var parse = require('url').parse;
var join = require('path').join;

var root = __dirname;

http.createServer((req, res) => {
	var url = parse(req.url);
	var path = join(root, url.pathname);
	var stream = fs.createReadStream(path);
  stream.on('data', (data) => {
    res.setHeader('Content-Length', stat.size);
    res.write(data);
  });
  stream.on('end', () => {
    res.end();
  });
}).listen(3000);
```

Test

```bash
$ curl http://localhost:3000/test.js
var http = require('http');
...
```

#### What if you request a file that desn't exist?

- On the client side

No reply from the server

```bash
$ curl http://localhost:3000/test1.js
curl: (52) Empty reply from server
```

- On the server side

Our server just stopped!!! :scream:

```
events.js:160
      throw er; // Unhandled 'error' event
      ^

Error: ENOENT: no such file or directory, open '/Users/1002139/test/test1.js'
```

We should make our file server more robust!

### Handling server errors

Errors will be thrown in the current server if you access a file that doen't exist, access a forbidden file, or run into any file I/O-related problem.

A stream, like `fs.ReadStream`, is simply a specialized `EventEmitter` that contains predefined events such as `data` and `end`, which we've already looked at. In addition, `error` events will be thrown when something gets wrong. This means that if you don't listen for these errors, they'll crash your server.

To prevent errors from killing our server, we need to listen for errors by registering an `error` event handler on the `fs.ReadSteram`, which responds with the 500 response status indication an internal server error.

```js
stream.on('error', (err) => {
  res.statusCode = 500;
  res.end('Sorry, Something went wrong!');
});
```

Registering an `errer` event helps us catch any forseen or unforseen errors and enables us to respond more gracefully to the client.

Test

```bash
$ curl -i http://localhost:3000/test1.js
HTTP/1.1 500 Internal Server Error
Date: Wed, 11 Jan 2017 13:00:24 GMT
Connection: keep-alive
Content-Length: 28

Sorry, Something went wrong!
```

### Preemptive error handling

`fs.stat()` retrives information about a file. If the named file doesn't exist, `fs.stat()` will respond with a value of `ENOENT` in the `error.code` field, and you can return the error code 404, indicating that the file is not found. If you receive other errors from `fs.stat()`, you can return a generic 500 error code.

```js
fs.stat(path, (err, stat) => {
  if (err) {
    if (err.code == 'ENOENT') {
      res.statusCode = 404;
      res.end('Not Found');
    } else {
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  } else {
    var stream = fs.createReadStream(path);
    stream.on('data', (data) => {
      res.setHeader('Content-Length', stat.size);
      res.write(data);
    });
    stream.on('end', () => {
      res.end();
    });
    stream.on('error', (err) => {
      res.statusCode = 500;
      res.end('Sorry, Something went wrong!');
    });		
  }
});
```

## Challenges

- Build a RESTful web service for a to-do app

```bash
$ curl -d 'buy groceries' http://localhost:3000
Created
$ curl -d 'buy node in action' http://localhost:3000
Created
$ curl http://localhost:3000
0) buy groceries
1) buy node in action
$ curl -X DELETE http://localhost:3000/0
Deleted
curl http://localhost:3000
0) buy node in action
```
