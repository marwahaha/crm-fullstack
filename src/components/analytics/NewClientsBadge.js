import React, { Component } from 'react';

class NewClientsBadge extends Component {

    
    getMonthName = (date = new Date()) => new Intl.DateTimeFormat('en-US', {month: "long"}).format(date)

    getNewestClients = () => {
        let newClients = this.props.clientsData.filter(c =>
            (new Date(c.firstContact).getMonth() == new Date().getMonth()) &&
            (new Date(c.firstContact).getFullYear() == new Date().getFullYear())).length
        return newClients
    }



    render() {
        console.log(new Date().getMonth())
        return (
            <div id="badge">
                <span id="logoNewest" className="fas fa-chart-line"></span>
                <span id="value">{this.getNewestClients()}</span>
                <span id="text">New {this.getMonthName()} Clients</span>
            </div>
        );
    }

}


export default NewClientsBadge;