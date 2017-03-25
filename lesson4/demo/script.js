var EventListener = require('events');

var myEmitter = new EventListener();
let eventNames = myEmitter.eventNames();
//console.log('event names: ' + myEmitter.eventNames());

function hey(){
  console.log('hey');
}

myEmitter.on('farewell', (name)=>{
  console.log(name + ' byebye');
});
myEmitter.on('greeting', ()=>{
  console.log('yo');
});
myEmitter.on('greeting', hey);
//console.log('event names: ', myEmitter.eventNames());
myEmitter.emit('greeting');
myEmitter.emit('farewell', 'Ben');
