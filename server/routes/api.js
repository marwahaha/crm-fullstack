const express = require('express')
const router = express.Router()
const Client = require("../model/Client")


router.get('/clients', function (req, res) {

    Client.find({}).exec(function (err, clients) {
        console.log(clients)
        res.send(clients)
    });
    

})


router.post("/newClient", async function (req, res) {
    // CHECK IF "POST" WORKS (POSTMAN)

    let data = req.body    
    let newClient = new Client(data)

    await newClient.save()
    res.end()
})

module.exports = router