// Copy contents from hello.html to hello-copy.html

var fs = require('fs');

// 1. Do this synchronously first
var contents;
try {
	contents = fs.readFileSync('hello.html');
	try {
		fs.writeFileSync('hello-copy-sync.html', contents);
	} catch (e) {
		console.log('Failed to write.');
	}
} catch (e) {
	console.log('Failed to read.');
}
console.log('Copied synchronously!');

// 2. Do the same thing asynchronously
fs.readFile('hello.html', (err, data) => {
	if (err) {
		console.log('Failed to read.');
		return;
	}
	contents = data.toString();
	fs.writeFile('hello-copy-async.html', contents, (err) => {
		if (err) {
			console.log('Failed to write.');
			return;
		}
		console.log('Copied asynchronously!');
	});
});
