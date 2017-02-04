# Lesson 7: Modules

> We can keep code organized and packaged for easy resue.

When creating an application, you often reach a point where putting all of your code in a single file becomes unwieldy.
When this happends, the conventional approach is to take a file containing a lot of code and try to organize it by grouping related logic and moving it into separate files.

## We've seen only built-in modules

```js
var http = require('http');
var fs = require('fs');
```

How does `require` return the libraries?

How does it find these files?

## Requring Modules

Java or Python use the `import` function to load other libraries, while PHP and Ruby use `require`.
Node.js implements the CommonJS interface for modules.
In Node.js you can also load other depencies using the `require` keyword.

- Look in the same directory

```js
var some_module = require('./some_module');
```

- Look in the parent directory

```js
var some_module = require('../some_module');
```

- Look in the root directory

```js
var some_module = require('/Users/dale/some_module');
```

- Look in the **node_modules** directory

```js
var some_module = require('some_module');
```

## Creating Modules

Modules can either be single files or directories containing one or more files.

If a module is a directory, the file in the module directory that will be evaluated is normally named index.js.

- ./my_module.js
- ./my_module/index.js

## Exporting Modules

Node modules allow you to select what functions and variables from the included file are exposed.

- Expose a single function or variable by setting the property `module.exports`.
- Expose multiple functions or varaiables by setting the properties of `exports`.

### Export Multiple Functions

- currency-functions.js

```js
var canadianDollar = 0.91

function roundTwoDecimals(amount) {
	return Math.round(amount * 100) / 100;
}

var canadianToUs = function(canadian) {
	return roundTwoDecimals(canadian * canadianDollar);
};

var usToCanadian = function(us) {
	return roundTwoDecimals(us / canadianDollar);
};

exports.canadianToUs = canadianToUs;
exports.usToCanadian = usToCanadian;
```

- test-currency-functions.js

```js
var currency = require('./currency-functions');

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUs(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.usToCanadian(30));
```

### Export a Single Class

- currency-class.js

```js
var Currency = function(canadianDollar) {
	this.canadianDollar = canadianDollar;
};

Currency.prototype.roundTwoDecimals = function(amount) {
	return Math.round(amount * 100) / 100;
};

Currency.prototype.canadianToUs = function(canadian) {
	return this.roundTwoDecimals(canadian * this.canadianDollar);
}

Currency.prototype.usToCanadian = function(us) {
	return this.roundTwoDecimals(us / this.canadianDollar);
}

module.exports = Currency;
```

- test-currency-class.js

```js
var Currency = require('./currency-class');

var currency = new Currency(0.91);

console.log('50 Canadian dollars equals this amount of US dollars:');
console.log(currency.canadianToUs(50));

console.log('30 US dollars equals this amount of Canadian dollars:');
console.log(currency.usToCanadian(30));
```


## Modularizing current application

### Before

- [rectangle-after.js](rectangle-after.js)

```js
var rectangle = {
	perimeter: function (length, width) {
    return 2 * (length + width);
	},
	area: function (length, width) {
    return length * width;
	}
};

function solveRectangle(length, width) {
  console.log("Solving for rectangle with length = " + length + " and width = " + width);
  
  if (length < 0 || width < 0) {
    console.log("Rectangle dimensions should be greater than zero");
  } else {
  	console.log("The area:", rectangle.area(length, width));
  	console.log("The perimeter:" + rectangle.perimeter(length, width));
  }
}
```


### After

- [rectangle-1.js](rectangle-1.js)

```js
var rectangle = {
	perimeter: function (length, width) {
    return 2 * (length + width);
	},
	area: function (length, width) {
    return length * width;
	}
};

module.exports = rectangle;
```

- [rectangle-2.js](rectangle-2.js)

```js
var perimeter = function (length, width) {
  return 2 * (length + width);
};

var area = function (length, width) {
  return length * width;
};

exports.perimeter = perimeter;
exports.area = area;
```

- [rectangle-after.js](rectangle-after.js)

```js
var rectangle = require('./rectangle-1');
// var rectangle = require('./rectangle-2');

function solveRectangle(length, width) {
  console.log("Solving for rectangle with length = " + length + " and width = " + width);
  
  if (length < 0 || width < 0) {
    console.log("Rectangle dimensions should be greater than zero");
  } else {
  	console.log("The area:", rectangle.area(length, width));
  	console.log("The perimeter:" + rectangle.perimeter(length, width));
  }
}
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

- [Highfive](challenges/highfive.js)
- [LogLevel](challenges/logger.js)
- Installing Local Modules
	: Practice using NPM by installing the npm module `underscore` using the `npm` command.
- [Dependency](challenges/package.json)

