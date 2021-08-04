const express = require('express')

const sequel = require('./database');

const app = express()
const port = 3000;

app.get('/', async function(req, res){
    try {
        await sequel.authenticate();
        res.send('<h1>Hello World</h1> <br> Sequel Database connected');
        console.log('Connectd to the database');
    } catch (error) {
        res.send('<h1>Hello World</h1> <br> Sequel Database not connected')
        console.error('Unable to connect to the database:', error);
    }
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
