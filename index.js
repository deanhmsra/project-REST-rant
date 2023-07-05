require('dotenv').config()
const express = require('express')
const app = express()

//Controller
app.use('/places', require('./controllers/places'))

//Routes
app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('*', (req, res) => {
    res.status(404).send('<h1>404 Page</h1>')
})

app.listen(process.env.PORT)