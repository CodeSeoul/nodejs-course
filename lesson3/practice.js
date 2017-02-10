http = require('http');

var count = 0;
var server = http.createServer(function(req, res) {
  res.end("This site has been visited " + ++count);
})

server.listen(9000);
