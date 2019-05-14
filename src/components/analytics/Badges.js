import React, { Component } from 'react';
import "../../css/badges.css"
import NewClientsBadge from './NewClientsBadge';
import EmailsSentBadge from './EmailsSentBadge';
import OutstandingClientsBadge from './OutstandingClientsBadge';
import HottestCountryBadge from './HottestCountryBadge';


class Badges extends Component {
    render() {
        console.log("Hi")
        return (
            <div id="badges">
                <NewClientsBadge clientsData={this.props.clientsData} />
                <EmailsSentBadge clientsData={this.props.clientsData} />
                <OutstandingClientsBadge clientsData={this.props.clientsData} />
                <HottestCountryBadge clientsData={this.props.clientsData} />
            </div>
        );
    }
}

export default Badges;