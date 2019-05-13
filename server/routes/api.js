const express = require('express')
const router = express.Router()
const Client = require("../model/Client")


getClients = async () => Client.find({})


router.get('/clients', async function(req, res) {
    let clients = await getClients()
    res.send(clients)
})


router.post("/newClient", async function (req, res) {

    console.log("Got new client")

    let data = req.body    
    let newClient = new Client(data)

    await newClient.save()
    res.end()
})

router.get('/clients/actions', async function(req, res) {
    let clients = await getClients()
    let mappedClients = clients.map(c => {return {_id: c._id, name: c.name, owner: c.owner}})
    res.send(mappedClients)
})

module.exports = router