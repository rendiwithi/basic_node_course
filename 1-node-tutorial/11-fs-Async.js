const { ifError } = require('assert/strict');
const fs = require('fs')

fs.readFile('./content/first.txt', 'utf-8', (err, data) => {
    if (err) {
        console.log(err);
        return;
    }
    console.log(data);
})

fs.writeFile(
    './content/result-async.txt',
    `ini membuat file Async`,
    (err) => {
        if (err) {
            console.log(err);
            return
        }
        console.log(`sukses`);
        console.log(fs.readFileSync("./content/result-async.txt", "utf-8"));
    }
)