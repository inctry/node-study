const { fstat } = require('fs')
const http = require('http')
const fs = require('fs')
const map = require('through2-map')

const server = http.createServer((request, response) => {
    const { method } = request
    if(method !== 'POST') {
        return response.end('Error')
    }

   request.pipe(map( (chunk) => {
       return chunk.toString().toUpperCase()
   })).pipe(response)

}).listen(process.argv[2])