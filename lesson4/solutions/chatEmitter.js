var EventEmitter = require('events');

// 1. Create a new EventEmitter object and assign it to a variable called 'chat'.
var chat = new EventEmitter();

// 2. Create a callback function named 'logMessage' to log the given 'message' argument to the console using console.log().
var logMessage = function(message) {
  console.log(message);
};

// 3. Listen for the 'message' event on our new chat object. Remember to add a callback that accepts the message parameter.
chat.on('message', logMessage);

// 4. Add another listener for the 'join' event to log the welcoming message, "Welcome, " + name + "!".
chat.on('join', function(name) {
  console.log('Welcome, ' + name + "!");
});

// 5. On the chat object, emit the 'join' event and pass in your name as a string.
chat.emit('join', 'Dale');

// 6. Finally, Emit the 'message' event twice on the chat object passing in any messages.
chat.emit('message', 'Hi!');
chat.emit('message', 'Bye~');
