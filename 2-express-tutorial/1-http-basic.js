// Library yang di pakai
const http = require('http')
const fs = require('fs')


// Port yang dipakai
var PORT = 8000
// penanda server berjalan
console.log(`Server Running on port:${PORT}`);
// File yang perlu di load
const homePage = fs.readFileSync('./navbar-app/index.html')
const homeStyles = fs.readFileSync('./navbar-app/styles.css')
const homeImage = fs.readFileSync('./navbar-app/logo.svg')
const homeLogic = fs.readFileSync('./navbar-app/browser-app.js')



var server = http.createServer((req, res) => {
    var url = req.url;
    // Home Page (/)
    if (url == `/`) {
        res.writeHead(200, { "content-type": "text/html" })
        res.write(homePage)
        res.end()
    }
    // About Page (/about)
    else if (url == `/about`) {
        res.writeHead(200, { "content-type": "text/html" })
        res.write('<h1>Welcome to About</h1>')
        res.end()
    }
     // Styles File (/styles.css)
     else if (url == `/styles.css`) {
        res.writeHead(200, { "content-type": "text/css" })
        res.write(homeStyles)
        res.end()
    }
     // browser-app.js File (/browser-app.js)
     else if (url == `/browser-app.js`) {
        res.writeHead(200, { "content-type": "text/javascript" })
        res.write(homeLogic)
        res.end()
    }
     // Logo File (/logo.svg)
     else if (url == `/logo.svg`) {
        res.writeHead(200, { "content-type": "image/svg+xml" })
        res.write(homeImage)
        res.end()
    }
    // Not Found / 404 Page
    else {
        res.writeHead(404, { "content-type": "text/html" })
        res.write('<h1>Sorry your request not found in server :)</h1>')
        res.end()
    }
})

server.listen(PORT)