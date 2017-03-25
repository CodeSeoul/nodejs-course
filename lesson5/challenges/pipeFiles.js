// Instead of manually listening for the 'readable' event on the Readable stream,
// let's use pipe to read from the file, 'origin.txt' and write directly to the file, 'destination.txt'.
const fs = require('fs')

let wStream = fs.createWriteStream('origin.txt')
let rStream = fs.createReadStream('destination.txt')

// var fs = require('fs');
//
// var origFile = fs.createReadStream('origin.txt');
// var destFile = fs.createWriteStream('destination.txt');


/*
I switched these >_< doh!
*/
