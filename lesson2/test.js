
var http = require('http');

var server = http.createServer(function(request, response){
	response.end('Hello, World!');
})

server.listen(3000); //It's common that node programs listen to the port num 3000;

