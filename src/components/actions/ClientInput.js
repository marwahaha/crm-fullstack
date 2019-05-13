import React, { Component } from 'react';


class ClientInput extends Component {
  

    changeValue = e => {
        this.props.changeValue(e)
    }


    render() {

        let clients = this.props.clients

        return (
            <div id="clientInput">
                <span>Client Name:  </span>
                <input list="clientNames" id="clientToUpdate" onChange={this.changeValue} />
                <datalist id="clientNames">
                    {clients.map((c, i) => <option key={i} value={c.name} />)}
                </datalist>
            </div>
        );
    }
}

export default ClientInput;