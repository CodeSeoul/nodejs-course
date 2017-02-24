function plus(a, b) {
	console.log(a, '+', b);
	return a + b;
}

var minus = function(a, b) {
	console.log(a, '-', b);
	return a - b;
};

function calculate(a, b, callback) {
	console.log('calculating...');
	return callback(a, b);
}

var plusResult = calculate(5, 2, plus);
var minusResult = calculate(5, 2, minus);
var timesResult = calculate(5, 2, function(a, b) {
	console.log(a, '*', b);
	return a * b;
});
var devideResult = calculate(5, 2, (a, b) => {
	console.log(a, '/', b);
	return a / b;
});

console.log('--- Result ---');
console.log(plusResult);
console.log(minusResult);
console.log(timesResult);
console.log(devideResult);
