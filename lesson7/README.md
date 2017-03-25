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

- [rectangle-before.js](rectangle-before.js)

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

It allows you to easily install third-party packages and globally publish any Node.js packages you yourself create.

```
$ npm --version
$ npm help
```


## Searching for npm packages

- Website (http://npmjs.org)


## Installing NPM packages

Install a package into your *node_modules* directory using `npm install <package>`:

```bash
$ npm install lodash
$ ls node_modules
lodash
```


## Uninstalling NPM packages

Remove a package from your *node_modules* directory using `npm uninstall <package>`:

```bash
$ npm uninstall lodash
$ ls node_modules
```


## Installing/Uninstalling packages globally

To download packages globally, you simply use the command `npm install -g <package>`, e.g.:

```bash
$ npm install -g standard
$ npm uninstall -g standard
```


## Using a **package.json**

A `package.json` file is also known as a package descriptor file.

This file is always placed in an application's root directory and specify the name of your application, the version and a description of what the application does as well as the application's dependencies.

A `package.json` file affords you a lot of great things:

- It serves as documentation for what packages your project depends on.
- It allows you to specify the versions of a package that your project can use using [semantic versioning rules](https://docs.npmjs.com/getting-started/semantic-versioning).
- Makes your build reproducible which means that its way easier to share with other developers.


### Requirements

As a bare minimum, a `package.json` must have:

- "name"
	- all lowercase
	- one word, no spaces
	- dashes and underscores allowed
- "version"
	- in the form of x.x.x
	- follows [semver spec](https://docs.npmjs.com/getting-started/semantic-versioning)
	- For example:

```js
{
  "name": "my-awesome-package",
  "version": "1.0.0"
}
```


## Creating a package.json

To create a package.json run:

```bash
> npm init
```

This will initiate a command line questionnaire that will conclude with the creation of a package.json in the directory you initiated the command.

```bash
> npm init --yes
```

This will ask no questions, and instead will generate a default package.json using information extracted from the current directory.

## Specifying Packages

To specify the packages your project depends on, you need to list the packages you'd like to use in your package.json file. There are 2 types of packages you can list:

- "dependencies": these packages are required by your application in production
- "devDependencies": these packages are only needed for development and testing


### Manually editing your package.json

The project below uses any version of the package `lodash` that matches major version 4 in production, and requires any version of the package `nodemon` that matches major version 1, but only for development:

```js
{
  "name": "my_package",
  "version": "1.0.0",
  "dependencies": {
		"lodash": "^4.0.0"
  },
  "devDependencies" : {
		"nodemon": "^1.0.0"
  }
}
```

NPM reads dependencies from your `package.json` file and install each of them with a single command.

```bash
$ npm install
$ ls node_modules/
lodash nodemon
```

There should be a newly created `node_modules` directory which contains your application's dependencies.

### The --save and --save-dev install flags

The easier (and more awesome) way to add dependencies to your package.json is to do so from the command line, flagging the `npm install` command with either `--save` or `--save-dev`, depending on how you'd like to use that dependency.

To add an entry to your `package.json`'s `dependencies`:

```bash
npm install <package_name> --save
```

To add an entry to your `package.json`'s `devDependencies`:

```bash
npm install <package_name> --save-dev
```


## Run NPM scripts

`npm run <script>` is used by the test, start or any other commands.

```js
"scripts": {
		"test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "dev": "nodemon server.js"
  }
```


## Publishing NPM packages

https://docs.npmjs.com/getting-started/publishing-npm-packages

## Challenges

- [Highfive](challenges/highfive.js)
- [LogLevel](challenges/logger.js)
- Installing Local Modules
	: Practice using NPM by installing the npm module `lodash` using the `npm` command.
- [Dependency](challenges/package.json)

## Reference
- https://docs.npmjs.com/
