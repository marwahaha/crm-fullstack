import React, { Component } from 'react';


class ClientInput extends Component {
    constructor(){
        super()
        this.state={
            name: ""
        }
    }

    
    setName = event => this.setState({ name: event.target.value })
    

    render() {

        let clients = this.props.clients
        console.log(clients)

        return (
            <div id="clientInput">
                <span>Client Name:  </span>
                <input list="namesList" name="id" onChange={this.setName}/>
                <datalist id="namesList">
                    {clients.map((c, i)  => <option key={i} value={c.name} />)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;