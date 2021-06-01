const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    // res.send('Hello World!')

    // res.json({
    //     nama :'Candra',
    //     email:'candrakartika@gmail.com',
    //     noHP:'4999000'
    // });


    res.sendFile('./index.html',{root:__dirname});
});


app.get('/about', (req, res) => {
    res.sendFile('./about.html', { root: __dirname });
})

app.get('/contact', (req, res) => {
    res.sendFile('./contact.html', { root: __dirname });
})

app.use('/', (req, res) => {
    res.status('404')
    res.send('<h2>404<h2>')
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})