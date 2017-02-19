// 1. Start by changing the call from readFileSync() to readFile().
// 2. To finish it up, remove the contents var declaration, and move the call to console.log() inside your callback.

var fs = require('fs');

// var contents = fs.readFileSync('hello.html');
// console.log(contents.toString());

	fs.readFile("hello.html",function(err,data){
		if(err) console.log(err);
		else console.log(data.toString());
		
	});