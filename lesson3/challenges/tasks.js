/*
$ node tasks.js list
$ node tasks.js clear
$ node tasks.js add <task>
*/
fs = require("fs");
// let tasks = ["Eat.","Sleep.","Play."];
let command = process.argv[2];

switch (command) {
  case 'list':
    listTasks();
    break;
  case 'clear':
    clearTasks();
    break;
  case 'add':
    addTask(process.argv[3]);
    break;
  default:
    help();
}

function listTasks() {
  fs.readFile("tasks.txt", function (err, data) {
    if (err) console.log(err);
    else {
      if (data.toString() == "") console.log('Found no tasks.');
      else {
        var tasks = data.toString().split("\n");
        console.log('Found', tasks.length, 'tasks.');
        for (let i = 0; i < tasks.length; i++)
          console.log(i + 1, tasks[i]);
      }
    }
  })
}

function clearTasks() {
  fs.writeFile("tasks.txt", "", function (err) {
    if (err) console.log(err);
  });
  console.log(`Cleared up the tasks.`);
}

function addTask(newItem) {
  fs.readFile("tasks.txt", function (err,data) {
    if (err) console.log(err);
    else {
      if (data.toString() == "") {
        fs.writeFile("tasks.txt", newItem, function (err) {
          if (err) console.log(err);
        });
      }
      else {
        fs.appendFile("tasks.txt", "\n" + newItem, function (err) {
          if (err) console.log(err);
        });
      }
    }
  });
  console.log(`Added the given task tasks)`);
}

function help() {
  console.log('-------------------- HOW TO USE --------------------');
  console.log('$ node tasks.js list: list up all the tasks.');
  console.log('$ node tasks.js clear: clear up all the tasks.');
  console.log('$ node tasks.js add <task>: add the given task. ');
  console.log('----------------------------------------------------');
}