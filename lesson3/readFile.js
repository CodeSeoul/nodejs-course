var fs = require("fs");

fs.readFile('ltcs.txt', function(err, data) {
	if (err) {
   console.log(err);
	}
  // console.log(data);
  console.log(data.toString());
});