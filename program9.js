let http = require('http')
let array = [null, null, null]
function getstr(url, id) {
    let str = new String()
    http.get(url, (response) => {
        response.on('data', (data) => {
           str += data.toString()
        }).on('end', () => {
            array[id] = str
        })
    })
}
getstr(process.argv[2], 0)
getstr(process.argv[3], 1)
getstr(process.argv[4], 2)
setTimeout(()=> {
    for(let s of array)
        console.log(s)
}, 1000)