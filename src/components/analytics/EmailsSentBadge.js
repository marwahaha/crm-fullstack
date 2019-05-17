import React, { Component } from 'react';

class EmailsSentBadge extends Component {

    getNumOfEmails = (clients) => {

        let sent = clients.filter(c => c.emailType !== null)
        return sent

    }


    render() {

        let numOfEmails = this.getNumOfEmails(this.props.clientsData)

        return (
            <div id="badge">
                <span id="logoEmails" className="fas fa-envelope"></span>
                <span id="value">{numOfEmails.length}</span>
                <span id="text">Emails </span>
            </div>
        );
    }
}

export default EmailsSentBadge;