import React, { Component } from 'react';
import "../../css/add.css"
import axios from 'axios';


class Add extends Component {
    constructor() {
        super()
        this.state = {
            name: "",
            surName: "",
            country: "",
            owner: ""

        }
    }

    changeValue = e => this.setState({ [e.target.id]: e.target.value })


    addClient = async () => {
        let newClient = {

            _id : "",
            name : `${this.state.name} ${this.state.surName}`,
            email : "",
            firstContact : "",
            emailType : null,
            sold : false,
            owner : this.state.owner,
            country : this.state.country
        
        }
        await axios.post('http://localhost:4500/newClient', newClient)

    }


    render() {
        return (
            <div id="add">

                <h5>ADD CLIENT</h5>
                <div className="inputRow">First Name : <input type="text" id="name" value={this.state.name} onChange={this.changeValue} /></div>
                <div className="inputRow">Surname : <input type="text" id="surName" value={this.state.surName} onChange={this.changeValue} /></div>
                <div className="inputRow">Country : <input type="text" id="country" value={this.state.country} onChange={this.changeValue} /></div>
                <div className="inputRow">Owner : <input type="text" id="owner" value={this.state.owner} onChange={this.changeValue} /></div>
                <div onClick={this.addClient} id="addBtn">Add New Client</div>

            </div>
        );
    }
}

export default Add;