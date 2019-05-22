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
            filterUsed: false,
            showPopUp: false,
            inputValue: "",
            selectedOption: "",
            singleClientData: "",
            paginationIndex: 1,

        }
    }


    getDataFromDB = async () => {
        let clientsFromDB = await axios.get('/clients')
        this.setState({ clients: clientsFromDB.data })

    }


    postToDB = async () => {
        let data = await require("../../data.json")
        data.map(async c => await axios.post('/newClient', c))

    }

    handleSearch = (inputValue, selectedOption) => {

        let clients = [...this.state.clients]
        let filteredClients = clients.filter(c => c[selectedOption].toLowerCase().includes(inputValue))


        this.setState({ inputValue, selectedOption, filteredClients })

        if (this.state.inputValue !== "") {
            this.setState({ filterUsed: true })
        } else {
            this.setState({ filterUsed: false })
        }

    }


    togglePopUp = (singleClientData) => {

        let clients = [...this.state.clients]

        this.setState({
            showPopUp: !this.state.showPopUp,
            singleClientData: singleClientData
        })
    }



    componentDidMount = async () => await this.getDataFromDB()


    HandlePagination = (action) => {

        if (action == "forward" && !this.state.filterUsed && this.state.paginationIndex + 20 <= this.state.clients.length) { this.setState({ paginationIndex: this.state.paginationIndex + 20 }) }        
        if (action == "forward" && this.state.filterUsed && this.state.paginationIndex + 20 <= this.state.filteredClients.length) { this.setState({ paginationIndex: this.state.paginationIndex + 20 }) }
        if (action == "back" && this.state.paginationIndex > 1) { this.setState({ paginationIndex: this.state.paginationIndex - 20 }) }
    }



    render() {

        let clients = this.state.clients
        let filteredClients = this.state.filteredClients
        let paginationIndex = this.state.paginationIndex

        return (

            <div>

                <Headers />
                <SearchBar handleSearch={this.handleSearch}
                    HandlePagination={this.HandlePagination}
                    paginationIndex={this.state.paginationIndex} />
                <div>
                    {this.state.inputValue == "" ? clients.slice(paginationIndex, paginationIndex + 20).map((c, i) => <Client key={i} client={c}
                        togglePopUp={this.togglePopUp} />) :
                        filteredClients.slice(paginationIndex - 1, paginationIndex + 19).map((f, i) => <Client key={i} client={f} togglePopUp={this.togglePopUp} />)}

                    {this.state.showPopUp ? <PopUp clientData={this.state.singleClientData}
                        getDataFromDB={this.getDataFromDB} togglePopUp={this.togglePopUp} /> : null}

                </div>
            </div>
        );
    }
}

export default Clients;