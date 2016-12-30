// export the warn, info and error functions so we can use it in logger-app.js by assigning it to the exports object.

var warn = function(message) {
  console.log("Warning: " + message);
};

var info = function(message) {
  console.log("Info: " + message);
};

var error = function(message) {
  console.log("Error: " + message);
};