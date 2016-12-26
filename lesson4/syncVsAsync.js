var fs = require('fs');

fs.readFile('ltcs.txt', function(err, data) {
   console.log("Asynchronous read: " + data.toString());
});

var data = fs.readFileSync('ltcs.txt');
console.log("Synchronous read: " + data.toString());

console.log("Program Ended");