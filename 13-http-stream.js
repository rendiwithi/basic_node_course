const http = require('http')
const server = http.createServer()
var port = 8000
console.log(`Server Run on port ${port}`);
server.on('request', (req, res) => {
    res.end('Server Run')
})

server.listen(port)