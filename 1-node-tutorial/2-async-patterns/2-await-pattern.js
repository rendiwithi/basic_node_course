const fs = require('fs').promises

const start = async () => {
    try {
        const first = await fs.readFile('./content/first.txt', 'utf8')
        await fs.writeFile(
            './content/result-await-pattern.txt',
            `Keren anjir ${first}`
        )
        console.log(first);
    } catch (error) {
        console.log(error);
    }
}

start()