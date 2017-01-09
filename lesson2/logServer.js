var http = require('http');

var server = http.createServer();
server.on('request', function(req, res) {
  console.log('method:', req.method);
  console.log('url:', req.url);
  res.end();
});
server.listen(3000);
