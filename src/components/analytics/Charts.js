import React, { Component } from 'react';
import TopEmployessChart from './TopEmployessChart';

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