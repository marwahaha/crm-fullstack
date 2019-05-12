import React, { Component } from 'react';
import axios from 'axios';
import Client from './Client';
import Headers from './Headers';


class Clients extends Component {


    render() {

        let data = this.props.data

        return (
            <div>
                <Headers />
                <div>
                    {data.map((d, i) => <Client key={i} client={d} />)}
                </div>
            </div>
        );
    }
}

export default Clients;