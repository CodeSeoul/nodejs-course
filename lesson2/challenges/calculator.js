/*
Write a command line calulator application
	- ex1. `$ node calculator.js 5 + 3` should print `8`
	- ex2. `$ node calculator.js 5 - 2` should print `3`
	- ex3. `$ node calculator.js 5 x 3` should print `15`
	- ex4. `$ node calculator.js 5 / 2` should print `2.5`
*/

//console.log(process.argv);

var num1 = parseInt(process.argv[2]);
var op = process.argv[3];
var num2 = parseInt(process.argv[4]);

switch (op) {
  case "+":
    console.log(num1 + num2);
    break;
  case "-":
    console.log(num1 - num2);
    break;
  case "x":
    console.log(num1*num2);
    break;
  case "/":
    console.log(num1/num2);
    break;
  default:
    console.log("bad bad operator");
}
