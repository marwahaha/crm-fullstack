import React, { Component } from 'react';
import Badges from './Badges';
import "../../css/analytics.css"
import Charts from './Charts';
import axios from 'axios';



class Analytics extends Component {

    constructor(props) {
        super(props)
        this.state = {
            clients: []
        }
    }


    getDataFromDB = async () => {
        let clientsFromDB = await axios.get('http://localhost:4500/clients')
        this.setState({ clients: clientsFromDB.data })

    }

    componentDidMount = async () => await this.getDataFromDB()


    render() {
        console.log(this.state.clients)
        return (
            <div id="analytics">
                <Badges clientsData={this.state.clients}/>
                <Charts />
            </div>
        );
    }
}

export default Analytics;