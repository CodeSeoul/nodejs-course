// console.log(process.argv.slice(2, 4));
var tasks = ["Eat.","Sleep.","Play."];
var command = process.argv[2];
console.log("> command:", command);

switch (command) {
  case 'list':
    listTasks();
    break;
  case 'clear':
    clearTasks();
    break;
  case 'add':
    addTask();
    break;
  default:
    help();
}

function listTasks() {
  if (tasks.length === 0) {
    console.log('Found no tasks.');
  } else {
    console.log('Found ' + tasks.length + ' tasks.');
    for (let i = 0; i < tasks.length; i++) {
      console.log(i, tasks[i]);
    }
  }
}

function clearTasks() {
  tasks = [];
  console.log(`Cleared up the tasks. (${tasks.length} tasks)`);
}

function addTask() {
  let task = process.argv.slice(3).join(' ');
  tasks.push(task);
  console.log(`Added the given task. (${tasks.length} tasks)`);
}

function help() {
  console.log('-------------------- HOW TO USE --------------------');
  console.log('$ node tasks.js list: list up all the tasks.');
  console.log('$ node tasks.js clear: clear up all the tasks.');
  console.log('$ node tasks.js add <task>: add the given task. ');
  console.log('----------------------------------------------------');
}
