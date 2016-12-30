# Lesson 7: Modules

## We've seen only built-in modules

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
var some_module = require('some_module');
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

The Node Package Manager is a utility that comes bundled with Node.js.

It allows you to easily install third-party modules and globally publish any Node.js modules you yourself create.

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

## Specifing Dependencies

Application dependencies are specified using a `package.json` file also known as a package descriptor file.

This file is always placed in an application's root directory and specify the name of your application, the version and a description of what the application does as well as the application's dependencies.

```js
{
  "name": "My App",
  "version": "0.0.1",
  "description": "Simple HTTP server"
  "dependencies": {
    "connect": "1.8.7"
  }
}
```

NPM reads dependencies from package.json files and install each of them with a single command.

Enter the following command in the root of your application directory.

```bash
$ npm install
```

There should be a newly created `node_modules` directory which contains your application's dependencies.

## Doing them at once

Install a module adding it to package.json at the same time

```bash
$ npm install --save connect
```

## Challenges

- [Highfive](challenges/high_five.js)
- [LogLevel](challenges/logger.js)
- Installing Local Modules
	: Practice using NPM by installing the npm module `underscore` using the `npm` command.
- [Dependency](challenges/package.json)

