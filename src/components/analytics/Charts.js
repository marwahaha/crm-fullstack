import React, { Component } from 'react';
import TopEmployessChart from './TopEmployessChart';
import EmailsSentBadge from './EmailsSentBadge';

class Charts extends Component {
    render() {
    
        return (
            <div>
                <TopEmployessChart clientsData={this.props.clientsData} />
            </div>
        );
    }
}

export default Charts;