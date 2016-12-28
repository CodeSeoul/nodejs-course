// Copy contents from hello.html to hello-copy.html

var fs = require('fs')

// 1. Do this synchronously first
var contents = fs.readFileSync('hello.html');
fs.writeFileSync('hello-copy-sync.html', contents);
console.log('Copied synchronously!');	

// 2. Do the same thing asynchronously
fs.readFile('hello.html', (err, data) => {
	contents = data.toString();
	fs.writeFile('hello-copy-async.html', contents, (err) => {
		console.log('Copied asynchronously!');
	});
});