const express = require('express');
const logger = require('./logger');
const authorize = require('./authorize');
const morgan = require('morgan')
const app = express()
// request => middleware =>response
app.listen(8000, () => {
    console.log("server run on port 8000");
})
// use middleware on all req & single middleware
// app.use(logger)
// use middleware on all req & many middleware
app.use([logger, authorize, morgan('tiny')])

// use middleware one one req
// app.get('/', logger, (req, res) => {
//     res.send("Home")
// })
app.get('/', (req, res) => {
    res.send("Home")
})
app.get('/about', (req, res) => {
    res.send("About")
})