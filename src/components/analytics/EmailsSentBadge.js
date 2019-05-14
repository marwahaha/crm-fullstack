import React, { Component } from 'react';

class EmailsSentBadge extends Component {
    render() {
        return (
            <div id="badge">
                <span id="logoEmails" className="fas fa-envelope"></span>
                <span id="value">14</span>
                <span id="text">New September Clients</span>
            </div>
        );
    }
}

export default EmailsSentBadge;