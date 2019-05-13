import React, { Component } from 'react';
import axios from 'axios';
import ClientInput from './ClientInput';

class Update extends Component {

    constructor() {
        super()
        this.state = {

            clientsMapped: []

        }
    }

    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:4500/clients/actions')
        this.setState({ clientsMapped: clients.data })
    }

    componentDidMount = async () => {
        await this.getDataFromDB()

    }


    render() {
        console.log(this.state.clientsMapped)
        return (
            <div>
                <ClientInput clients={this.state.clientsMapped} />
            </div>
        );
    }
}

export default Update;