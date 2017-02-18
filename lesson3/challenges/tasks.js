/*
$ node tasks.js list
$ node tasks.js clear
$ node tasks.js add <task>
*/

const fs = require('fs');

const targetFile = 'tasks.txt';
const defaultContents = '[]';
let tasks;

try {
  tasks = fs.readFileSync(targetFile, 'utf-8')
} catch (e) {
  fs.writeFileSync(targetFile, defaultContents, 'utf8', (err) => {
    console.log(err);
  })
  tasks = fs.readFileSync(targetFile, 'utf-8');
}
tasks = JSON.parse(tasks);

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
  if (tasks.length === 0) {
    console.log('Found no tasks.');
  } else {
    console.log('Found', tasks.length, 'tasks.');
    for (let i = 0; i < tasks.length; i++) {
      console.log(i + 1, tasks[i]);
    }
  }
}

function clearTasks() {
  fs.writeFile(targetFile, defaultContents ,(err) => {
    console.log(err);
  });
  console.log(`Cleared up the tasks. (${tasks.length} tasks)`);
}

function addTask() {
  let task = process.argv.splice(3).join(' ');
  tasks.push(task);
  fs.writeFile(targetFile, JSON.stringify(tasks), (err) => {
    console.log(err);
  })
  console.log(`Added the given task. (${tasks.length} tasks)`);
}

function help() {
  console.log('-------------------- HOW TO USE --------------------');
  console.log('$ node tasks.js list: list up all the tasks.');
  console.log('$ node tasks.js clear: clear up all the tasks.');
  console.log('$ node tasks.js add <task>: add the given task. ');
  console.log('----------------------------------------------------');
}
