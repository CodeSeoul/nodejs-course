var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
  console.log('method:', req.method);
  console.log('url:', req.url);
  res.end(req.headers);
});
server.listen(3000);

console.log('runnin on 3000');
