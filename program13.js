const http = require('http')
const { argv } = require('process')
const url = require('url')

const server = http.createServer((request, response) => {
    let requestUrl = new URL(request.url, `http://${request.headers.host}`)
    if(requestUrl.pathname === '/api/parsetime') {
        let requestData = requestUrl.searchParams.get('iso')
        let date = new Date(requestData)
        let returndate = {
            hour: date.getHours(),
            minute: date.getMinutes(),
            second: date.getSeconds()
        }
        // console.log(returndate);
        returndate = JSON.stringify(returndate)
        // console.log(returndate);
        response.writeHead(200, { 'Content-Type': 'application/json'})
        response.end(returndate)
    } else if(requestUrl.pathname === '/api/unixtime') {
        let requestData = requestUrl.searchParams.get('iso')
        let date = new Date(requestData)
        let unixtime = JSON.stringify({
            unixtime: date.getTime()
        })
        response.writeHead(200, { 'Content-Type': 'application/json'})
        response.end(unixtime)
    }
}).listen(Number(process.argv[2]))