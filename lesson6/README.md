# Lesson6: HTTP

> Bulit-in http module which provides HTTP server and client functionality

> Let's get serious about servers with Events and Streams in mind!

## Review Building Servers

Here's an example of an HTTP server that simply responds to any request with "Hello, LTCS!".

An anonymous function is provided as an argument to `createServer`, acting as a callback that defines how each HTTP request should be handled.

```js
var http = require('http');
http.createServer((req, res) => {
  res.end('Hellow, LTCS!');
}).listen(3000);
```
Whenever a request happens, the arrow function is fired and "Helo, LTCS!" is written out as the response.

Here's another way to write this same sever to mkaie the `request` event even more explict:

```js
var http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {
  res.end('Hellow, LTCS!');
});
server.listen(3000);
```

## MIME TYPES

When serving files via HTTP, it's usually not enough to just send the contents of a file;
You also should include the type of file being sent.
This is done by setting the `Content-Type` HTTP header with the proper MIME type for the file.

MIME types are dicussed in detail in the [Wikipedica article](https://en.wikipedia.org/wiki/MIME).

### Serving Static Files

Let's build an application which serves static files such as HTML, CSS and JavaScript(Client-side) files.

// TODO

## Serving Images

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
