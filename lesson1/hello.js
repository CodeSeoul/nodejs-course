function greeting(hour, fullmoon, name) {
  if (hour > 19 || hour < 5) {
    if (fullmoon === true) {
      if (name === "vanHelsing") {
        return('happy hunting');
      }
      return('beware');
    }
    return('good evening');
  } else if (hour > 12 && hour < 19) {
    return('good afternoon');
  } else {
    return('good morning')
  }
}

var fullmoon = true;
var name = 'nate';
var hour = Math.round(Math.random() * 24);

console.log(greeting(hour, fullmoon, name));
