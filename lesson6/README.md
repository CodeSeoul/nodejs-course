# Lesson6: HTTP

> Let's get serious about servers

## Review Building Servers

Here's an example of an HTTP server that simply responds to any request with "Hello, LTCS!"
```js
var http = require('http');
http.createServer((req, res) => {
  res.end('Hellow, LTCS!');
}).listen(3000);
```

Here's another way to write this same sever to mkaie the `request` event even more explict:
```js
var http = require('http');
var server = http.createServer();
server.on('request', (req, res) => {
  res.end('Hellow, LTCS!');
});
server.listen(3000);
```
