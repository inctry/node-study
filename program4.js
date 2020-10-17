const fs = require('fs')
let buf = null
fs.readFile(process.argv[2], (err, data) => {
    if(!err) {
        buf = data
        console.log(buf.toString().split('\n').length - 1);
    } else {
        console.log(err);
    }
})

// console.log(str.length - 1);