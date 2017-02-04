var time = Math.floor(Math.random() * 24);
var moon = Math.round(Math.random());

console.log('The time is ' + time + ':00' + ' and the moon is ' + moon);

var name = 'nate';

if (time >= 6 && time <= 12) console.log('good morning');
else if (time > 13 && time < 19) console.log('good afternoon');
else if (moon) {
	if (name === 'VanHelsing') console.log('happy hunting');
	else console.log('beware');	
}
else console.log('good evening');
	

