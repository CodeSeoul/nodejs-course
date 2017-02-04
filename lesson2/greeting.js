/*
Write a command line application which prints a greeting message on the console using the function above.
	- ex1. `$ node greeting.js Dale Seo KR` should print `Hello, Seo Dale!`
	- ex2. `$ node greeting.js Dale Seo KR` should print `Hello, Dale Seo!`
*/

function getFullName(first, last, country) {
  var eastCountries = ['KR', 'CH', 'JP'];
  var westContrries = ['US', 'CA', 'UK'];
  country = country.toUpperCase();

  if (eastCountries.indexOf(country) > -1) {
    return last + ' ' + first;
  } else if (westContrries.indexOf(country) > -1) {
    return first + ' ' + last;
  } else {
    throw new Error('Invalid country!');
  }
}

var first = process.argv[2];
var last = process.argv[3];
var country = process.argv[4];

console.log('Hello, ' + getFullName(first, last, country) + '!');