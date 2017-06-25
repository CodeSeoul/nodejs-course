// Copy contents from hello.html to hello-copy.html
var fs = require('fs');

// 1. Do this synchronously first
const contents = fs.readFileSync('hello.html');
fs.writeFileSync('hello-copy.html', contents);

// 2. Do the same thing asynchronously
fs.readFile('hello.html', (contents) => {
  fs.writeFile('hello-copy.html', contents);
});
