import React, { Component } from 'react';
import TopEmployees from './charts/TopEmployees';
import SalesByX from './charts/SalesByX';
import "../../css/charts.css"
import SalesSince from './charts/SalesSince';


class Charts extends Component {
    render() {

        return (
            <div id="charts">
                <TopEmployees clientsData={this.props.clientsData} />
                <SalesByX clientsData={this.props.clientsData} />
                <SalesSince clientsData={this.props.clientsData} />
            </div>
        );
    }
}

export default Charts;