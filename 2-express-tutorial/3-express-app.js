const express = require('express')
const path = require('path')
const app = express()
const PORT = 8000

app.listen(PORT, ()=>{
    console.log(`Server run in port:${PORT}`);
})
app.use(express.static('./public'))
app.get('/', (req, res)=>{
    res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))
})

app.all('*',(req,res)=>{
    res.status(404).send("Your request not in this server :)")
})