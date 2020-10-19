const { Socket } = require('dgram')
function formatDate(date) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    let day = date.getDate()
    let hour = date.getHours()
    let minutes = date.getMinutes()

    month = month < 10 ? '0' + month: month
    day = day < 10 ? '0' + day : day
    hour = hour < 10 ? '0' + hour : hour
    minutes = minutes < 10 ? '0' + minutes : minutes

    return `${year}-${month}-${day} ${hour}:${minutes}\n`
}
// console.log(formatDate(new Date()));
const net = require('net')
const server = net.createServer((socket) => {
    socket.end(formatDate(new Date()))
})
server.listen(process.argv[2])
