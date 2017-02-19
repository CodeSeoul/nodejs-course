// Copy contents from hello.html to hello-copy.html
var fs = require('fs')

// 1. Do this synchronously first

// 2. Do the same thing asynchronously

	fs.readFile("hello.html",function(err,data){
		if(err) console.log(err);
		else {
            fs.writeFile("hello-copy.html",data.toString(),function(err){
                if(err) console.log(err);
            });
        }		
	});

    try{
		let data = fs.readFileSync("hello.html");
		fs.writeFileSync("hello-copy.html",data);
	}
	catch(err){
		console.log(err);
	}