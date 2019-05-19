import React, { Component } from 'react';
import TopEmployees from './charts/TopEmployees';
import SalesByX from './charts/SalesByX';
import "../../css/charts.css"


class Charts extends Component {
    render() {

        return (
            <div id="charts">
                <TopEmployees clientsData={this.props.clientsData} />
                <SalesByX clientsData={this.props.clientsData} />
            </div>
        );
    }
}

export default Charts;