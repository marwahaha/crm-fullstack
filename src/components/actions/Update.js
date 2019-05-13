import React, { Component } from 'react';
import axios from 'axios';
import ClientInput from './ClientInput';
import "../../css/update.css"

class Update extends Component {

    constructor() {
        super()
        this.state = {

            clientsMapped: [],
            owners: [],
            emailTypes: []

        }
    }

    getOwnersList = () => {
        let owners = new Set()
        this.state.clientsMapped.forEach(c => owners.add(c.owner))
        // console.log(Array.from(owners))
        this.setState({ owners: Array.from(owners) })
    }

    getEmailTypeList = () => {
        let emailTypes = new Set()
        this.state.clientsMapped.forEach(c => emailTypes.add(c.emailType))
        this.setState({ emailTypes: Array.from(emailTypes) })
    }

    transferOwner = async () => {
        let client = this.state.clientsMapped.find(c => c.name === this.state.clientsMapped.name)
        await axios.put(`http://localhost:4500/owner/${client._id}/${this.state.owner}`)
        this.setState({ changedOwner: true })
    }


    


    getDataFromDB = async () => {
        let clients = await axios.get('http://localhost:4500/clients/actions')
        this.setState({ clientsMapped: clients.data })
    }

    componentDidMount = async () => {
        await this.getDataFromDB()
        this.getOwnersList()
        this.getEmailTypeList()

    }



    render() {
        return (
            <div id="update">
                <h5>UPDATE</h5>
                <ClientInput clients={this.state.clientsMapped} />

                <div className="transferOwnership">Tranfer ownership to :
                <select>
                        {this.state.owners.map(o => <option value="owner">{o}</option>)}
                    </select>
                    <span onClick={this.getOwners} className="updateBtns">TRANSFER</span>
                </div>

                <div className="sendEmail">Send email :
                <select>
                        {this.state.emailTypes.map(e => <option value="owner">{e}</option>)}
                    </select>
                    <span onClick={this.getEmailTypeList} className="updateBtns">SEND</span>
                </div>

                <div className="declareSale">Declare sale!
                <span onClick={this.getEmailTypeList} className="updateBtns">DECLARE</span>
                </div>

            </div>
        );
    }
}

export default Update;