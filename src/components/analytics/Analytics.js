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
        let clientsFromDB = await axios.get('/clients')
        this.setState({ clients: clientsFromDB.data })

    }

    componentDidMount = async () => await this.getDataFromDB()


    render() {
        return (
            <div id="analytics">
                <Badges clientsData={this.state.clients}/>
                <Charts clientsData={this.state.clients}/>
            </div>
        );
    }
}

export default Analytics;