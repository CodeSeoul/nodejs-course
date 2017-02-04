var http = require('http');

var content = [];

process.argv.forEach((val, index) => {
  content.push(`${val}`);
});

data = content.slice(2, 5);
greeting = "Hello, " + data[1] + " " + data[0] + "!"
var server = http.createServer(function(req, res) {
   res.end(`${greeting}`); 
});

server.listen(3000);


console.log('listening to 3000');
console.log('');
console.log(content);



