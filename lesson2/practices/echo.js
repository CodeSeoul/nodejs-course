var http = require('http');

http.createServer(function(request, response) {
  var body = [];
  
  var headers = request.headers;
  var method = request.method;
  var url = request.url;

  request.on('data', function(chunk) {
    body.push(chunk);
  }).on('end', function() {
    body = Buffer.concat(body).toString();
    response.end(body);
  });


    var responseBody = {
      headers: headers,
      method: method,
      url: url,
      body: body
    };

    response.write(JSON.stringify(responseBody));
    response.end();
  
}).listen(8080);

console.log('running echo..');
