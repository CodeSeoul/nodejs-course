# Lesson 9: Socket.io

## Limitations on Ajax for chatting

To handle chat-related messaging, you could poll the server with Ajax.

But to make this applicaiton as responsive as possible, you'll avoid using traditional Ajax as a means to send messages.

Ajax uses HTTP as a transport mechanism, and HTTP wasn't desigend for real-time communication.

When a message is sent using HTTP, an new TCP/IP connection must be used.

Opening and closing connections takes time, and the size of the data transfer is larger because HTTP headers are sent on every reqeust and response.

## Alterntive: WebSokect

WebSocket was designed as a bidirectional lightweight communications protocol to support real-time communication.
