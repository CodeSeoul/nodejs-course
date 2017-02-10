/**
 * Created by khpark on 04/02/2017.
 */

var http = require('http');
var clientCount = 0;

var server = http.createServer(function(req, res) {
    clientCount++;
    res.end('clientCount!' + clientCount); // End the response with the message, "Hello, World!"
});


server.listen(3000);
