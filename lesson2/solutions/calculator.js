/*
Write a command line calulator application
	- ex1. `$ node calculator.js 5 + 3` should print `8`
	- ex2. `$ node calculator.js 5 - 2` should print `3`
	- ex3. `$ node calculator.js 5 x 3` should print `15`
	- ex4. `$ node calculator.js 5 / 2` should print `2.5`
*/
var operators = ['+', '-', 'x', '/'];

var left = Number(process.argv[2]);
var operator = process.argv[3];
var right = Number(process.argv[4]);

if (isNaN(left) || isNaN(right)) {
	throw new Error('Invalid operands!');
}

var answer = 0;
switch (operator) {
	case '+':
		answer = left + right;
		break;
	case '-':
		answer = left - right;
		break;
	case 'x':
		answer = left * right;
		break;
	case '/':
		answer = left / right;
		break;
	default:
		throw new Error('Invalid operator!');
}

console.log(answer);