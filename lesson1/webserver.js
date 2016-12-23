const http = require('http');
const port = 8000;

http.createServer((req, res) => {
  res.end('Hello World\n');
}).listen(port, () => {
  console.log('Server running at http://localhost:' + port);
});