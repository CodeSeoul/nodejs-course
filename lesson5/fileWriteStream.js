var fs = require('fs');

var file = fs.createWriteStream('ltcs.txt');
file.write('Learn Teach Code Seoul');
file.end(() => {
	console.log('Written successfully!');
});