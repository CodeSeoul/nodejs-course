var http = require('http');

var server = ttp.createServer(function(resquest,response){
	response.end("hello World");
});

server.listen(3000);