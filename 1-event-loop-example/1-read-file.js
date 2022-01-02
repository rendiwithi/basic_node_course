const fs = require('fs')

console.log("Aplikasi Run");

fs.readFile('./content/first.txt','utf-8', (err, result)=>{
    if (err) {
        console.log(err)
        return
    }
    console.log(result)
    console.log("berhasil load file")
})

console.log("Aplikasi Ready");