let sum = 0
// console.log(process.argv);
process.argv.forEach((item, index) => {
    if(index >= 2) {
        sum += parseInt(item)
    }
})
console.log(sum)