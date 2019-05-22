const express = require('express')
const path = require('path')
const app = express()
const bodyParser = require('body-parser')
const api = require('./server/routes/api')
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/clientsDB', { useNewUrlParser: true })

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS')
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With')

    next()
})

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use('/', api)
app.use(express.static(path.join(__dirname, 'build')));



app.get('/sanity', function (req, res) {
    res.send("ok")
})

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = 4500
app.listen(process.env.PORT || PORT);
