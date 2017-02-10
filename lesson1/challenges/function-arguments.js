/*
Define a function named 'getFullName' that takes three arguments, the first name, the last name and the country name.
Name each argument as you like.

Within the 'getFullName' function, return the full name according to the country name.

  - ex1: `getFullName("Dale", "Seo", "KR")` should return `Seo Dale`.
  - ex2: `getFullName("Dale", "Seo", "US")` should return `Dale Seo`.

After that, inside the parentheses of console.log(), call the getFullName() function
with your first and last name and country name as the arguments.
*/

function getFullName(firstName, lastName, countryName){
  if(countryName==="KR"){
    return (lastName + " " + firstName);
  }else{
    return (firstName + " " + lastName);
  }
}

console.log(getFullName("Ben", "Sadick", "US"));
console.log(getFullName("Ben", "Sadick", "KR"));
