/*
$ node tasks.js list
$ node tasks.js clear
$ node tasks.js add <task>
*/
const fs = require('fs');

const FILE_NAME = 'tasks.dat';

let command = process.argv[2];

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
  loadTasks((tasks) => {
    if (tasks.length === 0) {
      console.log('Found no tasks.');
    } else {
      console.log('Found', tasks.length, 'tasks.');
      for (let i = 0; i < tasks.length; i++) {
        console.log(i + 1, tasks[i]);
      }
    }
  });
}

function clearTasks() {
  let tasks = [];
  saveTasks(tasks);
  console.log('Cleaned up all the tasks. (' + tasks.length + ' tasks)');
}

function addTask() {
  let task = process.argv.splice(3).join(' ');
  loadTasks((tasks) => {
    tasks.push(task);
    saveTasks(tasks);
    console.log('Added the given task. (' + tasks.length + ' tasks)');
  });
}

function help() {
  console.log('-------------------- HOW TO USE --------------------');
  console.log('$ node tasks.js list: list up all the tasks.');
  console.log('$ node tasks.js clear: clear up all the tasks.');
  console.log('$ node tasks.js add <task>: add the given task. ');
  console.log('----------------------------------------------------');
}

function loadTasks(cb) {
  fs.readFile(FILE_NAME, 'utf8', (err, data) => {
    if (err) {
      console.log('> ERROR: Failed to load tasks.');
    } else {
      tasks = JSON.parse(data);
      cb(tasks);
    }
  });
}

function saveTasks(tasks) {
  let data = JSON.stringify(tasks);
  fs.writeFile(FILE_NAME, data, 'utf8', (err) => {
    if (err) {
      console.log('> ERROR: Failed to save tasks.');
    }
  });
}

/*
function loadTasks() {
  let tasks = [];
  fs.readFile(FILE_NAME, 'utf8', (err, data) => {
    if (err) {
      console.log('> ERROR: Failed to load data.');
    } else {
      console.log('> DATA:', data);
      tasks = JSON.parse(data);
    }
  });
  return tasks;
}
*/
