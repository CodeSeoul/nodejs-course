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
	- But it can handle concurrent operations without multiple threads of execution, so it can scale pretty well.


## Built on JavaScript

- Used to run only on browsers
- Cross Platform(O/S)
- Limitation


## How fast Node.js growing?

Node.js packages are growing faster than Ruby, Pathon and even Java! ([http://www.modulecounts.com](http://www.modulecounts.com)

![module-counts](module-counts.png)


## What's making Node.js so attractive?

- Develepers can write web applications in one language
- Reduce the context switch between client and server development
- JavaScript is unavoidable if you've done any programming for the web
- Full-stack development trend and Start-up booms
- JSON is a very popular data interchange format today and is native to JavaScript
- JavaScript is the language used in various No SQL (MongoDB, CouchDB)


## What could you build?

Node.js is ideal for I/O bound applications, but not so great for CPU-heavy applications.

- Data Intensive Real-time Applications (DIRT)
- Single Page Applications
- JSON APIs (RESTful Web Services)
- Data Streaming Applications (Music, Video)
- Websocket Server (like a chat server)


## How to install Node.js

Download one-click installers for Mac or Windows [here](https://nodejs.org/en/download)

If you know how to use HomeBrew...

```
$ brew install node
$ brew install npm
```

Make sure it's installed properly on the terminal

```
$ node -v
v7.0.0
$ npm -v
3.10.8
```


## Node.js Console

Node.js provides CLI(Command Line Interface).
Using this shell program, we can execute pretty much any Node.js/JavaScript code on the terminal.

```js
$ node
> 1 + 2
3
> 17 + 31 / 2 * 5
94.5
> 'Hello, ' + 'Node.js!'
'Hello, Node.js!'
> console.log('Hello, World!')
'Hello, World!'
> a = 1; b = 2; a + b
3
> function sqrt(n) { return n * n; }
undefined
> sqrt(3)
9
> new Date();
2017-01-03T03:43:16.185Z
> window.alert('abc');
ReferenceError: window is not defined
```

Unlike the browser, Node does not have a window `global` object, but instead has two others: `globals` and `process`.


## Launching Node.js Scripts

To start a Node.js script from a file, simply run `node <filename>`.

- Write [hello.js](hello.js).

```js
console.log('Hello, World!');
```

- Just run it!

```js
$ node hello.js
Hello, World!
```


## What's your IDE of choice?

- [Sublime Text](https://www.sublimetext.com/3)
- [Atom](https://atom.io)
- [Bracket](http://brackets.io)


## JavaScript Recap

- variables, functions
- if, for, while, switch
- arrays, objects


### 3 Ways to write a function

```js
function hello(name) {
	console.log('Hello,', name, '!');
};

var hello = function(name) {
	console.log('Hello,', name, '!');
};

// ES6 Arrow Function (lambda)
var hello = (name) => {
	console.log('Hello,', name, '!');
};
```


## Mini program: Calculator

```
TODO: implement it to show how to use parseInt()
```


## Summary
Node.js is
- Built on JavaScript
- Evented and asynchronous
- Desigend for data-intensive real-time applications


## Challeges
- print 0 to 9 using the `for` loop
- write a function named "getFullName" which takes the first name, the last name and the country name as arguments and returns the full name according to the country name.
	- ex1: `getFullName("Dale", "Seo", "KR")` should return `Seo Dale`.
	- ex2: `getFullName("Dale", "Seo", "US")` should return `Dale Seo`.
- write a command line program in a file named "greeting.js" which prints a greeting message on the console using the function above.
	- ex1. `$ node greeting.js Dale Seo KR` should print `Hello, Seo Dale!`
	- ex2. `$ node greeting.js Dale Seo KR` should print `Hello, Dale Seo!`
