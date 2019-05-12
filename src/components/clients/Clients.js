import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client';
import Headers from './Headers';
import Modal from './Modal';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            showModal: false

        }
    }


    getDataFromDB = async () => {
        let clientsFromDB = await axios.get('http://localhost:4500/clients')
        console.log(clientsFromDB)
        this.setState({ clients: clientsFromDB.data })

    }

    postToDB = async () => {
        let data = await require("../../data.json")
        console.log(data.map(d => d.name))  

        data.map(async c => await axios.post('http://localhost:4500/newClient', c))
        this.getDataFromDB()

    }



    componentDidMount = async () => {

        this.postToDB()

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
                <div>{this.state.showModal ? <Modal /> : null}</div>

                <div>
                    {data.map((d, i) => <Client key={i} client={d} toggleModal={this.toggleModal} />)}
                </div>
            </div>
        );
    }   
}

export default Clients;