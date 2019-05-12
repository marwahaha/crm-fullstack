import React, { Component } from 'react';
import "../../css/client.css"

class Client extends Component {

    toggleModal = () => {

        this.props.toggleModal(this.props.client._id)

    }

    render() {

        let client = this.props.client


        return (

            <div onClick={this.toggleModal} id="client">

                <span>{client.name}</span>
                <span>{client.email}</span>
                <span>{client.firstContact}</span>
                <span>{client.emailType}</span>
                <span>{client.sold == true ? <span>Yes</span> : <span>No</span>}</span>
                <span>{client.owner}</span>
                <span>{client.country}</span>

            </div>
        );
    }
}

export default Client;