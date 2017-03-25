const http = require('http')

http.createServer(function(req, res){
  req.pipe(res)
  // req.on('data', (chunk)=> {
  //   res.write(chunk)
  // })
  // req.on('end', () => {
  //   res.end()
  // })
}).listen(3000)
