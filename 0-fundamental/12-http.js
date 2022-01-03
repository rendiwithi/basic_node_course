const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url == '/') {
        res.end("Welcome to path /")
    } else if (req.url == '/about') {
        res.end("Welcome to path /about")
    } else {
        res.end(`
    <h1>Oops !!!</h1>
    <p>path is not listed</p>
    <a href="/">back to home</a>
    `)
    }
})
server.listen(8000)