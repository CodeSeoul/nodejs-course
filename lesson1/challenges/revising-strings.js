/*
You will often need to change the contents of a string.

Strings have built-in functionality that allow you to inspect and manipulate their contents.

Here is an example using the .replace() method:

  var example = 'Learn Teach Code LA';
  example = example.replace('LA', 'Seoul');
  console.log(example);


The challenge:

  Define a variable named pizza that references this string: 'pizza is alright'

  Use the .replace() method to change 'pizza' and 'alright' to 'burger' and 'wonderful' respectively.

  Use console.log() to print the results of the .replace() method to the terminal.
*/


var pizza = "Pizza is alright";
pizza = pizza.replace("Pizza", "Burger" )
pizza = pizza.replace("alright", "Wonderful")
console.log(pizza)
