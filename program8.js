let http = require('http')
let str = new String()
http.get(process.argv[2], (response) => {
    response.on('data', (data) => {
        str += data.toString()
    }).on('end', () => {
        console.log(str.length)
        console.log(str)
    })
})