const fs = require('fs')
fs.readdir(process.argv[2], (err, list) => {
    if(err) {
        console.log(err);
    } else {
        // console.log(list);
        list = list.filter((item) => {
            
            let pos = item.indexOf('.')
            if(pos === -1) 
                return false

            if(item.indexOf(process.argv[3], pos) === -1) 
                return false
            else {
                if(pos + process.argv[3].length === item.length - 1) 
                    return true
                else 
                    return false
            }
        })
        list.forEach((item) => {
            console.log(item);
        })
    }
})