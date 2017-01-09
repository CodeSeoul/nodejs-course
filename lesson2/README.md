# Lesson 2: HTTP

> Don't worry if the details in this lesson seem over your head.

> I'd like to give you a preview of what you'll be able to do when you've completed the course.

## What is HTTP Server?
HTTP server listens or waits for requests from clients and return responses.

## Develop Our First HTTP Server
Our first server always returns "Hello World".

### Import Required Module
Use the `require` directive to load the `http` module and store the returned HTTP instance into an http variable.
```js
var http = require('http');
```

### Create Server
Use the created http instance and call `http.createServer()` method to create a server instance.
Bind it at port 8080 using the `listen` method associated with the server instance. 
Pass it a function with parameters request and response.
Start the event loop. (checking for events)
```js
var server = http.createServer(function(req, res) {
   res.end('Hello, World!'); // Send the response body as "Hello, World!"
});
```

### Listen to client's requests
```js
server.listen(8080);
```

## Test Our First HTTP Server

Execute the [helloServer.js](helloServer.js) to start our first HTTP server.

```bash
$ node helloServer.js
Server running at http://localhost:8080
```

Open `http://localhost:8080` in any browser and observe the result.

Or use the `curl` command on the terminal
```bash
$ curl http://localhost:8080
Hello, World!
```

Now, we have our first HTTP server up and running which is responding to all the HTTP requests at port 8080.

## Challenges
- Create a HTTP server which always returns 0 to 9.
