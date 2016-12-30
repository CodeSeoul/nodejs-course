# Lesson 7: Modules

## We've seen...

```js
var http = require('http');
var fs = require('fs');
```

How does `require` return the libraries?

How does it find these files?

## Requring Modules

Look in the same directory

```js
var some_module = require('./some_module');
```

Look in the parent directory

```js
var some_module = require('../some_module');
```

Look in the root directory

```js
var some_module = require('/Users/dale/some_module');
```

Look in the **node_modules** directory

```js
var make_request = require('some_module');
```

## Export Our Own Modules

custom_hello.js
```js
var hello = function() {
  console.log("hello!");
}
module.exports = hello;
```

custom_bye.js
```js
exports.goodbye = function() {
  console.log("bye!");
}
```

app.js
```js
var hello = require('./custom_hello');
var bye = require('./custom_bye');
hello();
bye.goodbye();
```

If we only need to call once
```js
require('./custom_goodbye').goodbye();
```

## Export Multiple Functions

my_module.js
```js
var foo = function() {...};
var bar = function() {...};
var baz = function() {...};

exports.foo = foo;
exports.bar = bar;
```

app.js
```js
var myMod = require('./my_module');
myMod.foo();
myMod.bar();
```

## NPM (Node Package Manager)

- Comes with node
- Module Repository
- Dependency Management
- Easily publish modules

## Finding modules

- Website (http://npmjs.org)

## Installing a NPM Module

Install into the local *node_modules* directory

```bash
$ npm install request
```

Load from the lccal *mode_modules* directory

```js
var request = require('request');
```

## Defining Your Dependencies

Udpate package.json

```js
{
  "name": "My App",
  "version": "1",
  "dependencies": {
    "connect": "1.8.7"
  }
}
```

Install into the local *node_modules* directory (./node_modules/connect)

```bash
$ npm install
```
