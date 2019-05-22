import React, { Component } from 'react';
import axios from 'axios';
import ClientInput from './ClientInput';
import "../../css/update.css"

class Update extends Component {

    constructor() {
        super()
        this.state = {

            clientsMapped: [],
            clientToUpdate: "",
            selectedNewOwner: "",
            selectedEmailType: "",
            sold: null,
            owners: [],
            emailTypes: [],
            selectedClient: "",
            selectedNewOwner: ""

        }
    }

    changeValue = e => this.setState({ [e.target.id]: e.target.value })


    transferOwner = async () => {
        let filteredClient = this.state.clientsMapped.find(c => c.name == this.state.clientToUpdate)
        console.log(filteredClient._id)
        await axios.put(`/owner/${filteredClient._id}/${this.state.selectedNewOwner}`)
    }

    UpdateEmailType = async () => {
        let filteredClient = this.state.clientsMapped.find(c => c.name == this.state.clientToUpdate)
        console.log(filteredClient._id)
        console.log(this.state.selectedEmailType)

        await axios.put(`/emailType/${filteredClient._id}/${this.state.selectedEmailType}`)

    }

    declareSale = async () => {

        let filteredClient = this.state.clientsMapped.find(c => c.name == this.state.clientToUpdate)
        console.log(filteredClient.sold)
        if (filteredClient.sold) {
            return
        }
        else {
            await axios.put(`/declareSold/${filteredClient._id}`)
        }

    }

    getOwnersList = () => {
        let owners = new Set()
        this.state.clientsMapped.forEach(c => owners.add(c.owner))
        this.setState({ owners: Array.from(owners) })
    }

    getEmailTypeList = () => {
        let emailTypes = new Set()
        this.state.clientsMapped.forEach(c => emailTypes.add(c.emailType))
        this.setState({ emailTypes: Array.from(emailTypes) })
    }



    getDataFromDB = async () => {
        let clients = await axios.get('/clients/actions')
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
                <ClientInput clients={this.state.clientsMapped} changeValue={this.changeValue} />

                <div className="transferOwnership">Tranfer ownership to :
                <select id="selectedNewOwner" onChange={this.changeValue}>
                        {this.state.owners.map(o => <option value={o}>{o}</option>)}
                    </select>
                    <span onClick={this.transferOwner} id="transferBtn" className="updateBtns">TRANSFER</span>
                </div>

                <div className="sendEmail">Send email :
                <select id="selectedEmailType" onChange={this.changeValue}>
                        {this.state.emailTypes.map(e => <option value={e} onChange={this.changeValue}>{e}</option>)}
                    </select>
                    <span onClick={this.UpdateEmailType} className="updateBtns">SEND</span>
                </div>

                <div className="declareSale">Declare sale!
                <span onClick={this.declareSale} className="updateBtns">DECLARE</span>
                </div>

            </div>
        );
    }
}

export default Update;