const express = require('express')
const data = [
    {
        nbi: 1462000023,
        nama: 'rendi',
        sex: 'L'
    },
    {
        nbi: 1462000022,
        nama: 'Dwi',
        sex: 'L'
    },
    {
        nbi: 1462000021,
        nama: 'Hermawan',
        sex: 'L'
    },
    {
        nbi: 1462000020,
        nama: 'rendi dwi hermawan',
        sex: 'L'
    },
    {
        nbi: 1462000019,
        nama: 'aninditha',
        sex: 'P'
    },

]
const app = express()

app.listen(8000, () => {
    console.log("server run on port 8000");
})

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/data">data mahasiswa<a/>')
})
// with get data
app.get('/api/data', (req, res) => {
    const sortData = data.map((data) => {
        const { nbi, nama } = data
        return { nbi, nama }
    })
    res.json(sortData)
})
// with params
app.get('/api/search/:nbi', (req, res) => {
    const { nbi } = req.params;
    const searchData = data.find((data)=> data.nbi == Number(nbi));
    if (!searchData) {
        res.status(404).send("Data no find")
        res.end()
    }
    res.json(searchData);
})
// with query
app.get('/api/query', (req, res) => {
    const { searchName, limit } = req.query;
    console.log(searchName);
    console.log(limit);
    let searchData = data
    if (searchName) {
        searchData = searchData.filter((data)=>{
            return data.nama.startsWith(searchName)
        })
    }
    if (limit) {
        searchData = searchData.slice(0, Number(limit))
    }
    if (searchData.length < 1) {
        return res.status(200).json({succes:true, data:[]})
    }
    res.json(searchData);
})