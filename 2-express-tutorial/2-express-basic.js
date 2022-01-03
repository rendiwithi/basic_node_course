const express = require('express')
const app = express()
const PORT = 8000
app.listen(PORT, ()=>{
    console.log(`Server run in port:${PORT}`);
})

app.get('/', (req, res)=>{
    res.send("Home Page")
})
app.get('/about', (req, res)=>{
    res.status(200).send("About Page")
})
app.all('*',(req,res)=>{
    res.status(404).send("Your request not in this server :)")
})