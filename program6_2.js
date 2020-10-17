let file = require('./program6_1')

file(process.argv[2], process.argv[3], (err, data) => {
    if(err) {
        return console.log(err);
    } else {
        data.forEach((item) => {
            console.log(item);
        })
    }
})