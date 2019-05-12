import React, { Component } from 'react';
import "../../css/client.css"
import Modal from './Modal';

class Client extends Component {

    constructor() {
        super()
        this.state = {

         showModal: false

        }
    }

    toggleModal = () => {

        this.setState({ showModal: !this.state.showModal })
        this.props.toggleModal(this.props.client._id)

    }

    // splitName = (fullName) => {
    //     let splitName = fullName.split(" ")
    //     return splitName[0]
    // }


    render() {

        let client = this.props.client
        let splitName = client.name.split(" ")

        return (

            <div onClick={this.toggleModal} id="client">

                <span>{splitName[0]}</span>
                <span>{splitName[1]}</span>
                <span>{client.email}</span>
                <span>{client.firstContact}</span>
                <span>{client.emailType}</span>
                <span>{client.sold == true ? <span>Yes</span> : <span>No</span>}</span>
                <span>{client.owner}</span>
                <span>{client.country}</span>
                {/* <span>{this.state.showModal ? <Modal name={splitName[0]} sureName={splitName[1]} country={client.country}/> : null}</span> */}


            </div>
        );
    }
}

export default Client;