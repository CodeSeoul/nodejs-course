var http = require('http');
var clientCounter=0;
var server = http.createServer(function(resquest,response){
	response.end("client Visited "+ ++clientCounter);
});

server.listen(3000);