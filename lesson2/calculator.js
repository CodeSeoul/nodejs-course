// console.log(process.argv);

var num1 = parseInt(process.argv[2]);
var opperator = process.argv[3];
var num2 = parseInt(process.argv[4]);

console.log(num1);
console.log(opperator);
console.log(num2);

if (opperator === '+') {
  console.log("result is : " + (num1 + num2));
} else if (opperator === '-') {
  console.log("result is : " + (num1 - num2));
} else if (opperator === 'x') {
  console.log("result is : " + (num1 * num2));
} else {
  console.log("result is : " + (num1 / num2));
}
