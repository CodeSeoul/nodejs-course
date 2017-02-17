# Lesson 3: File I/O (feat. Buffer)

> Built-in fs module which provides filesystem-related functionality


## CLI To-do Application

How about building a simple to-do Application which provides command line interface?

- [tasks.js](challenges/tasks.js)


## Why do we need files?

- Variables are volatile because they stay on the memory.
- All the data stored in variables are gone when we shut down the application or turn off the computer.
- However, files **keep** data until we update them because they stay on the disk.


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


## Synchronous vs Asynchronous

![php-node](php-node.jpg)

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

## Buffer

### Why Buffers?

Pure strings doesn't handle binary data.

### When To Use Buffers?

- Read and write to the file system
- Deal with TCP streams

### What Are Buffers?

Buffers are instances of the Buffer class in node, which is designed to handle raw binary data.
Buffers act somewhat like arrays of integers, but aren't resizable and have a whole bunch of methods specifically for binary data.


### Encoding

The character encodings currently supported by Node.js include:

- `ascii` - for 7-bit ASCII data only. This encoding is fast and will strip the high bit if set.

- `utf8` - Multibyte encoded Unicode characters. Many web pages and other document formats use UTF-8.

- `utf16le` - 2 or 4 bytes, little-endian encoded Unicode characters. Surrogate pairs (U+10000 to U+10FFFF) are supported.

- `ucs2` - Alias of 'utf16le'.

- `base64` - Base64 encoding. When creating a Buffer from a string, this encoding will also correctly accept "URL and Filename Safe Alphabet" as specified in RFC4648, Section 5.

- `latin1` - A way of encoding the Buffer into a one-byte encoded string (as defined by the IANA in RFC1345, page 63, to be the Latin-1 supplement block and C0/C1 control codes).

- `binary` - Alias for 'latin1'.

- `hex` - Encode each byte as two hexadecimal characters.

#### Online Tools

- [ASCII to Hex](http://www.asciitohex.com/)

### Usage

The Buffer class is a global within Node.js, making it unlikely that one would need to ever use require('buffer').Buffer.


#### Creating Buffers

There are a few ways to create new buffers:

```js
var buffer = new Buffer(8);
```

This buffer is uninitialized and contains 8 bytes.

```js
var buffer = new Buffer([ 8, 6, 7, 5, 3, 0, 9]);
```

This initializes the buffer to the contents of this array. Keep in mind that the contents of the array are integers representing bytes.

```js
var buffer = new Buffer("I'm a string!", "utf8");
```

This initializes the buffer to a binary encoding of the first string as specified by the second argument (in this case, utf8).
utf-8 is by far the most common encoding used with node.


#### Writing to Buffers

Given that there is already a buffer created:

```js
> var buffer = new Buffer(16);
```

we can start writing strings to it:

```js
> buffer.write("Hello", "utf8")
5
```

The first argument to buffer.write is the string to write to the buffer, and the second argument is the string encoding.
It happens to default to utf8 so this argument is extraneous.

buffer.write returned 5.
This means that we wrote to five bytes of the buffer.
The fact that the string "Hello" is also 5 characters long is coincidental, since each character just happened to be 8 bits apiece.
This is useful if you want to complete the message:

```js
> buffer.write(" world!", 5, "utf8")
7
```
When buffer.write has 3 arguments, the second argument indicates an offset, or the index of the buffer to start writing at.


#### Reading from Buffers:

Probably the most common way to read buffers is to use the `toString` method, since many buffers contain text:

```js
> buffer.toString();
'Hello world!\u0000\u0000\u0000\u0000'
```

Again, the first argument is the encoding.
In this case, it can be seen that not the entire buffer was used!
Luckily, because we know how many bytes we've written to the buffer, we can simply add more arguments to "stringify" the slice that's actually interesting:

```js
buffer.toString('utf8', 0, 12);
'Hello world!'
```

You can also set individual bits by using an array-like syntax:

```js
> buffer[12] = buffer[11];
33
> buffer[13] = "1".charCodeAt();
49
> buffer[14] = buffer[13];
49
> buffer[15] = 33
33
> buffer.toString("utf-8")
'Hello world!!11!'
```

In this example, I set the remaining bytes, by hand, such that they represent utf8 encoded "!" and "1" characters.


### More Fun With Buffers

#### Buffer.isBuffer(object)

This method checks to see if object is a buffer, similar to Array.isArray.

#### Buffer.byteLength(string, encoding)

With this function, you can check the number of bytes required to encode a string with a given encoding (which defaults to utf-8). This length is not the same as string length, since many characters require more bytes to encode. For example:

```js
> var korean = "가";
> korean.length
1
> Buffer.byteLength(korean);
3
```

The unicode `korean` is only one character, but takes 3 entire bytes to encode!

#### buffer.length

This is the length of your buffer, and represents how much memory is allocated.
It is not the same as the size of the buffer's contents, since a buffer may be half-filled.
For example:

```js
> var buffer = new Buffer(16);
> buffer.write(korean);
3
> buffer.length
16
```

In this example, the contents written to the buffer only consist of three groups (since they represent the single-character `korean`), but the buffer's length is still 16, as it was initialized.

#### buffer.copy(target, targetStart=0, sourceStart=0, sourceEnd=buffer.length)

buffer.copy allows one to copy the contents of one buffer onto another.
The first argument is the target buffer on which to copy the contents of buffer, and the rest of the arguments allow for copying only a subsection of the source buffer to somewhere in the middle of the target buffer.
For example:

```js
> var greeting = new Buffer(16);
> greeting.write("Hello", 'utf8');
5
> var korean = new Buffer('안녕', 'utf8');
> korean.copy(greeting, 5)
6
> greeting.toString('utf8', 0, 11);
'Hello안녕'
```

In this example, I copied the "korean" buffer, which contains a 6 byte long character, to the "greeting" buffer, to which I had written to the first 5 bytes. Because the snowman character is 6 bytes long, the result takes up 11 bytes of the buffer.

#### buffer.slice(start, end=buffer.length)

This method's API is generally the same as that of Array.prototype.slice, but with one very import difference:
The slice is not a new buffer and merely references a subset of the memory space.
Modifying the slice will also modify the original buffer! For example:

```js
> var greeting = new Buffer('Hello안녕');
> var subset = greeting.slice(5, 8);
> subset.toString();
'안'
> subset.write('___');
3
> subset.toString();
'___'
> greeting.toString();
'Hello___녕'
```


## Tip: The Node.js convention for asynchronous callbacks

Most Node.js built-in modules use callbacks with two arguments.

The first argument is for an error, should one occur, and the second argument is for the results.


## Tip: Taming Callbacks in Node.js

Programmers unfamiliar with JavaScript, who work with Java or PHP, might be surprised when they see Node.js code described on [Callback Hell](http://callbackhell.com).


## References
- [Node.js  Documentation - File System](https://nodejs.org/dist/latest-v7.x/docs/api/fs.html)
- [Node.js Documentation - Buffer](https://nodejs.org/dist/latest-v7.x/docs/api/buffer.html)
- [How to Use Buffers in Node.js](https://docs.nodejitsu.com/articles/advanced/buffers/how-to-use-buffers/)

## Challenges

- [Convert Blocking](challenges/convertBlocking.js)
- [Copy File](challenges/copyFile.js)
- [Rectangle](challenges/rectangle.js)
- [CLI ToDo App](challenges/tasks.js)
