// export the warn, info and error functions so we can use it in logger-app.js
// by assigning it to the exports object.
var logger = {
   warn: function(message) {
    console.log("Warning: " + message);
  },

   info :function(message) {
    console.log("Info: " + message);
  },

   error: function(message) {
    console.log("Error: " + message);
  }
}


module.exports = logger;
