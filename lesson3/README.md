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

### 4 Ways to define a function
```js
function hello(name) {
	console.log('Hello,', name, '!');
};

var hello = function(name) {
	console.log('Hello,', name, '!');
};

var hello = (name) => {
	console.log('Hello,', name, '!');
};
```

## Challenges