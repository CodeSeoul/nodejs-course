# Lesson6: HTTP

> Let's get serious about servers with Events and Streams in mind!

## Review Building Servers

Here's an example of an HTTP server that simply responds to any request with "Hello, LTCS!":

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

## Mime-types

### Image Server

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
