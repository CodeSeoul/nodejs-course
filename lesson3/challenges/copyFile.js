// Copy contents from hello.html to hello-copy.html
var fs = require('fs')


// 1. Do this synchronously first
// const encoding = 'utf8';
// const contents = fs.readFileSync('hello.html', encoding);
// fs.writeFile('hello-copy.html', contents, encoding, (err) => {
//   console.log(err);
// })

// 2. Do the same thing asynchronously
fs.readFile('hello.html', (err, data) => {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile('hello-copy.html', data, (err) => {
      console.log(err);
    })
  }
})
