const http = require('http')

const server = http.createServer((req,res)=>{
    // Blocking Code
    if (req.url == '/') {
        res.end("Welcome to path /")
    } else if (req.url == '/about') {
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 1000; j++) {
                console.log(j);
            }
        }
        res.end("Welcome to path /about")
    } else {
        res.end(`
    <h1>Oops !!!</h1>
    <p>path is not listed</p>
    <a href="/">back to home</a>
    `)
    }
})

server.listen(8000, ()=>{
    console.log("server Runiing di port :8000...");
})