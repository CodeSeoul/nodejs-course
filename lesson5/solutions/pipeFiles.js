// Instead of manually listening for the 'readable' event on the Readable stream,
// let's use pipe to read from the file, 'origin.txt' and write directly to the file, 'destination.txt'.
var fs = require('fs');

var origFile = fs.createReadStream('origin.txt');
var destFile = fs.createWriteStream('destination.txt');

// origFile.pipe(destFile);
origFile.pipe(destFile, {end: false});

/*
By default, stream.end() is called on the destination Writable stream when the source Readable stream emits 'end', so that the destination is no longer writable.
To disable this default behavior, the end option can be passed as false, causing the destination stream to remain open.
The following code would throw an error because pipe() automatically closed our writable stream, if it weren't for the option, {end: false}.
*/

origFile.on('end', function(){
 destFile.write('\nFinished!');
});
