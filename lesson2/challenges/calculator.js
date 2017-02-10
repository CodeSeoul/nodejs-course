/*
Write a command line calulator application
	- ex1. `$ node calculator.js 5 + 3` should print `8`
	- ex2. `$ node calculator.js 5 - 2` should print `3`
	- ex3. `$ node calculator.js 5 x 3` should print `15`
	- ex4. `$ node calculator.js 5 / 2` should print `2.5`
*/

var num1 = parseInt(process.argv[2]);
var op = process.argv[3];
var num2 = parseInt(process.argv[4]);

if(num1 === NaN || num2 === NaN ){
	throw new Error('Please put right numbers.');
}

var result;

if(op==='+'){
	result = num1+num2;
}
else if(op === '-'){
	result = num1 - num2;
}
else if(op === '*' || op === 'X' || op === 'x'){
	result = num1 * num2;
}
else if(op === '/'){
	result = num1 / num2;
}
else {
	throw new Error('Please put right operator.');
}


console.log('Result : ' + result);
