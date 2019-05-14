import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client';
import Headers from './Headers';
import SearchBar from './SearchBar';
import PopUp from './PopUp';


class Clients extends Component {
    constructor() {
        super()
        this.state = {
            clients: [],
            filteredClients: [],
            inputValue: "",
            selectedOption: "",
            showPopUp: false,
            singleClientData: ""

        }
    }


    getDataFromDB = async () => {
        let clientsFromDB = await axios.get('http://localhost:4500/clients')
        this.setState({ clients: clientsFromDB.data })

    }

    postToDB = async () => {
        let data = await require("../../data.json")
        data.map(async c => await axios.post('http://localhost:4500/newClient', c))

    }

    handleSearch = (inputValue, selectedOption) => {

        let clients = [...this.state.clients]
        let filteredClients = clients.filter(c => c[selectedOption].toLowerCase().includes(inputValue))

        this.setState({ inputValue: inputValue, selectedOption: selectedOption, filteredClients: filteredClients })

    }


    togglePopUp = (singleClientData) => {

    
        this.setState({
            showPopUp: !this.state.showPopUp,
            singleClientData: singleClientData
        })
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
                    {this.state.inputValue == "" ? clients.map((c, i) => <Client key={i} client={c}
                        togglePopUp={this.togglePopUp} />) :
                        filteredClients.map((f, i) => <Client key={i} client={f} togglePopUp={this.togglePopUp} />)}

                    {this.state.showPopUp ? <PopUp clientData={this.state.singleClientData} /> : null}

                </div>
            </div>
        );
    }
}

export default Clients;