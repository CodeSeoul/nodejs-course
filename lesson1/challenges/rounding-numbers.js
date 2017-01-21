/*
We can do basic math using familiar operators like +, -, *, /, and %.
For more complex math, we can use the Math object.
In this challenge we'll use the Math object to round numbers.

The challenge:

  Define a variable named 'roundUp' that references the float 1.5.

  We will use the Math.round() method to round the number up.
  This method rounds either up or down to the nearest integer.

  An example of using Math.round():
    Math.round(0.5);

  Define a second variable named 'rounded' that references the output of the Math.round() method,
  passing in the roundUp variable as the argument.

  Use console.log() to print that number to the terminal.
*/

var roundUp = 1.5;
var rounded = Math.round(roundUp);
console.log(rounded);
