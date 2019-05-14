import React, { Component } from 'react';

class OutstandingClientsBadge extends Component {
    render() {
        return (
            <div id="badge">
                <span id="logoOutstanding" className="fas fa-user-circle"></span>
                <span id="value">14</span>
                <span id="text">New September Clients</span>
            </div>
        );
    }
}

export default OutstandingClientsBadge;