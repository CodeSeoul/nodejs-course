# Lesson 3: Events

## JavaScript Recall: Events in the browser
The browser triggers events and we can listen for them.
```html
<button id="myBtn">Click me!</button>
<script>
	document.getElementById("myBtn").addEventListener("click", function() {
	  window.alert('clicked!');
	  console.log('clicked!');
	});
</script>
```

## Callbacks

### What is Callback?
Callback is an asynchronous equivalent for a function. 
- A callback function is called at the completion of a given task.
- Can be passed to another function as a parameter to be called later.
- Node.js makes heavy use of callbacks.

```js
function hello(name) {
	console.log('Hello,', name, '!');
};

function helloAfterHey(name, callback) {
	console.log('Hey~');
	callback(name);
};

helloAfterHey('Dale', hello);
```
```bash
$ node callbacks.js
Hey~
Hello, Dale !
```

### 3 Ways to define a callback function
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

## Events in Node.js

### Built-in modules
- a `net.Server` object emits an event each time a peer connects to it
- a `fs.ReadStream` emits an event when the file is opened
- a `stream` emits an event whenever data is available to be read

### How to use
- All objects that emit events are instances of the `EventEmitter` class.
- These objects expose an `eventEmitter.on()` function that allows one or more functions to be attached to named events emitted by the object. 
- Typically, event names are camel-cased strings but any valid JavaScript property key can be used.
- When the `EventEmitter` object emits an event, all of the functions attached to that specific event are called *synchronously*. 
- Any values returned by the called listeners are ignored and will be discarded.

### The `EventEmitter` class in `events` module
- `emitter.on(eventName, listener)`: Attaches the `listener` function for the event named `eventName`.
- `emitter.emit(eventName[, ...args])`: Triggers each of the listeners registered for the event named `eventName`, passing the supplied arguments to each. Returns true if the event had listeners, false otherwise.
- `emitter.eventNames()`: Returns an array listing the events for which the emitter has registered listeners.
- `emitter.listeners(eventName)`: Returns a copy of the array of listeners for the event named eventName.
- `emitter.listenerCount(eventName)`: Returns a copy of the array of listeners for the event named eventName.
- `emitter.once(eventName, listener)`: Adds a *one time* `listener` function for the event named `eventName`.

## Custom Event Emitter
[eventEmitter.js](eventEmitter.js)
```js
var EventEmitter = require('events');

var myEmitter = new EventEmitter();
console.log('Event Names:', myEmitter.eventNames());

var hey = function() {
	console.log('Hey');
};

var hello = function(name) {
	console.log('Hello, ' + name + '!');
};

myEmitter.on('greeting', hey);
myEmitter.once('greeting', hello);
myEmitter.on('farewell', (name) => {
	console.log('Bye, ' + name + '~');
});

console.log('Event Names:', myEmitter.eventNames());
console.log('Listeners for greeting:', myEmitter.listeners('greeting'));
console.log('Listeners for farewell:', myEmitter.listeners('farewell'));

myEmitter.emit('greeting', 'Dale');
myEmitter.emit('greeting', 'Dale');
myEmitter.emit('farewell', 'Dale');
```

## Breaking Down Our First Server
what is really going on here?
```js
http.createServer(function(req, res){ ... });
```

### http.createServer([requestListener])
- https://nodejs.org/api/http.html#http_http_createserver_requestlistener
Returns a new instance of `http.Server`.
The requestListener is a function which is automatically added to the 'request' event.

### Class: http.Server
- https://nodejs.org/api/http.html#http_event_request
This class inherits from net.Server.

### Class: net.Server
- https://nodejs.org/api/net.html#net_class_net_server
net.Server is an EventEmitter.

### Event: 'request'
- https://nodejs.org/api/http.html#http_event_request
Emitted each time there is a request.

## Alternate Syntax
This is how we add event listeners to `http.Server` generally.
```js
var server = http.createServer();
server.on('request', function(req, res) { ... });
server.on('close', function(req, res) { ... });
```

## Challenges
- [Chat Emitter](challenges/chatEmitter.js)
- [Refactor HTTP server](challenges/refactorHttpServer.js)

