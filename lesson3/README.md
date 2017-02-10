# Lesson 3: File I/O

> Built-in fs module which provides filesystem-related functionality

## What is a Callback?

Callback is an asynchronous equivalent for a function.
- A callback function is called at the completion of a given task.
- Can be passed to another function as a parameter to be called later.
- Node.js makes heavy use of callbacks.

### JavaScript Recall: setTimeout(function, milliseconds, param1, param2, ...)

```js
setTimeout(function() {
	console.log('I execute first.');
	setTimeout(function() {
		console.log('I execute next.');
		setTimeout(function() {
			console.log('I execute last.');
		}, 100);
	}, 500);
}, 1000);
```

```bash
I execute first.
I execute next.
I execute last.
```

### What about Node.js

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

## How to import the required module
The Node.js File System (fs) module can be imported using the following syntax.
```js
var fs = require('fs');
```

## Writing a File

### Syntax
```js
fs.writeFile(file, data, callback)
```

### Example
```js
fs.writeFile('ltcs.txt', 'Learn Teach Code Seoul', function(err) {
   console.log("Data written successfully!");
});
```

## Reading a file

### Syntax
```js
fs.readFile(file, callback)
```

### Example
Need error handling
```js
fs.readFile('ltcs.txt', function(err, data) {
	if (err) {
   console.log(err);
	}
  console.log(data.toString());
});
```

## Getting information of a file

### Syntax

```js
fs.stat(path, callback)
```

### Example

```js
fs.stat('ltcs.txt', function(err, stats) {
	if (err) {
		console.log(err);
	}
	console.log(stats);
})
```

## Synchronous vs Asynchronous
- Every method in the fs module has synchronous as well as asynchronous forms.
- Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error.
- It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.
- Asynchronous programming will likely take some time to grasp and master.
- It requires a paradigm shift in terms of thinking about how application logic should execute.

[syncVsAsync.js](syncVsAsync.js)
```js
var data;
try {
  data = fs.readFileSync(filename);
  console.log("Synchronous data:" + data.toString());
} catch (e) {
  console.log("Synchronous error:", e);
}

fs.readFile(filename, function(err, data) {
  if (err) {
    console.log("Asynchronous error:", err);
  } else {
    console.log("Asynchronous data:", data.toString());
  }
});
```

Run
```bash
$ node syncVsAsync.js
Synchronous data:Learn Teach Code Seoul
Program Ended
Asynchronous data: Learn Teach Code Seoul
```

## Blocking vs Non-blocking

### Blocking Code
Execution continues and the callback method will be invoked later when the data is ready
```
Read file from Filesystem, set equal to "contents"
Print contents
Do something else
```

### Non-blocking Code
Execution stops until reading complets
```
Read file from Filesystem
  whenever you’re complete, print the contents
Do Something else
```

## Challenges with asynchronous development

How using global variables can lead to bugs

```js
color = 'blue';
setTimeout(() => {
	console.log('The color is ' + color)
}, 1000)
color = 'red';
```

```bash
The color is red
```

Instead, pass the variable as a parameter for the function to handle it as a a local variable

```js
color = 'blue';
setTimeout((color) => {
	console.log('The color is ' + color)
}, 1000, color)
color = 'red';
```

```bash
The color is blue
```

## Tip: The Node.js convention for asynchronous callbacks

Most Node.js built-in modules use callbacks with two arguments.

The first argument is for an error, should one occur, and the second argument is for the results.

## Tip: Taming Callbacks in Node.js

Programmers unfamiliar with JavaScript, who work with Java or PHP, might be surprised when they see Node.js code described on [Callback Hell](http://callbackhell.com).

## References
- [Node.js File System Documentation](https://nodejs.org/dist/latest-v7.x/docs/api/fs.html)

## Challenges

- [Convert Blocking](challenges/convertBlocking.js)
- [Copy File](challenges/copyFile.js)
- [Rectangle](challenges/rectangle.js)
