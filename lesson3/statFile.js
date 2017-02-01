var fs = require('fs');

fs.stat('ltcs.txt', function(err, stats) {
	if (err) {
		console.log(err);
	}
	console.log(stats);
})
