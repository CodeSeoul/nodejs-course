const fs = require('fs');

let content = "Hello, This is Dan Rathers Speaking."

fs.writeFile('data.txt', content, function(err){
  if(err){
    console.log(err);
  }
})

fs.readFile('data.txt', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data.toString());
  }
})

fs.stat('data.txt', function(err, data){
  if(err){
    console.log(err);
  }else{
    console.log(data);
  }
})



console.log("Ran without problem");
