var http = require('http');

var content = [];

process.argv.forEach((val, index) => {
  content.push(`${val}`);
});

data = content.slice(2, 5);
greeting = "Hello, " + data[0] + " " + data[1] + "!"
var server = http.createServer(function(req, res) {
   res.end(`${greeting}`); 
});

server.listen(8000);


console.log('listening to 8000');
console.log('');
console.log(content);



