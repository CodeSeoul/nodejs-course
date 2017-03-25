var http = require('http');

var server = http.createServer();

server.on('request', function(req, res){
  res.write('<!DOCTYPE html><html><header></header><body>hello there<br>');
});

server.on('request', function(req, res){
  res.write('hello there1<br>');
});
server.on('request', function(req, res){
  res.write('hello there2 <br>');
});


server.on('close', function(req, res){
  console.log('bye');
})
server.on('request', function(req, res){
  res.end('hello there3</body></html>');
});


server.listen(3000);
