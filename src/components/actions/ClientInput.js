import React, { Component } from 'react';


class ClientInput extends Component {
    constructor(){
        super()
        this.state={
            name: ""
        }
    }

    
    setName = e => this.setState({ name: e.target.value })
    

    render() {

        let clients = this.props.clients

        return (
            <div id="clientInput">
                <span>Client Name:  </span>
                <input list="clientNames" name="id" onChange={this.setName}/>
                <datalist id="clientNames">
                    {clients.map((c, i)  => <option key={i} value={c.name} />)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;