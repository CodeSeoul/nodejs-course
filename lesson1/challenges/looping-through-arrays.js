/*
Define a variable named 'pets' that references this array:

	['cat', 'dog', 'rat']

Create a for loop that changes each string in the array so that they are plural.

After the for loop, use console.log() to print the pets array to the terminal.
*/

var pets = ['cat', 'dog', 'rat'];
for(var i = 0; i < pets.length; i++){
  pets[i]+="s";
}
console.log(pets);
