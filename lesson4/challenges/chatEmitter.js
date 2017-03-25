var EventEmitter = require('events');

// 1. Create a new EventEmitter object and assign it to a variable called 'chat'.
let chat = new EventEmitter();

// 2. Create a function named 'logMessage' to log the given 'message' argument to the console using console.log().
function logMessage(message){
  console.log(message);
}
// 3. Listen for the 'message' event on our new chat object. Remember to add a callback that accepts the message parameter.
chat.on('message', logMessage);
// 4. Add another listener for the 'join' event to log the welcoming message, "Welcome, " + name + "!".
chat.on('join', (name)=>{
  console.log('Welcome ' + name + '!');
})
// 5. On the chat object, emit the 'join' event and pass in your name as a string.
chat.emit('message', 'ben');
// 6. Finally, Emit the 'message' event twice on the chat object passing in any messages.
chat.emit('join', 'dale');
