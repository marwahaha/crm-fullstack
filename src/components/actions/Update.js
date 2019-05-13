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
            owners: [],
            emailTypes: [],
            selectedClient: "",
            selectedNewOwner: ""
            
        }
    }
    
    changeValue = e => this.setState({ [e.target.id]: e.target.value }, () => {
        console.log(this.state.clientToUpdate)
        console.log(this.state.selectedNewOwner)
    
    })

    
    transferOwner = async () => {
        
        let filteredClient = this.state.clientsMapped.filter(c => c.name == this.state.clientToUpdate)
        let filteredClientId = filteredClient.map(f => f._id)
        // console.log(filteredClientId.toString())
        await axios.put(`http://localhost:4500/owner/${filteredClientId.toString()}/${this.state.selectedNewOwner}`)
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
                <ClientInput clients={this.state.clientsMapped} changeValue={this.changeValue} />

                <div className="transferOwnership">Tranfer ownership to :
                <select id="selectedNewOwner" onChange={this.changeValue}>
                        {this.state.owners.map(o => <option value={o}>{o}</option>)}
                    </select>
                    <span onClick={this.transferOwner} className="updateBtns">TRANSFER</span>
                </div>

                <div className="sendEmail">Send email :
                <select>
                        {this.state.emailTypes.map(e => <option id="" value="owner" onChange={this.changeValue}>{e}</option>)}
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