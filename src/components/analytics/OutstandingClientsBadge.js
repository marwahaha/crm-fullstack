import React, { Component } from 'react';

class OutstandingClientsBadge extends Component {

    getNumOfOutstanding = (clients) => {

        let notSold = clients.filter(c => !c.sold)
        return notSold

    }
    
    render() {

        let numOfOutstanding = this.getNumOfOutstanding(this.props.clientsData)

        return (
            <div id="badge">
                <span id="logoOutstanding" className="fas fa-user-circle"></span>
                <span id="value">{numOfOutstanding.length}</span>
                <span id="text">Outstanding Clients</span>
            </div>
        );
    }
}

export default OutstandingClientsBadge;