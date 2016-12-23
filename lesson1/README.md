# Lesson 1

> Intro to Node.js

## JavaScript History
- Used to run only on browsers
- Cross Platform(O/S)
- Limitation

## What is Node.js?
- Back-end version JavaScript
- Allows you to build scalable network applications using JavaScript.
- It's very fast because it's mostly C code.

## What could you build?
- Websocket server (like a chat server)
- Fast File Upload Client
- Ad Server
- Any Real-Time Data Apps

## How to install Node.js
- Download [here](https://nodejs.org/en/download)
- Make sure it's installed
```
$ node -v
v7.0.0
```

## Command Line Interface (a.k.a. CLI)
- Run code on a terminal
```js
$ node
> 1 + 2
3
> 'Hello, ' + 'Node.js!'
'Hello, Node.js!'
```
- Run code in a file
	- [hello.js](hello.js)
```js
var name = 'Node.js';
var message = 'Hello, ' + name + '!';
console.log(message);
```

	- Run
```js
$ node hello.js
Hello, Node.js!
```

## What's your IDE of choice?
- [Sublime Text](https://www.sublimetext.com/3)
- [Atom](https://atom.io)
- [Bracket](http://brackets.io)

## Our First Web Server
- [webserver.js](webserver.js)
```js
const http = require('http');
const port = 8000;

http.createServer((req, res) => {
  res.end('Hello World\n');
}).listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});
```
- Run
```
$ node webserver.js
Server running at http://localhost:8000
```
- Test
```
$ curl http://127.0.0.1:8000
Hello World
```