const express = require('express')
const router = express.Router()
const Client = require("../model/Client")


getClients = async () => Client.find({})


router.get('/clients', async function (req, res) {
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

router.get('/clients/actions', async function (req, res) {
    let clients = await getClients()
    let mappedClients = clients.map(c => { return { _id: c._id, name: c.name, owner: c.owner, emailType: c.emailType , sold : c.sold} })
    res.send(mappedClients)
})

router.put('/owner/:id/:newOwner', function (req, res) {

    const id = req.params.id
    const owner = req.params.newOwner

    console.log(id)
    console.log(owner)


    let update = Client.findOneAndUpdate({ _id: id }, { owner: owner })
    update.then(function (client) {
        res.send("Client's owner has updated to " + owner)
    })

})

router.put('/emailType/:id/:newEmailType', function (req, res) {

    const id = req.params.id
    const email = req.params.newEmailType

    console.log(id)
    console.log(email)


    let update = Client.findOneAndUpdate({ _id: id }, { emailType: email })
    update.then(function (client) {
        res.send("Client's email type has updated to " + email)
    })

})

router.put('/declareSold/:id', function (req, res) {

    const id = req.params.id

    console.log(id)


    let update = Client.findOneAndUpdate({ _id: id }, { sold: true })
    update.then(function (client) {
        res.send("Client's sold status has updated to " + true)
    })

})


module.exports = router