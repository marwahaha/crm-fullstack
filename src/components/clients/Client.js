import React, { Component } from 'react';
import "../../css/client.css"
import PopUp from './PopUp';

class Client extends Component {


    togglePopUp = () => {
        let singleClientData = {
            id: this.props.client._id,
            name: this.props.client.name,
            country: this.props.client.country
        }

        this.props.togglePopUp(singleClientData)
    }

    getFormmatedDate = date => {
        date = new Date(date);
        let day = date.getDate() - 1;
        const month = date.toLocaleString('en-us', { month: 'long' });
        let year = date.getFullYear();
        return `${month} ${day}, ${year}`;
    };

    render() {

        let client = this.props.client
        let splitName = client.name.split(" ")

        return (

            <div onClick={this.togglePopUp} id="client">

                <span className="clientRow">{splitName[0]}</span>
                <span className="clientRow">{splitName[1]}</span>
                <span className="clientRow">{client.email}</span>
                <span className="firstContact">{this.getFormmatedDate(client.firstContact)}</span>
                <span className="clientRow">{client.emailType}</span>
                <span className="clientRow">{client.sold == true ? <span>Yes</span> : <span>No</span>}</span>
                <span className="clientRow">{client.owner}</span>
                <span className="clientRow">{client.country}</span>

            </div>
        );
    }
}

export default Client;