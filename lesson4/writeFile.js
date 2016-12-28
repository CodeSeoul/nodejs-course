var fs = require("fs");

fs.writeFile('ltcs.txt', 'Learn Teach Code Seoul', function(err) {
   console.log("Data written successfully!");
});