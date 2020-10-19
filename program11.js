const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')
const server = http.createServer((request, response) => {
    let readble = fs.createReadStream(process.argv[3])
    readble.pipe(response)

}).listen(process.argv[2])