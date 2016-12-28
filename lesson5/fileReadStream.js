var fs = require('fs');

var file = fs.createReadStream("fruits.txt");
file.on('data', (chunk) => {
	console.log(chunk.toString());
});
file.on('end', () => {
	console.log('There will be no data.')
})