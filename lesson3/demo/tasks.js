const fs = require('fs');

let tasks = ["Eat", "Sleep", "Play"];
let filename =  'ltcs.txt';
var command = process.argv[2];
function readTasks(){

}
fs.writeFile(filename, tasks, function(err){
  if(err) console.log(err);
})
console.log("tasks were written to " + filename);

console.log("command", command);

function listTasks(){
  if(tasks.length===0){
    console.log("found no tasks");
  }else{
    console.log(`found ${tasks.length} lists`);
  }
}

function clearTasks(){
  fs.writeFile(filename, '', function(err){
    if(err) console.log(err);
  })
//  tasks=[];
  console.log(`Clear up the tasks ( ${tasks.length} )`);

}

function addTasks(){
  let task = process.argv.slice(3).join(" ");
  console.log('>task :', task);
  tasks.push(task);
  console.log(`Added the given tasks ( ${tasks.length} )`);
  fs.writeFile(filename, tasks, function(err){
    if(err) console.log(err);
  })
  console.log("tasks were written to " + filename);
}

function help(){
  console.log("Type list, clear, or add");
}

switch(command){
  case 'list':
    listTasks();
    break;
  case 'clear':
    clearTasks();
    break;
  case 'add':
    addTasks();
    break;
  default:
    help();
}
