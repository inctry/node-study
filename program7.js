let http = require('http')
let cnt = 0
http.get(process.argv[2], (response) => {
    response.on('data', (data) => {
        console.log(data.toString());
    })

})
