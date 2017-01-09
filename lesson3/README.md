# Lesson 3: File I/O

> Built-in fs module which provides filesystem-related functionality

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

## Synchronous vs Asynchronous
- Every method in the fs module has synchronous as well as asynchronous forms. 
- Asynchronous methods take the last parameter as the completion function callback and the first parameter of the callback function as error. 
- It is better to use an asynchronous method instead of a synchronous method, as the former never blocks a program during its execution, whereas the second one does.
- Asynchronous programming will likely take some time to grasp and master.
- It requires a paradigm shift in terms of thinking about how application logic should execute.

[syncVsAsync.js.js](syncVsAsync.js.js)
```js
var fs = require('fs');

fs.readFile('ltcs.txt', function(err, data) {
   console.log("Asynchronous read: " + data.toString());
});

var data = fs.readFileSync('ltcs.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");
```

Run
```bash
$ node syncVsAsync.js
Synchronous read: Learn Teach Code Seoul
Program Ended
Asynchronous read: Learn Teach Code Seoul
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

## Challenges
[Convert Blocking](challeges/convertBlocking.js)
[Copy File](challeges/copyFile.js)
