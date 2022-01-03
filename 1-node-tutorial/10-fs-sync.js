const fs = require('fs')

const first = fs.readFileSync('./content/first.txt', 'utf-8')

fs.writeFileSync(
    './content/result.txt',
    `isi first.txt: ${first}`,
    // menambahkan 
    // {flag: 'a'}
)