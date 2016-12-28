# Lesson 1: Intro

> Who knew JavaScript would end up being a compelling language for wrting serer-side applications?

## JavaScript History
- "Toy" language in 90's
- Ajax revolution in 2005
	- GMail
	- Google Map 
- Google Chrome release in 2008
	- JavaScript performance has improved at an incredibly fast rate
	- Heavy competition between browser vendors
- Node.js debuted in 2009
	- Changed the types of applications you can build on the web

## What is Node.js?
Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine. 
Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient. 
Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- JavaScript environment for server-side(back-end) development
- Brings JavaScript to the server in much the same way a browser brings JavaScript the client.
- Allows you to build scalable network applications using JavaScript
- Very fast because it's mostly C code
- Uses V8 Engine, the virtual machine that powers Google Chrome
- Uses an **event-driven**, **non-blocking** I/O model
- Node.js = Runtime Environment + JavaScript Library
- Website
	- English : https://nodejs.org/en/
	- Korean : https://nodejs.org/ko/

## What is Node.js NOT?
- A Web Framework
	- Node.js is a platform for JavaScript applications, and it's not to be confused with a framework.
	- It's a common misconception to think of Node.js as Rails or Django for JavaScript, whereas it's much lower level.
	- We'll talk about a popular frameowork for Node.js called Express.js later.
- Multi-threaded
	- You can think of it as a single threaded server.

## Built on JavaScript
- Used to run only on browsers
- Cross Platform(O/S)
- Limitation

## Why is Node.js so popular today?
- Develepers can write web applications in one language
- Reduce the context switch between client and server development
- JavaScript is unavoidable if you've done any programming for the web
- Full-stack development trend and Start-up booms
- JSON is a very popular data interchange format today and is native to JavaScript
- JavaScript is the language used in various No SQL (MongoDB, CouchDB)

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
> console.log('Hello, World!')
'Hello, World!'
> window.alert('abc');
ReferenceError: window is not defined
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

## Challeges
- print 0 to 9 using the `for` loop
