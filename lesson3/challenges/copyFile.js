// Copy contents from hello.html to hello-copy.html
var fs = require('fs');
let source = 'hello.html';
let target = 'hello-copy.html';

// 1. Do this synchronously first
// let content = fs.readFileSync(source, 'utf8');
// console.log(content);
// fs.writeFileSync(target, content, 'utf8');

// 2. Do the same thing asynchronously
fs.readFile(source, 'utf8', (e, data)=> {
  if(e){
    console.console.log('Failed to read');
  } else {
    console.log(data);
    fs.writeFile(target, data, 'utf8', (e)=> {
      if(e){
        console.log('Failed to write file');
      } else {
        console.log('Done');
      }
    });
  }
});
