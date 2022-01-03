const fs = require('fs')

for (let i = 0; i < 10000; i++) {
    fs.writeFileSync('./content/big-file.txt', `helo NodeJS ${i}`, {flag:'a'})
}