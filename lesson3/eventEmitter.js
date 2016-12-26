var EventEmitter = require('events');

var myEmitter = new EventEmitter();
console.log('Event Names:', myEmitter.eventNames());

var hey = function() {
	console.log('Hey');
};

var hello = function(name) {
	console.log('Hello, ' + name + '!');
};

myEmitter.on('greeting', hey);
myEmitter.once('greeting', hello);
myEmitter.on('farewell', (name) => {
	console.log('Bye, ' + name + '~');
});

console.log('Event Names:', myEmitter.eventNames());
console.log('Listeners for greeting:', myEmitter.listeners('greeting'));
console.log('Listeners for farewell:', myEmitter.listeners('farewell'));

myEmitter.emit('greeting', 'Dale');
myEmitter.emit('greeting', 'Dale');
myEmitter.emit('farewell', 'Dale');