import React, { Component } from 'react';
import "../../css/headers.css"

class Headers extends Component {
    render() {
        return (
            <div id="headers">
                <span>Name</span>
                <span>Surname</span>
                <span>Email</span>
                <span>First Contact</span>
                <span>Email Type</span>
                <span>Sold</span>
                <span>Owner</span>
                <span>Country</span>

            </div>
        );
    }
}

export default Headers;