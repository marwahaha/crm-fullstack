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


    getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        let num = Math.floor(Math.random() * (max - min + 1)) + min;
        return num.toString()
    }

    addClient = async () => {
        let newClient = {

            _id : this.getRandomIntInclusive(),
            name : `${this.state.name} + ${this.state.surName}`,
            email : "",
            firstContact : "",
            emailType : null,
            sold : false,
            owner : this.state.owner,
            country : this.state.country
        
        }
        console.log(newClient)
        await axios.post('http://localhost:4500/newClient', newClient)

    }


    render() {
        return (
            <div id="add">

                <h5>ADD CLIENT</h5>
                <div>First Name : <input type="text" id="name" value={this.state.name} onChange={this.changeValue} /></div>
                <div>Surname : <input type="text" id="surName" value={this.state.surName} onChange={this.changeValue} /></div>
                <div>Country : <input type="text" id="country" value={this.state.country} onChange={this.changeValue} /></div>
                <div>Owner : <input type="text" id="owner" value={this.state.owner} onChange={this.changeValue} /></div>
                <div onClick={this.addClient} id="addBtn">Add New Client</div>

            </div>
        );
    }
}

export default Add;