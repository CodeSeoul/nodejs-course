// Instead of manually listening for the 'data' event on the Readable stream, 
// let's use pipe to read from the file, 'origin.txt' and write directly to the file, 'destination.txt'.
var fs = require('fs');
