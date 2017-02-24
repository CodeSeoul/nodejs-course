function hello(name) {
	console.log('Hello,', name, '!');
}

function helloAfterHey(name, callback) {
	console.log('Hey~');
	callback(name);
}

helloAfterHey('Dale', hello);
