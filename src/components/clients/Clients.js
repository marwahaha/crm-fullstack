import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client';
import Headers from './Headers';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: []

        }
    }


    getDataFromDB = async () => {
        let clientsFromDB = await axios.get('http://localhost:4500/clients')
        console.log(clientsFromDB)
        this.setState({ clients: clientsFromDB.data })

    }

    postToDB = async () => {
        let data = await require("../../data.json")

        data.map(async c => await axios.post('http://localhost:4500/newClient', c))

    }



    componentDidMount = async () => {

        await this.getDataFromDB()
    

    }

    toggleModal = (id) => {
        console.log(id)
        this.setState({ showModal: !this.state.showModal })
    }

    render() {

        let data = this.state.clients

        return (
            <div>

                <Headers />
                <div>
                    {data.map((d, i) => <Client key={i} client={d}
                        toggleModal={this.toggleModal} />)}
                </div>
            </div>
        );
    }
}

export default Clients;