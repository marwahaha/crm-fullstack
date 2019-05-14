import React, { Component } from 'react';

class NewClientsBadge extends Component {


    getNewClients = () => {
        let newClients = this.props.clientsData.filter(c =>
            (new Date(c.firstContact).getMonth() == new Date().getMonth()) &&
            (new Date(c.firstContact).getFullYear() == new Date().getFullYear())).length
        return newClients
    }

    render() {
        return (
            <div id="badge">
                <span id="logoNewest" className="fas fa-chart-line"></span>
                <span id="value">{this.getNewClients()}</span>
                <span id="text">New September Clients</span>
            </div>
        );
    }

}


export default NewClientsBadge;