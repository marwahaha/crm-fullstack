import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client';
import Headers from './Headers';
import SearchBar from './SearchBar';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            inputValue: "",
            selectedOption: "",
            filteredClients: []

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

    handleSearch = (inputValue, selectedOption) => {

        let clients = [...this.state.clients]
        let filteredClients = clients.filter(c => c[selectedOption].toLowerCase().includes(inputValue))
        // console.log(filteredClients)



        this.setState({ inputValue: inputValue, selectedOption: selectedOption, filteredClients : filteredClients })

    }




    componentDidMount = async () => {

        await this.getDataFromDB()


    }


    render() {

        let clients = this.state.clients
        let filteredClients = this.state.filteredClients

        return (
            <div>

                <Headers />
                <SearchBar handleSearch={this.handleSearch} />
                <div>
                    {this.state.inputValue == "" ? clients.map((c, i) => <Client key={i} client={c}/>) : filteredClients.map((f, i) => <Client key={i} client={f}/>)}
                </div>
            </div>
        );
    }
}

export default Clients;