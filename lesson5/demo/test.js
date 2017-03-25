const fs = require('fs')

let stream = fs.createReadStream('input.txt')
stream.on('data', (chunk) =>{
  console.log(chunk.toString())
})
stream.on('end', () => {
  console.log('no more data')
})

let writeStream = fs.createWriteStream('output.txt')
writeStream.write('Hello!')
writeStream.end('stream finished');
