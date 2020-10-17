const fs = require('fs')
const path = require('path')
module.exports = function(dir, ext, callback) {
    fs.readdir(dir, (err, data) => {
        if(err) {
            return callback(err, data)
        } else {
            let list = data
            list = list.filter((item) => {
                if(path.extname(item) === '.' + ext)
                    return true
                else
                    return false
            })
            callback(null, list)
        }
    })
}