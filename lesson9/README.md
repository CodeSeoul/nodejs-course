# Lesson 9: Socket.io

## Limitations on Ajax for messaging

To handle chat-related messaging, you could poll the server with Ajax.

But to make this applicaiton as responsive as possible, you'll avoid using traditional Ajax as a means to send messages.

Ajax uses HTTP as a transport mechanism, and HTTP wasn't desigend for real-time communication.

When a message is sent using HTTP, an new TCP/IP connection must be used.

Opening and closing connections takes time, and the size of the data transfer is larger because HTTP headers are sent on every reqeust and response.

## WebSokect & Socket.IO

### WebSocket

WebSocket was designed as a bidirectional lightweight communications protocol to support real-time communication.

Modern HTLM5-compliant browsers are capable of using WebSocket to handle communication between the brower and the server.

### Socket.IO

Socket.IO provides a layer of abstraction over WebSocket and other transports for both Node and client-side JavaScript.

Socket.IO will fall back transparently to other WebSocket alternatives if WebSocket isn't implemented in a web browser while keeping the same API.
