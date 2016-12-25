# Lesson 1 : Intro

## JavaScript History
- Used to run only on browsers
- Cross Platform(O/S)
- Limitation

## What is Node.js?
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- Server-side(back-end) version JavaScript
- Allows you to build scalable network applications using JavaScript
- Very fast because it's mostly C code
- Built on Google Chrome's JavaScript Engine (V8 Engine)
- Node.js = Runtime Environment + JavaScript Library
- Website
	- English : https://nodejs.org/en/
	- Korean : https://nodejs.org/ko/

## Why is Node.js so popular?
- Full-stack development with a single language
- Start-ups can't afford many developers

## What could you build?
I/O intensive web applications
- Data Intensive Real-time Applications (DIRT)
- Data Streaming Applications (Music, Video)
- JSON APIs based Applications
- Websocket Server (like a chat server)
- Single Page Applications

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
Write [hello.js](hello.js).
```js
console.log('Hello, World!');
```
Just run it!
```js
$ node hello.js
Hello, World!
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