const fs = require('fs')
const file = fs.readFileSync(process.argv[2])
let str = file.toString()
str = str.split('\n')
// console.log(str);
console.log(str.length - 1)