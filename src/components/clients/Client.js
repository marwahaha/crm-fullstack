import React, { Component } from 'react';
import "../../css/client.css"
import PopUp from './PopUp';

class Client extends Component {

    constructor() {
        super()
        this.state = {

         showPopUp: false

        }
    }

    togglePopUp = () => {

        this.setState({ showPopUp: !this.state.showPopUp })

    }

    render() {

        let client = this.props.client
        let splitName = client.name.split(" ")

        return (

            <div onClick={this.togglePopUp} id="client">

                <span>{splitName[0]}</span>
                <span>{splitName[1]}</span>
                <span>{client.email}</span>
                <span>{client.firstContact}</span>
                <span>{client.emailType}</span>
                <span>{client.sold == true ? <span>Yes</span> : <span>No</span>}</span>
                <span>{client.owner}</span>
                <span>{client.country}</span>   
                <span>{this.state.showPopUp ? <PopUp name={splitName[0]} surName={splitName[1]} country={client.country}/> : null}</span>


            </div>
        );
    }
}

export default Client;